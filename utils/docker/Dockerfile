###########################################################################################
## nirmatad Dockerfile
###########################################################################################

#
# Usage:
# (make sure you have correct permission for /var/data/nirmata-data prior to run!)
#
#   docker run --restart=always -v /var/data/nirmata-data:/home/nirmata/.Nirmata -p 11231:11231 -p 11232:11232 --name=nirmatad -dit sowle/nirmata-full-node
#
# To get into container and interact with the daemon:
#   docker attach nirmatad
#
# To detach from container and left it running:
#   Ctrl+P, Ctrl+Q
#
# To stop container:
#   docker stop nirmatad
#
# To build with different lib versions, pass through --build-arg's
#   docker build --build-arg OPENSSL_VERSION_DOT=1.1.1n --build-arg OPENSSL_HASH=40dceb51a4f6a5275bde0e6bf20ef4b91bfc32ed57c0552e2e8e15463372b17a -f utils/docker/Dockerfile .
#
# Available Build Args
#   - CMake Version:    CMAKE_VERSION_DOT, CMAKE_HASH
#   - Boost Version:    BOOST_VERSION, BOOST_VERSION_DOT, BOOST_HASH
#   - OpenSSL Version:  OPENSSL_VERSION_DOT, OPENSSL_HASH

#
# Build Nirmata
#

# Stage 1: Build Preparation
FROM ubuntu:20.04 as build-prep

# Set environment variable to avoid interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# Install necessary packages
RUN apt update && \
    apt install -y build-essential \
    libicu-dev \
    curl \
    g++ \
    git \
    tzdata \
    zlib1g-dev

# Set timezone to avoid interactive prompt
RUN ln -fs /usr/share/zoneinfo/Etc/UTC /etc/localtime && \
    dpkg-reconfigure --frontend noninteractive tzdata

WORKDIR /root

# Define build arguments
ARG CMAKE_VERSION_DOT=3.15.5
ARG CMAKE_HASH=62e3e7d134a257e13521e306a9d3d1181ab99af8fcae66699c8f98754fc02dda

ARG BOOST_VERSION=1_70_0
ARG BOOST_VERSION_DOT=1.70.0
ARG BOOST_HASH=430ae8354789de4fd19ee52f3b1f739e1fba576f0aded0897c3c2bc00fb38778

ARG OPENSSL_VERSION_DOT=1.1.1n
ARG OPENSSL_HASH=40dceb51a4f6a5275bde0e6bf20ef4b91bfc32ed57c0552e2e8e15463372b17a

# Set environment variables
ENV BOOST_ROOT /root/boost_${BOOST_VERSION}
ENV OPENSSL_ROOT_DIR=/root/openssl

# Download and verify CMake
RUN set -ex \
    && curl -OL https://github.com/Kitware/CMake/releases/download/v${CMAKE_VERSION_DOT}/cmake-${CMAKE_VERSION_DOT}-Linux-x86_64.sh \
    && echo "${CMAKE_HASH}  cmake-${CMAKE_VERSION_DOT}-Linux-x86_64.sh" | sha256sum -c

# Download and verify Boost
RUN set -ex \
    && curl -L -o boost_${BOOST_VERSION}.tar.bz2 https://downloads.sourceforge.net/project/boost/boost/${BOOST_VERSION_DOT}/boost_${BOOST_VERSION}.tar.bz2 \
    && echo "${BOOST_HASH}  boost_${BOOST_VERSION}.tar.bz2" | sha256sum -c \
    && tar -xvf boost_${BOOST_VERSION}.tar.bz2

# Download and verify OpenSSL
RUN set -ex \
    && curl -OL https://www.openssl.org/source/openssl-${OPENSSL_VERSION_DOT}.tar.gz \
    && echo "${OPENSSL_HASH}  openssl-${OPENSSL_VERSION_DOT}.tar.gz" | sha256sum -c

# Compile and install CMake
RUN set -ex \
    && mkdir /opt/cmake \
    && sh cmake-${CMAKE_VERSION_DOT}-Linux-x86_64.sh --prefix=/opt/cmake --skip-license \
    && ln -s /opt/cmake/bin/cmake /usr/local/bin/cmake \
    && cmake --version \
    && rm cmake-${CMAKE_VERSION_DOT}-Linux-x86_64.sh

# Compile Boost
RUN set -ex \
    && cd boost_${BOOST_VERSION} \
    && ./bootstrap.sh --with-libraries=system,filesystem,thread,date_time,chrono,regex,serialization,atomic,program_options,locale,timer,log \
    && ./b2

# Compile and install OpenSSL
RUN set -ex \
    && apt-get update && apt-get install -y zlib1g-dev \
    && tar xaf openssl-${OPENSSL_VERSION_DOT}.tar.gz \
    && rm openssl-${OPENSSL_VERSION_DOT}.tar.gz \
    && cd openssl-${OPENSSL_VERSION_DOT} \
    && ./config --prefix=/root/openssl --openssldir=/root/openssl shared zlib \
    && make \
    && make install \
    && cd .. \
    && rm -rf openssl-${OPENSSL_VERSION_DOT}

# Stage 2: Build Nirmata
FROM build-prep as build

# Clone and build Nirmata
RUN set -ex \
    && git clone --single-branch --recursive https://github.com/NirmataNetwork/NirmataCore.git \
    && cd NirmataCore \
    && mkdir build && cd build \
    && cmake -D STATIC=TRUE .. \
    && make -j$(nproc) daemon simplewallet

# Stage 3: Final Image
FROM ubuntu:20.04

# Set environment variable to avoid interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# Create user and set up environment
RUN useradd -ms /bin/bash nirmata && \
    mkdir -p /home/nirmata/.Nirmata && \
    chown -R nirmata:nirmata /home/nirmata/.Nirmata

USER root

WORKDIR /home/nirmata

# Copy binaries from build stage
COPY --from=build /root/NirmataCore/build/src/nirmatad . 
COPY --from=build /root/NirmataCore/build/src/simplewallet .

# Ensure correct permissions
RUN chown -R nirmata:nirmata /home/nirmata/.Nirmata && \
    chmod -R 755 /home/nirmata/.Nirmata

# Define volume for blockchain data
VOLUME /home/nirmata/.Nirmata

# Expose necessary ports
EXPOSE 11231 11232

# Set entrypoint and default command
ENTRYPOINT ["./nirmatad"]
CMD ["--disable-upnp", "--rpc-bind-ip=0.0.0.0", "--log-level=0"]


# run cmd 'docker run --name nirmata_container -v /home/nirmata/.Nirmata:/home/nirmata/.Nirmata -p 11231:11231 -p 11232:11232 -it nwiznirmatanetwork/nirmatacore /bin/bash'