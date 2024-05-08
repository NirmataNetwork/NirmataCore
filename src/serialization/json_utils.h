// Copyright (c) 2014-2017 The The Louisdor Project
// Copyright (c) 2012-2013 The Cryptonote developers
// Distributed under the MIT/X11 software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include <sstream>
#include "json_archive.h"

namespace serialization {

template<class T>
std::string dump_json(T &v)
{
  std::stringstream ostr;
  json_archive<true> oar(ostr);
  assert(serialization::serialize(oar, v));
  return ostr.str();
};

} // namespace serialization
