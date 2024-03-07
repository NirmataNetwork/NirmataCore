// Copyright (c) 2023 Nirmata Network
// Copyright (c) 2014-2018 Zano Project
// Copyright (c) 2014-2018 The Louisdor Project
// Distributed under the MIT/X11 software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include "genesis_acc.h"


namespace currency
{
#ifndef TESTNET
  const std::string ggenesis_tx_pub_key_str = "da45fd299c44ba3adfb7fcb51109085735e66647829d382554b0e437c7c736ea";
  const crypto::public_key ggenesis_tx_pub_key = epee::string_tools::parse_tpod_from_hex_string<crypto::public_key>(ggenesis_tx_pub_key_str);
  extern const genesis_tx_dictionary_entry ggenesis_dict[4];
  const genesis_tx_dictionary_entry ggenesis_dict[4] = {
  {858979963208505091ULL,3},
  {1997455837956599680ULL,0},
  {7122048385254309514ULL,1},
  {10985373553493546217ULL,2}
};

#else 
  const std::string ggenesis_tx_pub_key_str = "da45fd299c44ba3adfb7fcb51109085735e66647829d382554b0e437c7c736ea";
  const crypto::public_key ggenesis_tx_pub_key = epee::string_tools::parse_tpod_from_hex_string<crypto::public_key>(ggenesis_tx_pub_key_str);
  extern const genesis_tx_dictionary_entry ggenesis_dict[4];
  const genesis_tx_dictionary_entry ggenesis_dict[4] = {
  {858979963208505091ULL,3},
  {1997455837956599680ULL,0},
  {7122048385254309514ULL,1},
  {10985373553493546217ULL,2}
};
#endif
  


}



