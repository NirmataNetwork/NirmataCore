#include "gtest/gtest.h"

#include <cstring>

#include "wallet/niroom_crypto.h"

TEST(niroom_crypto, authenticated_round_trip)
{
  crypto::hash chain_key = {};
  std::memset(&chain_key, 0x42, sizeof(chain_key));
  const crypto::hash message_key =
    tools::niroom_crypto::derive_key(chain_key, "message");
  const std::string associated_data = "NIROOM-MSG-V1\nsession\n0";
  const std::string original = "encrypted NiRoom message";
  const tools::niroom_crypto::encrypted_message encrypted =
    tools::niroom_crypto::encrypt(message_key, original, associated_data);

  std::string decrypted;
  ASSERT_TRUE(tools::niroom_crypto::decrypt(
    message_key, encrypted, associated_data, decrypted));
  ASSERT_EQ(original, decrypted);
}

TEST(niroom_crypto, rejects_modified_tag_and_associated_data)
{
  crypto::hash chain_key = {};
  std::memset(&chain_key, 0x24, sizeof(chain_key));
  const crypto::hash message_key =
    tools::niroom_crypto::derive_key(chain_key, "message");
  const std::string associated_data = "NIROOM-MSG-V1\nsession\n7";
  tools::niroom_crypto::encrypted_message encrypted =
    tools::niroom_crypto::encrypt(message_key, "authenticated", associated_data);

  std::string plaintext = "must remain unchanged";
  encrypted.tag[0] ^= 0x01;
  ASSERT_FALSE(tools::niroom_crypto::decrypt(
    message_key, encrypted, associated_data, plaintext));
  ASSERT_EQ("must remain unchanged", plaintext);

  encrypted.tag[0] ^= 0x01;
  ASSERT_FALSE(tools::niroom_crypto::decrypt(
    message_key, encrypted, associated_data + "-modified", plaintext));
}
