# NIRMATACORE BLOCKCHAIN SECURITY ANALYSIS REPORT
## Protection Against 51% Attacks and Double Spending

---

### 1. CONSENSUS ARCHITECTURE

#### 1.1 Hybrid PoW/PoS Consensus
The project implements a hybrid consensus model combining Proof-of-Work (PoW) and Proof-of-Stake (PoS).

**Implementation:** `src/currency_core/blockchain_storage.cpp`, lines 1931-2020
```cpp
bool blockchain_storage::is_reorganize_required(const block_extended_info& main_chain_bei, 
                                               const alt_chain_type& alt_chain, 
                                               const crypto::hash& proof_alt)
```

**Key Features:**
- PoS blocks are only allowed after a certain height (`pos_minimum_heigh`)
- Different difficulty comparison algorithms for pre and post-hardfork
- Combined difficulty usage for main chain selection

**51% Attack Protection:**
- Hash rate distribution between PoW and PoS complicates attacks
- Attackers would need to control both computational power and significant token stake

#### 1.2 Difficulty Adjustment Algorithm
**File:** `src/currency_core/blockchain_storage.cpp`, lines 1099-1137
```cpp
wide_difficulty_type blockchain_storage::get_next_diff_conditional(bool pos) const
```

**Security Parameters:**
- `DIFFICULTY_WINDOW = 1440` blocks (difficulty adjustment window)
- `DIFFICULTY_POS_TARGET = 60` seconds
- `DIFFICULTY_POW_TARGET = 60` seconds
- Separate difficulty adjustment for PoW and PoS

**Protection Mechanisms:**
- Separate difficulty adjustment prevents manipulation through single block type
- Large adjustment window (1440 blocks) ensures stability

---

### 2. DOUBLE SPENDING PROTECTION

#### 2.1 Key Images System
**File:** `src/currency_core/blockchain_storage.cpp`, lines 3802-3827
```cpp
bool operator()(const txin_to_key& in) const
{
    const crypto::key_image& ki = in.k_image;
    auto ki_ptr = m_db_spent_keys.get(ki);
    if (ki_ptr)
    {
        //double spend detected
        LOG_PRINT_RED_L0("tx with id: " << m_tx_id << " in block id: " << m_bl_id 
                         << " have input marked as spent with key image: " << ki);
        return false;
    }
    m_db_spent_keys.set(ki, m_bl_height);
}
```

**Protection Mechanisms:**
- Each transaction input has a unique Key Image
- System tracks spent Key Images in database
- Verification occurs both in transaction pool and during block addition

#### 2.2 Transaction Pool Validation
**File:** `src/currency_core/tx_pool.cpp`, lines 707-724
```cpp
bool tx_memory_pool::have_tx_keyimges_as_spent(const transaction& tx, 
                                               crypto::key_image* p_spent_ki) const
{
    for(const auto& in : tx.vin)
    {
        if (in.type() == typeid(txin_to_key))
        {
            CHECKED_GET_SPECIFIC_VARIANT(in, const txin_to_key, tokey_in, true);
            if (have_tx_keyimg_as_spent(tokey_in.k_image))
            {
                if (p_spent_ki) *p_spent_ki = tokey_in.k_image;
                return true;
            }
        }
    }
    return false;
}
```

**Protection Features:**
- Key Images verification before adding to pool
- Prevention of double spending transaction propagation across network
- Maintenance of spent Key Images index

#### 2.3 Transaction Semantic Validation
**File:** `src/currency_core/tx_semantic_validation.cpp`, lines 86-91
```cpp
//check if tx use different key images
if (!check_tx_inputs_keyimages_diff(tx))
{
    LOG_PRINT_RED_L0("tx inputs have the same key images");
    return false;
}
```

**Security Checks:**
- All Key Images within single transaction must be unique
- Input and output correctness verification
- Sum validation (inputs >= outputs)

---

### 3. CHECKPOINT SYSTEM

#### 3.1 Checkpoint Implementation
**File:** `src/currency_core/checkpoints.cpp`, lines 20-28
```cpp
bool checkpoints::add_checkpoint(uint64_t height, const std::string& hash_str)
{
    crypto::hash h = null_hash;
    bool r = epee::string_tools::parse_tpod_from_hex_string(hash_str, h);
    CHECK_AND_ASSERT_MES(r, false, "WRONG HASH IN CHECKPOINTS!!!");
    CHECK_AND_ASSERT_MES(0 == m_points.count(height), false, "WRONG HASH IN CHECKPOINTS!!!");
    m_points[height] = h;
    return true;
}
```

