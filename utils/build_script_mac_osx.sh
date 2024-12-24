set -x # echo on
set +e # switch off exit on error
curr_path=${BASH_SOURCE%/*}

export NIRMATA_QT_PATH="/Users/nwiznirmata/Qt5.11.2/5.11.2"
export NIRMATA_BOOST_ROOT="/Users/nwiznirmata/boost_1_70_0"
export NIRMATA_BOOST_LIBS_PATH="$NIRMATA_BOOST_ROOT/stage/lib"
export NIRMATA_BUILD_DIR="/Users/nwiznirmata/NirmataCoreDEV/build"
export OPENSSL_ROOT_DIR="/usr/local/opt/openssl"
export CMAKE_OSX_SYSROOT=$(xcrun --show-sdk-path)

ARCHIVE_NAME_PREFIX=nirmata-macos-x64-

if [ -n "$build_prefix" ]; then
  ARCHIVE_NAME_PREFIX=${ARCHIVE_NAME_PREFIX}${build_prefix}-
  build_prefix_label="$build_prefix "
fi

if [ "$testnet" == true ]; then
  testnet_def="-D TESTNET=TRUE"
  testnet_label="testnet "
  ARCHIVE_NAME_PREFIX=${ARCHIVE_NAME_PREFIX}testnet-
fi

######### DEBUG ##########
#cd "$NIRMATA_BUILD_DIR/release/src"
#rm *.dmg
#if false; then
##### end of DEBUG ######

rm -rf $NIRMATA_BUILD_DIR; mkdir -p "$NIRMATA_BUILD_DIR/release"; cd "$NIRMATA_BUILD_DIR/release"

cmake $testnet_def -D OPENSSL_ROOT_DIR=$OPENSSL_ROOT_DIR -D CMAKE_OSX_SYSROOT=$CMAKE_OSX_SYSROOT -D BUILD_GUI=TRUE -D CMAKE_PREFIX_PATH="$NIRMATA_QT_PATH/clang_64" -D CMAKE_BUILD_TYPE=Release -D BOOST_ROOT="$NIRMATA_BOOST_ROOT" -D BOOST_LIBRARYDIR="$NIRMATA_BOOST_LIBS_PATH" ../..
if [ $? -ne 0 ]; then
    echo "Failed to cmake"
    exit 1
fi

make -j Nirmata
if [ $? -ne 0 ]; then
    echo "Failed to make Nirmata"
    exit 1
fi

make -j connectivity_tool daemon simplewallet
if [ $? -ne 0 ]; then
    echo "Failed to make binaries!"
    exit 1
fi

cd src/
if [ $? -ne 0 ]; then
    echo "Failed to cd src"
    exit 1
fi

# copy all necessary libs into the bundle in order to workaround El Capitan's SIP restrictions
mkdir -p Nirmata.app/Contents/Frameworks/boost_libs
cp -R "$NIRMATA_BOOST_LIBS_PATH/" Nirmata.app/Contents/Frameworks/boost_libs/
if [ $? -ne 0 ]; then
    echo "Failed to cp workaround to MacOS"
    exit 1
fi

# rename process name to big letter 
mv Nirmata.app/Contents/MacOS/nirmata Nirmata.app/Contents/MacOS/Nirmata
if [ $? -ne 0 ]; then
    echo "Failed to rename process"
    exit 1
fi

cp nirmatad simplewallet Nirmata.app/Contents/MacOS/
if [ $? -ne 0 ]; then
    echo "Failed to copy binaries to Nirmata.app folder"
    exit 1
fi

# fix boost libs paths in main executable and libs to workaround El Capitan's SIP restrictions
source ../../../utils/macosx_fix_boost_libs_path.sh
fix_boost_libs_in_binary @executable_path/../Frameworks/boost_libs Nirmata.app/Contents/MacOS/Nirmata
fix_boost_libs_in_binary @executable_path/../Frameworks/boost_libs Nirmata.app/Contents/MacOS/simplewallet
fix_boost_libs_in_binary @executable_path/../Frameworks/boost_libs Nirmata.app/Contents/MacOS/nirmatad
fix_boost_libs_in_libs @executable_path/../Frameworks/boost_libs Nirmata.app/Contents/Frameworks/boost_libs

# Улучшенный вызов macdeployqt с дополнительными параметрами
"$NIRMATA_QT_PATH/clang_64/bin/macdeployqt" Nirmata.app -verbose=3 -always-overwrite
if [ $? -ne 0 ]; then
    echo "Failed to macdeployqt Nirmata.app"
    exit 1
fi

# Проверка наличия QtWebEngineWidgets
if [ ! -d "Nirmata.app/Contents/Frameworks/QtWebEngineWidgets.framework" ]; then
    echo "QtWebEngineWidgets framework not found!"
    exit 1
fi

# Копирование ресурсов
rsync -a ../../../src/gui/qt-daemon/layout/html Nirmata.app/Contents/MacOS --exclude less --exclude package.json --exclude gulpfile.js
if [ $? -ne 0 ]; then
    echo "Failed to cp html to MacOS"
    exit 1
fi

# Копирование и настройка иконки
cp ../../../src/gui/qt-daemon/app.icns Nirmata.app/Contents/Resources
if [ $? -ne 0 ]; then
    echo "Failed to cp app.icns to resources"
    exit 1
fi

# Обновление Info.plist
echo "Updating Info.plist..."
PLIST_PATH="Nirmata.app/Contents/Info.plist"
plutil -replace CFBundleIconFile -string "app.icns" "$PLIST_PATH"
plutil -replace CFBundleIdentifier -string "com.nirmata.wallet" "$PLIST_PATH"
plutil -replace CFBundleDisplayName -string "Nirmata" "$PLIST_PATH"
plutil -replace CFBundleName -string "Nirmata" "$PLIST_PATH"

# Очистка предыдущих подписей
echo "Cleaning previous signatures..."
codesign --remove-signature Nirmata.app 2>/dev/null || true

# Установка правильных прав доступа
echo "Setting correct permissions..."
chmod -R a+r Nirmata.app
find Nirmata.app -type d -exec chmod a+x {} \;

# Подпись QtWebEngine helpers
echo "Signing QtWebEngine helpers..."
if [ -d "Nirmata.app/Contents/Frameworks/QtWebEngineCore.framework" ]; then
    # Подпись QtWebEngineProcess
    find Nirmata.app/Contents/Frameworks/QtWebEngineCore.framework -name 'QtWebEngineProcess' -exec codesign --force --options runtime --sign "Nirmata" {} \;
    
    # Подпись файлов в Helpers
    find Nirmata.app/Contents/Frameworks/QtWebEngineCore.framework -path "*/Helpers/*" -type f -exec codesign --force --options runtime --sign "Nirmata" {} \;
    
    # Подпись Helpers.app
    find Nirmata.app/Contents/Frameworks/QtWebEngineCore.framework -name '*.app' -exec codesign --force --options runtime --sign "Nirmata" --deep {} \;
fi

# Подпись остальных фреймворков
echo "Signing frameworks..."
find Nirmata.app/Contents/Frameworks -name '*.framework' -or -name '*.dylib' | while read framework
do
    if [[ "$framework" != *"QtWebEngineCore.framework/Versions/Current/Helpers"* ]]; then
        echo "Signing $framework"
        codesign --force --options runtime --sign "Nirmata" "$framework"
        if [ $? -ne 0 ]; then
            echo "Failed to sign framework: $framework"
            exit 1
        fi
    fi
done

# Подпись основного приложения
echo "Signing main application..."
codesign --force --options runtime --entitlements ../../../utils/macos_entitlements.plist --sign "Nirmata" --deep ./Nirmata.app
if [ $? -ne 0 ]; then
    echo "Failed to sign Nirmata.app"
    exit 1
fi

# Проверка подписи
echo "Verifying signature..."
codesign -vv --deep --strict ./Nirmata.app
if [ $? -ne 0 ]; then
    echo "Failed to verify signature"
    exit 1
fi

# Проверка запуска
echo "Checking if app can be launched..."
spctl --assess --verbose ./Nirmata.app
if [ $? -ne 0 ]; then
    echo "App failed system policy check"
    exit 1
fi

read version_str <<< $(DYLD_LIBRARY_PATH=$NIRMATA_BOOST_LIBS_PATH ./connectivity_tool --version | awk '/^Nirmata/ { print $2 }')
version_str=${version_str}
echo $version_str

echo "############### Prepearing archive... ################"
mkdir package_folder
if [ $? -ne 0 ]; then
    echo "Failed to zip app"
    exit 1
fi

mv Nirmata.app package_folder 
if [ $? -ne 0 ]; then
    echo "Failed to top app package"
    exit 1
fi

package_filename=${ARCHIVE_NAME_PREFIX}${version_str}.dmg

source ../../../utils/macosx_dmg_builder.sh
build_fancy_dmg package_folder $package_filename
if [ $? -ne 0 ]; then
    echo "Failed to create fancy dmg"
    exit 1
fi

echo "Build success"