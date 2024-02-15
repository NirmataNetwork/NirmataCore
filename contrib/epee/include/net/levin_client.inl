// Copyright (c) 2006-2013, Andrey N. Sabelnikov, www.sabelnikov.net
// All rights reserved.
// 
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
// * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above copyright
// notice, this list of conditions and the following disclaimer in the
// documentation and/or other materials provided with the distribution.
// * Neither the name of the Andrey N. Sabelnikov nor the
// names of its contributors may be used to endorse or promote products
// derived from this software without specific prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER  BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// 




//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
#include "string_tools.h"
namespace epee
{
  namespace levin
  {

    template<typename transport_t>
    bool levin_client_impl_t<transport_t>::connect(u_long ip, int port, unsigned int timeout, const std::string& bind_ip)
    {
      return m_transport.connect(string_tools::get_ip_string_from_int32(ip), port, timeout, timeout, bind_ip);
    }
    //------------------------------------------------------------------------------
    template<typename transport_t>
    bool levin_client_impl_t<transport_t>::connect(const std::string& addr, int port, unsigned int timeout, const std::string& bind_ip)
    {
      return m_transport.connect(addr, port, timeout, timeout, bind_ip);
    }
    //------------------------------------------------------------------------------
    template<typename transport_t>
    bool levin_client_impl_t<transport_t>::is_connected()
    {
      return m_transport.is_connected();
    }
    //------------------------------------------------------------------------------
    template<typename transport_t>
    bool levin_client_impl_t<transport_t>::disconnect()
    {
      return m_transport.disconnect();
    }
    //------------------------------------------------------------------------------
    template<typename transport_t>
    levin_client_impl_t<transport_t>::levin_client_impl_t()
    {
    }
    //------------------------------------------------------------------------------
    template<typename transport_t>
    levin_client_impl_t<transport_t>::~levin_client_impl_t()
    {
      disconnect();
    }
    //------------------------------------------------------------------------------
    template<typename transport_t>
    int levin_client_impl_t<transport_t>::invoke(int command, const std::string& in_buff, std::string& buff_out)
    {
      if (!is_connected())
        return -1;

      bucket_head head = { 0 };
      head.m_signature = LEVIN_SIGNATURE;
      head.m_cb = in_buff.size();
      head.m_have_to_return_data = true;
      head.m_command = command;
      if (!m_transport.send(&head, sizeof(head)))
        return -1;

      if (!m_transport.send(in_buff))
        return -1;

      std::string local_buff;
      if (!m_transport.recv_n(local_buff, sizeof(bucket_head)))
        return -1;

      head = *(bucket_head*)local_buff.data();


      if (head.m_signature != LEVIN_SIGNATURE)
      {
        LOG_PRINT_L0("Signature missmatch in response");
        return -1;
      }

      if (!m_transport.recv_n(buff_out, head.m_cb))
        return -1;

      return head.m_return_code;
    }
    //------------------------------------------------------------------------------
    template<typename transport_t>
    int levin_client_impl_t<transport_t>::notify(int command, const std::string& in_buff)
    {
      if (!this->is_connected())
        return -1;

      bucket_head head = { 0 };
      head.m_signature = LEVIN_SIGNATURE;
      head.m_cb = in_buff.size();
      head.m_have_to_return_data = false;
      head.m_command = command;

      if (!m_transport.send((const char*)&head, sizeof(head)))
        return -1;

      if (!m_transport.send(in_buff))
        return -1;

      return 1;
    }
    //------------------------------------------------------------------------------
    template<typename transport_t>
    int levin_client_impl2<transport_t>::invoke(int command, const std::string& in_buff, std::string& buff_out)
    {
      if (!this->is_connected())
        return -1;

      bucket_head2 head = { 0 };
      head.m_signature = LEVIN_SIGNATURE;
      head.m_cb = in_buff.size();
      head.m_have_to_return_data = true;
      head.m_command = static_cast<uint32_t>(command);
      head.m_protocol_version = LEVIN_PROTOCOL_VER_1;
      head.m_flags = LEVIN_PACKET_REQUEST;
      if (!this->m_transport.send(&head, sizeof(head)))
        return -1;

      if (!this->m_transport.send(in_buff))
        return -1;

      //Since other side of connection could be running by async server, 
      //we can receive some unexpected notify(forwarded broadcast notifications for example).
      //let's ignore every notify in the channel until we get invoke response
      std::string local_buff;

      while (true)
      {
        if (!this->m_transport.recv_n(local_buff, sizeof(bucket_head2)))
          return LEVIN_ERROR_NET_ERROR;

        head = *(bucket_head2*)local_buff.data();
        if (head.m_signature != LEVIN_SIGNATURE)
        {
          LOG_PRINT_L0("Signature missmatch in response");
          return LEVIN_ERROR_SIGNATURE_MISMATCH;
        }
        if (!this->m_transport.recv_n(buff_out, head.m_cb))
          return LEVIN_ERROR_NET_ERROR;

        //now check if this is response to invoke  (and extra validate if it's response to this(!) invoke)
        if (head.m_flags&LEVIN_PACKET_RESPONSE)
        {
          //we got response, extra validate if its response to our request
          CHECK_AND_ASSERT_MES(head.m_command == static_cast<uint32_t>(command), LEVIN_ERROR_PROTOCOL_INCONSISTENT, "command id missmatch in response: " << head.m_command << ", expected: " << command);
          return head.m_return_code;
        }
      }
      //never comes here
      return LEVIN_ERROR_INTERNAL;
    }
    //------------------------------------------------------------------------------
    template<typename transport_t>
    int levin_client_impl2<transport_t>::notify(int command, const std::string& in_buff)
    {
      if (!this->is_connected())
        return -1;

      bucket_head2 head = { 0 };
      head.m_signature = LEVIN_SIGNATURE;
      head.m_cb = in_buff.size();
      head.m_have_to_return_data = false;
      head.m_command = command;
      head.m_protocol_version = LEVIN_PROTOCOL_VER_1;
      head.m_flags = LEVIN_PACKET_REQUEST;

      if (!this->m_transport.send((const char*)&head, sizeof(head)))
        return -1;

      if (!this->m_transport.send(in_buff))
        return -1;

      return 1;
    }

  }
}
//------------------------------------------------------------------------------