#### 3.2 Checkpoint Validation
**File:** `src/currency_core/blockchain_storage.cpp`, lines 5281-5292
```cpp
if (m_checkpoints.is_in_checkpoint_zone(get_current_blockchain_size()))
{
    m_is_in_checkpoint_zone = true;
    if (!m_checkpoints.check_block(get_current_blockchain_size(), id))
    {
        LOG_ERROR("CHECKPOINT VALIDATION FAILED");
        bvc.m_verification_failed = true;
        return false;
    }
}
```

**Protection Functions:**
- Fixed checkpoints prevent deep reorganizations
- Protection against long alternative chain attacks
- Mandatory verification when in checkpoint zone

---

### 4. ALTERNATIVE CHAIN MANAGEMENT

#### 4.1 Alternative Block Limitations
**File:** `src/currency_core/currency_config.h`, lines 97-98
```cpp
#define CURRENCY_ALT_BLOCK_LIVETIME_COUNT    (CURRENCY_BLOCKS_PER_DAY*7)//one week
#define CURRENCY_ALT_BLOCK_MAX_COUNT         43200 //30 days
```

#### 4.2 Alternative Chain Pruning
**File:** `src/currency_core/blockchain_storage.cpp`, lines 4787-4831
```cpp
bool blockchain_storage::prune_aged_alt_blocks()
{
    uint64_t current_height = get_current_blockchain_size();
    size_t count_to_delete = 0;
    if(m_alternative_chains.size() > m_core_runtime_config.max_alt_blocks)
        count_to_delete = m_alternative_chains.size() - m_core_runtime_config.max_alt_blocks;
    
    for(auto it = m_alternative_chains.begin(); it != m_alternative_chains.end();)
    {
        if (current_height > it->second.height && 
            current_height - it->second.height > CURRENCY_ALT_BLOCK_LIVETIME_COUNT)
        {
            do_erase_altblock(it++);
        }
    }
}
```

**Protection Mechanisms:**
- Maximum alternative block count limitation (43200)
- Automatic cleanup of blocks older than one week
- Prevention of memory overflow through alternative chain attacks

#### 4.3 Fork Resolution Algorithm
**File:** `src/currency_core/blockchain_storage.cpp`, lines 1986-2014
```cpp
boost::multiprecision::uint1024_t alt = get_a_to_b_relative_cumulative_difficulty(
    difficulty_pos_at_split_point, difficulty_pow_at_split_point, alt_cumul_diff, main_cumul_diff);
boost::multiprecision::uint1024_t main = get_a_to_b_relative_cumulative_difficulty(
    difficulty_pos_at_split_point, difficulty_pow_at_split_point, main_cumul_diff, alt_cumul_diff);

if (main < alt)
    return true; // reorganization required
```

**Features:**
- Combined PoW and PoS difficulty usage
- Relative chain difficulty comparison
- Additional conflict resolution through `memcmp` for PoS blocks

---

### 5. NETWORK SECURITY

#### 5.1 IP Address Blocking
**File:** `src/p2p/net_node.inl`, lines 131-155
```cpp
bool node_server<t_payload_net_handler>::is_ip_in_blacklist(uint32_t addr)
{
    CRITICAL_REGION_LOCAL(m_blocked_ips_lock);
    auto it = m_blocked_ips.find(addr);
    if (it == m_blocked_ips.end()) return false;
    
    if (time(nullptr) - it->second > P2P_IP_BLOCKTIME)
    {
        m_blocked_ips.erase(it);
        LOG_PRINT_CYAN("IP " << string_tools::get_ip_string_from_int32(addr) 
                      << " is unblocked due to blocking expiration.", LOG_LEVEL_0);
        return false;
    }
    return true;
}
```

#### 5.2 Failure Scoring System
**File:** `src/p2p/net_node.inl`, lines 159-175
```cpp
bool node_server<t_payload_net_handler>::add_ip_fail(uint32_t address)
{
    CRITICAL_REGION_LOCAL(m_ip_fails_score_lock);
    uint64_t fails = ++m_ip_fails_score[address];
    if(fails > P2P_IP_FAILS_BEFOR_BLOCK)
    {
        auto it = m_ip_fails_score.find(address);
        it->second = P2P_IP_FAILS_BEFOR_BLOCK/2;
        block_ip(address);
    }
    return true;
}
```

