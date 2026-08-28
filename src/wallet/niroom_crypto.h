#pragma once

#include <array>
#include <cstdint>
#include <string>
#include <vector>

#include "crypto/crypto.h"

namespace tools
{
namespace niroom_crypto
{
  struct encrypted_message
  {
    std::array<unsigned char, 12> nonce;
    std::array<unsigned char, 16> tag;
    std::string ciphertext;
  };

  crypto::hash derive_key(const crypto::hash& key, const std::string& context);
  encrypted_message encrypt(
    const crypto::hash& key,
    const std::string& plaintext,
    const std::string& associated_data);
  bool decrypt(
    const crypto::hash& key,
    const encrypted_message& message,
    const std::string& associated_data,
    std::string& plaintext);
}
}
