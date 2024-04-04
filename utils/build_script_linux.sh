#!/bin/bash -x

# Environment prerequisites:
# 1) QT_PREFIX_PATH should be set to Qt libs folder
# 2) BOOST_ROOT should be set to the root of Boost
# 3) OPENSSL_ROOT_DIR should be set to the root of OpenSSL
#
# for example, place these lines to the end of your ~/.bashrc :
#
# export BOOST_ROOT=/home/user/boost_1_66_0
# export QT_PREFIX_PATH=/home/user/Qt5.10.1/5.10.1/gcc_64
# export OPENSSL_ROOT_DIR=/home/user/openssl

ARCHIVE_NAME_PREFIX=Nirmata-linux-x64-

: "${BOOST_ROOT:?BOOST_ROOT should be set to the root of Boost, ex.: /home/user/boost_1_66_0}"
: "${QT_PREFIX_PATH:?QT_PREFIX_PATH should be set to Qt libs folder, ex.: /home/user/Qt5.10.1/5.10.1/gcc_64}"
: "${OPENSSL_ROOT_DIR:?OPENSSL_ROOT_DIR should be set to OpenSSL root folder, ex.: /home/user/openssl}"

if [ -n "$build_prefix" ]; then
  ARCHIVE_NAME_PREFIX=${ARCHIVE_NAME_PREFIX}${build_prefix}-
  build_prefix_label="$build_prefix "
fi

if [ "$testnet" == true ]; then
  testnet_def="-D TESTNET=TRUE"
  testnet_label="testnet "
  ARCHIVE_NAME_PREFIX=${ARCHIVE_NAME_PREFIX}testnet-
fi

if [ "$testnet" == true ] || [ -n "$qt_dev_tools" ]; then
  copy_qt_dev_tools=true
  copy_qt_dev_tools_label="devtools "
  ARCHIVE_NAME_PREFIX=${ARCHIVE_NAME_PREFIX}devtools-
fi


prj_root=$(pwd)

echo "---------------- BUILDING PROJECT ----------------"
echo "--------------------------------------------------"

echo "Building...." 

rm -rf build; mkdir -p build/release; cd build/release; 
cmake $testnet_def -D STATIC=true -D ARCH=x86-64 -D BUILD_GUI=TRUE -D OPENSSL_ROOT_DIR="$OPENSSL_ROOT_DIR" -D CMAKE_PREFIX_PATH="$QT_PREFIX_PATH" -D CMAKE_BUILD_TYPE=Release ../..
if [ $? -ne 0 ]; then
    echo "Failed to run cmake"
    exit 1
fi

make -j2 daemon simplewallet connectivity_tool
if [ $? -ne 0 ]; then
    echo "Failed to make!"
    exit 1
fi

make -j1 Nirmata
if [ $? -ne 0 ]; then
    echo "Failed to make!"
    exit 1
fi


read version_str <<< $(./src/nirmatad --version | awk '/^Nirmata/ { print $2 }')
version_str=${version_str}
echo $version_str

rm -rf Nirmata;
mkdir -p Nirmata;

rsync -a ../../src/gui/qt-daemon/layout/html ./Nirmata --exclude less --exclude package.json --exclude gulpfile.js
cp -Rv ../../utils/Nirmata.sh ./Nirmata
chmod 777 ./Nirmata/Nirmata.sh
mkdir ./Nirmata/lib
cp $QT_PREFIX_PATH/lib/libicudata.so.56 ./Nirmata/lib
cp $QT_PREFIX_PATH/lib/libicui18n.so.56 ./Nirmata/lib
cp $QT_PREFIX_PATH/lib/libicuuc.so.56 ./Nirmata/lib
cp $QT_PREFIX_PATH/lib/libQt5Core.so.5 ./Nirmata/lib
cp $QT_PREFIX_PATH/lib/libQt5DBus.so.5 ./Nirmata/lib
cp $QT_PREFIX_PATH/lib/libQt5Gui.so.5 ./Nirmata/lib
cp $QT_PREFIX_PATH/lib/libQt5Network.so.5 ./Nirmata/lib
cp $QT_PREFIX_PATH/lib/libQt5OpenGL.so.5 ./Nirmata/lib
cp $QT_PREFIX_PATH/lib/libQt5Positioning.so.5 ./Nirmata/lib
cp $QT_PREFIX_PATH/lib/libQt5PrintSupport.so.5 ./Nirmata/lib
cp $QT_PREFIX_PATH/lib/libQt5Qml.so.5 ./Nirmata/lib
cp $QT_PREFIX_PATH/lib/libQt5Quick.so.5 ./Nirmata/lib
cp $QT_PREFIX_PATH/lib/libQt5Sensors.so.5 ./Nirmata/lib
cp $QT_PREFIX_PATH/lib/libQt5Sql.so.5 ./Nirmata/lib
cp $QT_PREFIX_PATH/lib/libQt5Widgets.so.5 ./Nirmata/lib
cp $QT_PREFIX_PATH/lib/libQt5WebEngine.so.5 ./Nirmata/lib
cp $QT_PREFIX_PATH/lib/libQt5WebEngineCore.so.5 ./Nirmata/lib
cp $QT_PREFIX_PATH/lib/libQt5WebEngineWidgets.so.5 ./Nirmata/lib
cp $QT_PREFIX_PATH/lib/libQt5WebChannel.so.5 ./Nirmata/lib
cp $QT_PREFIX_PATH/lib/libQt5XcbQpa.so.5 ./Nirmata/lib
cp $QT_PREFIX_PATH/lib/libQt5QuickWidgets.so.5 ./Nirmata/lib
cp $QT_PREFIX_PATH/libexec/QtWebEngineProcess ./Nirmata
cp $QT_PREFIX_PATH/resources/qtwebengine_resources.pak ./Nirmata
cp $QT_PREFIX_PATH/resources/qtwebengine_resources_100p.pak ./Nirmata
cp $QT_PREFIX_PATH/resources/qtwebengine_resources_200p.pak ./Nirmata
cp $QT_PREFIX_PATH/resources/icudtl.dat ./Nirmata

if [ "$copy_qt_dev_tools" = true ] ; then
  cp $QT_PREFIX_PATH/resources/qtwebengine_devtools_resources.pak ./Nirmata
fi

mkdir ./Nirmata/lib/platforms
cp $QT_PREFIX_PATH/plugins/platforms/libqxcb.so ./Nirmata/lib/platforms
mkdir ./Nirmata/xcbglintegrations
cp $QT_PREFIX_PATH/plugins/xcbglintegrations/libqxcb-glx-integration.so ./Nirmata/xcbglintegrations

cp -Rv src/nirmatad src/Nirmata src/simplewallet  src/connectivity_tool ./Nirmata

package_filename=${ARCHIVE_NAME_PREFIX}${version_str}.tar.bz2

rm -f ./$package_filename
tar -cjvf $package_filename Nirmata
if [ $? -ne 0 ]; then
    echo "Failed to pack"
    exit 1
fi

echo "Build success"

exit 0