**Protection Mechanisms:**
- Automatic blocking of malicious IPs after exceeding failure limit
- Temporary blocking with automatic removal
- Removal of blocked IPs from peer lists

#### 5.3 Network Connection Validation
**File:** `src/p2p/net_node.inl`, lines 1354-1399
```cpp
int node_server<t_payload_net_handler>::handle_handshake(...)
{
    if(arg.node_data.network_id != P2P_NETWORK_ID)
    {
        LOG_PRINT_L0("WRONG NETWORK AGENT CONNECTED! id=" 
                    << string_tools::get_str_from_guid_a(arg.node_data.network_id));
        drop_connection(context);
        add_ip_fail(context.m_remote_ip);
        return 1;
    }
    
    if (!tools::check_remote_client_version(arg.payload_data.client_version))
    {
        LOG_PRINT_CCONTEXT_L2("COMMAND_HANDSHAKE: wrong client version: " 
                             << arg.payload_data.client_version);
        drop_connection(context);
        add_ip_fail(context.m_remote_ip);
        return 1;
    }
}
```

**Security Checks:**
- Network ID verification to prevent connection to wrong network
- Client version validation
- Peer ID uniqueness verification
- Maintainer signature validation

---

### 6. MINING VALIDATION

#### 6.1 Proof-of-Work Verification
**File:** `src/currency_core/blockchain_storage.cpp`, lines 5316-5328
```cpp
proof_hash = get_block_longhash(bl);

if (!check_hash(proof_hash, current_diffic))
{
    LOG_ERROR("Block with id: " << id << ENDL
             << "PoW hash: " << proof_hash << ENDL 
             << "nonce: " << bl.nonce << ENDL
             << "expected difficulty: " << current_diffic);
    bvc.m_verification_failed = true;
    return false;
}
```

#### 6.2 Proof-of-Stake Verification
**File:** `src/currency_core/blockchain_storage.cpp`, lines 5067-5077
```cpp
final_diff = basic_diff / amount;
if (!check_hash(proof_hash, final_diff))
{
    LOG_ERROR("PoS difficulty check failed for block " << get_block_hash(b) 
             << " @ HEIGHT " << get_block_height(b) << ":" << ENDL
             << "  basic_diff:  " << basic_diff << ENDL
             << "  final_diff:  " << final_diff << ENDL
             << "  amount:      " << print_money_brief(amount) << ENDL
             << "  kernel_hash: " << proof_hash);
    return false;
}
```

**Validation Mechanisms:**
- Strict hash verification for both block types
- Adaptive PoS difficulty adjustment based on token amount
- Coinstake transaction signature validation

---

### 7. SECURITY STRENGTHS

#### 7.1 Comprehensive Double Spending Protection

**Multi-layered Key Images verification:**
- Transaction pool level verification
- Block level verification
- Database persistence of spent Key Images

#### 7.2 Robust Fork Resolution System

**Combined difficulty approach:**
- Utilization of both PoW and PoS cumulative difficulty
- Deterministic conflict resolution
- Protection against chain selection manipulation

#### 7.3 Effective Network Protection

**Automated malicious node blocking:**
- IP-based failure scoring system
- Temporary blocking with automatic expiration
- Strict network handshake validation

#### 7.4 Adaptive Difficulty Adjustment

**Separate adjustment for PoW and PoS:**
- Independent difficulty calculation prevents cross-type manipulation
- Large averaging window ensures stability
- Protection against difficulty manipulation attacks

### 8. CONCLUSION

The NirmataCore project demonstrates a high level of protection against 51% attacks and double spending through:

1. **Hybrid PoW/PoS architecture** requiring attackers to control different resource types
2. **Comprehensive double spending protection** through Key Images system
3. **Multi-level validation** of blocks and transactions
4. **Effective checkpoint system** preventing deep reorganizations
5. **Advanced network protection** against malicious nodes

The system provides reliable protection against main blockchain attack vectors, ensuring network security through multiple complementary defense mechanisms. The hybrid consensus approach significantly raises the cost and complexity of potential attacks while maintaining network decentralization and security.
