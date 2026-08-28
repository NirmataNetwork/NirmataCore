@echo off
rem Copy this file to configure_local_paths_msvs2022.cmd and set local paths.
rem The copied file is ignored by Git.

if not defined QT_PREFIX_PATH set "QT_PREFIX_PATH=C:\Qt\6.8.3\msvc2022_64"
if not defined BOOST_ROOT set "BOOST_ROOT=C:\local\boost_1_85_0"
if not defined BOOST_LIBRARYDIR set "BOOST_LIBRARYDIR=%BOOST_ROOT%\lib64-msvc-14.3"
if not defined OPENSSL_ROOT_DIR set "OPENSSL_ROOT_DIR=C:\OpenSSL-Win64"
