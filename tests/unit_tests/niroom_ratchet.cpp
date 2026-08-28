#include "gtest/gtest.h"

#include <boost/filesystem.hpp>

#include "string_tools.h"
#include "wallet/wallet2.h"

namespace
{
  struct temporary_wallet_file
  {
    std::wstring path;

    temporary_wallet_file()
    {
      const std::string name = "niroom-test-" +
        epee::string_tools::pod_to_hex(crypto::rand<crypto::hash>());
      path = (boost::filesystem::temp_directory_path() / name).wstring();
    }

    ~temporary_wallet_file()
    {
      boost::system::error_code ignored;
      boost::filesystem::remove(path, ignored);
    }
  };
}

TEST(niroom_ratchet, bidirectional_dh_ratchet_and_out_of_order_delivery)
{
  temporary_wallet_file alice_file;
  temporary_wallet_file bob_file;
  tools::wallet2 alice;
  tools::wallet2 bob;
  alice.generate(alice_file.path, "alice-password", false);
  bob.generate(bob_file.path, "bob-password", false);

  const tools::wallet2::niroom_device alice_device =
    alice.niroom_create_device(3);
  const tools::wallet2::niroom_device bob_device =
    bob.niroom_create_device(3);
  ASSERT_FALSE(bob_device.one_time_prekeys.empty());
  const tools::wallet2::niroom_prekey& bob_one_time =
    bob_device.one_time_prekeys.front();

  const tools::wallet2::niroom_session_header initial_header =
    alice.niroom_create_session(
      "bob-address",
      bob_device.device_id,
      bob_device.identity_public_key,
      bob_device.signed_prekey_public,
      bob_device.signed_prekey_signature,
      bob_one_time.id,
      &bob_one_time.public_key);
  bob.niroom_accept_session(
    "alice-address", alice_device.device_id, initial_header);

  const tools::wallet2::niroom_encrypted_message alice_first =
    alice.niroom_encrypt_message(initial_header.session_id, "alice-first");
  ASSERT_EQ("alice-first", bob.niroom_decrypt_message(alice_first));

  const tools::wallet2::niroom_encrypted_message bob_reply =
    bob.niroom_encrypt_message(initial_header.session_id, "bob-reply");
  ASSERT_EQ("bob-reply", alice.niroom_decrypt_message(bob_reply));

  const tools::wallet2::niroom_encrypted_message alice_ratchet =
    alice.niroom_encrypt_message(initial_header.session_id, "alice-new-ratchet");
  ASSERT_EQ("alice-new-ratchet", bob.niroom_decrypt_message(alice_ratchet));

  const tools::wallet2::niroom_encrypted_message delayed_one =
    alice.niroom_encrypt_message(initial_header.session_id, "delayed-one");
  const tools::wallet2::niroom_encrypted_message delayed_two =
    alice.niroom_encrypt_message(initial_header.session_id, "delayed-two");
  const tools::wallet2::niroom_encrypted_message delivered_first =
    alice.niroom_encrypt_message(initial_header.session_id, "delivered-first");

  ASSERT_EQ("delivered-first", bob.niroom_decrypt_message(delivered_first));
  ASSERT_EQ("delayed-one", bob.niroom_decrypt_message(delayed_one));
  ASSERT_EQ("delayed-two", bob.niroom_decrypt_message(delayed_two));
  ASSERT_THROW(bob.niroom_decrypt_message(delayed_one), std::runtime_error);

  const tools::wallet2::niroom_device rotated = alice.niroom_rotate_device(5);
  EXPECT_EQ(alice_device.device_id, rotated.device_id);
  EXPECT_EQ(alice_device.identity_public_key, rotated.identity_public_key);
  EXPECT_NE(alice_device.signed_prekey_public, rotated.signed_prekey_public);
  EXPECT_EQ(5, rotated.one_time_prekeys.size());
  ASSERT_THROW(
    alice.niroom_encrypt_message(initial_header.session_id, "stale-session"),
    std::runtime_error);
}

