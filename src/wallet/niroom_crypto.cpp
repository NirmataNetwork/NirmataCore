#include "niroom_crypto.h"

#include <openssl/evp.h>
#include <openssl/kdf.h>
#include <openssl/rand.h>

#include <memory>
#include <stdexcept>

namespace tools
{
namespace niroom_crypto
{
  namespace
  {
    struct evp_cipher_context_deleter
    {
      void operator()(EVP_CIPHER_CTX* value) const { EVP_CIPHER_CTX_free(value); }
    };

    struct evp_pkey_context_deleter
    {
      void operator()(EVP_PKEY_CTX* value) const { EVP_PKEY_CTX_free(value); }
    };
  }

  crypto::hash derive_key(const crypto::hash& key, const std::string& context)
  {
    crypto::hash result = {};
    std::unique_ptr<EVP_PKEY_CTX, evp_pkey_context_deleter> ctx(
      EVP_PKEY_CTX_new_id(EVP_PKEY_HKDF, nullptr));
    size_t result_size = sizeof(result);
    if (!ctx ||
        EVP_PKEY_derive_init(ctx.get()) <= 0 ||
        EVP_PKEY_CTX_set_hkdf_md(ctx.get(), EVP_sha256()) <= 0 ||
        EVP_PKEY_CTX_set1_hkdf_salt(
          ctx.get(),
          reinterpret_cast<const unsigned char*>("NIROOM-HKDF-V1"),
          sizeof("NIROOM-HKDF-V1") - 1) <= 0 ||
        EVP_PKEY_CTX_set1_hkdf_key(
          ctx.get(), reinterpret_cast<const unsigned char*>(&key), sizeof(key)) <= 0 ||
        EVP_PKEY_CTX_add1_hkdf_info(
          ctx.get(),
          reinterpret_cast<const unsigned char*>(context.data()),
          static_cast<int>(context.size())) <= 0 ||
        EVP_PKEY_derive(
          ctx.get(), reinterpret_cast<unsigned char*>(&result), &result_size) <= 0 ||
        result_size != sizeof(result))
      throw std::runtime_error("NiRoom HKDF failed");
    return result;
  }

  encrypted_message encrypt(
    const crypto::hash& key,
    const std::string& plaintext,
    const std::string& associated_data)
  {
    encrypted_message result;
    if (RAND_bytes(result.nonce.data(), static_cast<int>(result.nonce.size())) != 1)
      throw std::runtime_error("NiRoom nonce generation failed");
    std::unique_ptr<EVP_CIPHER_CTX, evp_cipher_context_deleter> ctx(EVP_CIPHER_CTX_new());
    if (!ctx)
      throw std::runtime_error("NiRoom cipher initialization failed");
    int length = 0;
    int ciphertext_size = 0;
    result.ciphertext.resize(plaintext.size() + 16);
    if (EVP_EncryptInit_ex(ctx.get(), EVP_chacha20_poly1305(), nullptr, nullptr, nullptr) != 1 ||
        EVP_CIPHER_CTX_ctrl(
          ctx.get(), EVP_CTRL_AEAD_SET_IVLEN, static_cast<int>(result.nonce.size()), nullptr) != 1 ||
        EVP_EncryptInit_ex(
          ctx.get(), nullptr, nullptr,
          reinterpret_cast<const unsigned char*>(&key), result.nonce.data()) != 1 ||
        (!associated_data.empty() && EVP_EncryptUpdate(
          ctx.get(), nullptr, &length,
          reinterpret_cast<const unsigned char*>(associated_data.data()),
          static_cast<int>(associated_data.size())) != 1) ||
        (!plaintext.empty() && EVP_EncryptUpdate(
          ctx.get(), reinterpret_cast<unsigned char*>(&result.ciphertext[0]), &length,
          reinterpret_cast<const unsigned char*>(plaintext.data()),
          static_cast<int>(plaintext.size())) != 1))
      throw std::runtime_error("NiRoom encryption failed");
    ciphertext_size = length;
    if (EVP_EncryptFinal_ex(
          ctx.get(),
          reinterpret_cast<unsigned char*>(&result.ciphertext[0]) + ciphertext_size,
          &length) != 1 ||
        EVP_CIPHER_CTX_ctrl(
          ctx.get(), EVP_CTRL_AEAD_GET_TAG,
          static_cast<int>(result.tag.size()), result.tag.data()) != 1)
      throw std::runtime_error("NiRoom encryption finalization failed");
    result.ciphertext.resize(ciphertext_size + length);
    return result;
  }

  bool decrypt(
    const crypto::hash& key,
    const encrypted_message& message,
    const std::string& associated_data,
    std::string& plaintext)
  {
    std::unique_ptr<EVP_CIPHER_CTX, evp_cipher_context_deleter> ctx(EVP_CIPHER_CTX_new());
    if (!ctx)
      throw std::runtime_error("NiRoom cipher initialization failed");
    std::string candidate(message.ciphertext.size() + 16, '\0');
    int length = 0;
    int plaintext_size = 0;
    if (EVP_DecryptInit_ex(ctx.get(), EVP_chacha20_poly1305(), nullptr, nullptr, nullptr) != 1 ||
        EVP_CIPHER_CTX_ctrl(
          ctx.get(), EVP_CTRL_AEAD_SET_IVLEN, static_cast<int>(message.nonce.size()), nullptr) != 1 ||
        EVP_DecryptInit_ex(
          ctx.get(), nullptr, nullptr,
          reinterpret_cast<const unsigned char*>(&key), message.nonce.data()) != 1 ||
        (!associated_data.empty() && EVP_DecryptUpdate(
          ctx.get(), nullptr, &length,
          reinterpret_cast<const unsigned char*>(associated_data.data()),
          static_cast<int>(associated_data.size())) != 1) ||
        (!message.ciphertext.empty() && EVP_DecryptUpdate(
          ctx.get(), reinterpret_cast<unsigned char*>(&candidate[0]), &length,
          reinterpret_cast<const unsigned char*>(message.ciphertext.data()),
          static_cast<int>(message.ciphertext.size())) != 1))
      throw std::runtime_error("NiRoom decryption failed");
    plaintext_size = length;
    if (EVP_CIPHER_CTX_ctrl(
          ctx.get(), EVP_CTRL_AEAD_SET_TAG,
          static_cast<int>(message.tag.size()),
          const_cast<unsigned char*>(message.tag.data())) != 1 ||
        EVP_DecryptFinal_ex(
          ctx.get(),
          reinterpret_cast<unsigned char*>(&candidate[0]) + plaintext_size,
          &length) != 1)
      return false;
    candidate.resize(plaintext_size + length);
    plaintext.swap(candidate);
    return true;
  }
}
}