TEST(niroom_history, persists_retry_ciphertext_and_status)
{
  temporary_wallet_file wallet_file;
  const std::string ciphertext = "exact-ciphertext-for-idempotent-retry";
  {
    tools::wallet2 wallet;
    wallet.generate(wallet_file.path, "history-password", false);
    tools::wallet2::niroom_message_record message = AUTO_VAL_INIT(message);
    message.message_id = "message-1";
    message.conversation_id = "direct:alice:bob";
    message.peer_address = "bob";
    message.incoming = false;
    message.plaintext = "hello";
    message.wire_ciphertext = ciphertext;
    message.created_at = 1700000000000;
    message.status = "pending";
    wallet.niroom_store_message(message);
    wallet.niroom_store_message(message);

    ASSERT_EQ(1, wallet.niroom_list_messages("", "pending", 100).size());
    wallet.niroom_set_message_status(message.message_id, "failed");
    wallet.niroom_set_message_status(message.message_id, "pending");
    wallet.niroom_set_message_status(message.message_id, "stored");
    ASSERT_THROW(
      wallet.niroom_set_message_status(message.message_id, "pending"),
      std::runtime_error);
  }

  {
    tools::wallet2 restored;
    restored.load(wallet_file.path, "history-password");
    const std::vector<tools::wallet2::niroom_message_record> messages =
      restored.niroom_list_messages("", "stored", 100);
    ASSERT_EQ(1, messages.size());
    EXPECT_EQ("message-1", messages.front().message_id);
    EXPECT_EQ(ciphertext, messages.front().wire_ciphertext);
    EXPECT_EQ("stored", messages.front().status);
  }
}

TEST(niroom_history, deletes_only_the_selected_conversation)
{
  temporary_wallet_file wallet_file;
  tools::wallet2 wallet;
  wallet.generate(wallet_file.path, "delete-password", false);
  for (size_t i = 0; i != 3; ++i)
  {
    tools::wallet2::niroom_message_record message = AUTO_VAL_INIT(message);
    message.message_id = "message-" + std::to_string(i);
    message.conversation_id = i == 2 ? "direct:alice:carol" : "direct:alice:bob";
    message.peer_address = i == 2 ? "carol" : "bob";
    message.incoming = true;
    message.plaintext = "hello";
    message.created_at = 1700000000000 + i;
    message.status = "read";
    wallet.niroom_store_message(message);
  }
  EXPECT_EQ(2, wallet.niroom_delete_conversation("bob"));
  EXPECT_EQ(0, wallet.niroom_delete_conversation("bob"));
  const auto remaining = wallet.niroom_list_messages("", "", 100);
  ASSERT_EQ(1, remaining.size());
  EXPECT_EQ("carol", remaining.front().peer_address);
}

TEST(niroom_contacts, persists_profile_block_and_pinned_device_key)
{
  temporary_wallet_file wallet_file;
  crypto::public_key first_key = AUTO_VAL_INIT(first_key);
  crypto::secret_key first_secret = AUTO_VAL_INIT(first_secret);
  crypto::public_key changed_key = AUTO_VAL_INIT(changed_key);
  crypto::secret_key changed_secret = AUTO_VAL_INIT(changed_secret);
  crypto::generate_keys(first_key, first_secret);
  crypto::generate_keys(changed_key, changed_secret);

  {
    tools::wallet2 wallet;
    wallet.generate(wallet_file.path, "contacts-password", false);
    wallet.niroom_trust_device("bob-address", "bob-phone", first_key);
    wallet.niroom_trust_device("bob-address", "bob-phone", first_key);
    ASSERT_THROW(
      wallet.niroom_trust_device("bob-address", "bob-phone", changed_key),
      std::runtime_error);

    tools::wallet2::niroom_contact_record contact =
      wallet.niroom_list_contacts().front();
    contact.display_name = "Bob";
    contact.avatar_seed = "green";
    contact.blocked = true;
    contact.updated_at = 1700000000000;
    wallet.niroom_upsert_contact(contact);
    ASSERT_THROW(
      wallet.niroom_trust_device("bob-address", "bob-laptop", first_key),
      std::runtime_error);
  }

  {
    tools::wallet2 restored;
    restored.load(wallet_file.path, "contacts-password");
    const std::vector<tools::wallet2::niroom_contact_record> contacts =
      restored.niroom_list_contacts();
    ASSERT_EQ(1, contacts.size());
    EXPECT_EQ("Bob", contacts.front().display_name);
    EXPECT_EQ("green", contacts.front().avatar_seed);
    EXPECT_TRUE(contacts.front().blocked);
    ASSERT_EQ(1, contacts.front().trusted_identity_keys.size());
    EXPECT_EQ(
      epee::string_tools::pod_to_hex(first_key),
      contacts.front().trusted_identity_keys.at("bob-phone"));
  }
}
