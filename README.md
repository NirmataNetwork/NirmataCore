# Nirmata Core and desktop wallet

Native Nirmata daemon, command-line wallet and Qt 6 desktop wallet. Clone with
submodules:

```bash
git clone --recursive https://github.com/NirmataNetwork/NirmataCore.git
```

The release scripts expect the current `NirmataGUI` checkout next to this
repository. You can override its generated bundle with `GUI_HTML_DIR`.

## Supported build environments

| Platform | Tested toolchain | Desktop framework |
|---|---|---|
| Ubuntu 22.04 / 24.04 LTS | GCC, CMake 3.21+, OpenSSL 3, system Boost | Qt 6.8.3 |
| Windows 10 / 11 x64 | Visual Studio 2022 | Qt 6.8.3 `msvc2022_64` |
| macOS 12+ | Current Xcode/Clang, Homebrew | Qt 6.8.3 |

Qt modules required by the GUI are WebEngine, WebChannel, Positioning,
SerialPort and ImageFormats. Qt 5, Python 2 and OpenSSL 1.1 build instructions
are obsolete.

## Build the Angular interface

From the adjacent GUI checkout:

```bash
cd ../NirmataGUI/html_source
npm ci
npm run test
npm run build:desktop
```

Use Node.js 24 and npm 11. The generated interface is in `NirmataGUI/html`.

## Ubuntu 22.04 and 24.04

Install the native dependencies and Qt 6.8.3:

```bash
utils/install_deps_ubuntu.sh --with-qt
export QT_PREFIX_PATH="$HOME/.local/Qt/6.8.3/gcc_64"
```

If Qt is already installed, omit `--with-qt` and point `QT_PREFIX_PATH` to it.
Then build and stage the complete application:

```bash
GUI_HTML_DIR="$PWD/../NirmataGUI/html" utils/build_script_linux.sh
```

Output:

- `build/linux-release/src/Nirmata` — development executable;
- `build/dist/Nirmata-linux-<arch>-<version>/` — staging directory;
- `build/dist/Nirmata-linux-<arch>-<version>.tar.zst` — release archive.

Launch it with the `run-nirmata.sh` inside that directory. The tar archive is
a native Ubuntu package and expects compatible system libraries. Use the
AppImage target when a self-contained desktop package is required.
On a headless server use `QT_QPA_PLATFORM=offscreen` only for smoke tests;
Qt WebEngine still needs its runtime libraries.

For an AppImage install `linuxdeploy` and `linuxdeploy-plugin-qt`, make them
available in `PATH`, then run:

```bash
utils/build_script_linux_appimage.sh
```

The AppImage bundles Qt WebEngine and the required desktop libraries. On a
minimal build host where a runtime library is available only in a private
sysroot, pass its full path through the colon-separated
`NIRMATA_EXTRA_LIBRARIES` variable (for example `libasound.so.2`).

## Windows 10 and 11

Set paths for the Qt installation and dependencies, then execute the release
script. It discovers Visual Studio 2022 and initializes the x64 toolchain when
it is not already running in a Developer Command Prompt:

```bat
set QT_PREFIX_PATH=C:\Qt\6.8.3\msvc2022_64
set BOOST_ROOT=C:\local\boost_1_85_0
set BOOST_LIBRARYDIR=%BOOST_ROOT%\lib64-msvc-14.3
set OPENSSL_ROOT_DIR=C:\OpenSSL-Win64
set GUI_HTML_DIR=F:\GitHub\NirmataGUI\html
utils\build_script_windows.bat
```

The paths are examples; use the actual locations on the build machine. Copy
`utils\configure_local_paths_msvs2022.example.cmd` to
`utils\configure_local_paths_msvs2022.cmd`, adapt its values and call the local
file before the build script. The local file is intentionally ignored by Git.
`OPENSSL_ROOT_DIR` must be a clean OpenSSL 3 installation and must not mix 1.1
and 3.x headers or libraries.

The deployable directory is `build\dist\Nirmata-Windows-x64`. The script runs
`windeployqt`, includes the OpenSSL runtime DLLs, and then compiles
`utils\NIRNATA_CELL.iss` with Inno Setup 6. The final installer is written to
`build\dist\installer\Nirmata-CELL-2.0.0-Windows-x64.exe`. Set `APP_VERSION`,
`INSTALLER_OUTPUT_DIR`, or `ISCC_EXE` before running the script to override the
defaults. Copying only `Nirmata.exe` is not sufficient for WebEngine.

The installer registers both `nir:` and the legacy `nirmata:` URL protocols.
Payment links use the form
`nir:action=send&address=<address>&amount=1.25&comment=Payment`; values must be
URL-encoded. A link works both when the wallet is already running and when it
starts the wallet.

For the complete Windows test build and run:

```bat
cmake -S . -B build\windows-tests -G "Visual Studio 17 2022" -A x64 ^
  -DBUILD_GUI=ON -DBUILD_TESTS=ON -DSTATIC=OFF ^
  -DCMAKE_PREFIX_PATH="%QT_PREFIX_PATH%" -DBOOST_ROOT="%BOOST_ROOT%" ^
  -DBOOST_LIBRARYDIR="%BOOST_LIBRARYDIR%" ^
  -DOPENSSL_ROOT_DIR="%OPENSSL_ROOT_DIR%"
cmake --build build\windows-tests --config Release --parallel --target ^
  unit_tests coretests db_tests crypto-tests hash-tests hash-target-tests
ctest --test-dir build\windows-tests -C Release --output-on-failure
```

## macOS

Install Xcode command-line tools and dependencies:

```bash
xcode-select --install
brew install qt boost@1.85 openssl@3 cmake ninja rsync
```

Build the Angular bundle, then run:

```bash
export QT_PREFIX_PATH="$(brew --prefix qt)"
GUI_HTML_DIR="$PWD/../NirmataGUI/html" utils/build_script_mac_osx.sh
```

The script creates and verifies an ad-hoc signed application and writes
`build/dist/nirmata-macos-<arch>.zip`. For distribution, set
`CODESIGN_IDENTITY` to a Developer ID Application identity and notarize the
result outside the build script. No keychain password is stored in the repo.
After a successful compile, `PACKAGE_ONLY=true utils/build_script_mac_osx.sh`
can repeat deployment, portability checks and signing without recompiling.

## Useful options

All scripts accept environment overrides:

- `BUILD_DIR`, `DIST_DIR`, `GUI_HTML_DIR`, `JOBS`;
- `QT_PREFIX_PATH`, `BOOST_ROOT`, `OPENSSL_ROOT_DIR`;
- `testnet=true` for a testnet build;
- `BUILD_GUI=OFF` with the Linux script for CLI-only binaries.
- `-DNIRMATA_ENABLE_LTO=ON` to opt into release LTO after verifying that the
  compiler and all Boost binaries use compatible definitions.

Direct CMake builds use the same options:

```bash
cmake -S . -B build/local -DBUILD_GUI=ON -DSTATIC=OFF \
  -DCMAKE_PREFIX_PATH="$QT_PREFIX_PATH"
cmake --build build/local --parallel
ctest --test-dir build/local --output-on-failure
```

For the complete Linux test build:

```bash
cmake -S . -B build/linux-tests -DCMAKE_BUILD_TYPE=Release \
  -DBUILD_GUI=OFF -DBUILD_TESTS=ON -DSTATIC=OFF
cmake --build build/linux-tests --parallel --target \
  unit_tests coretests db_tests crypto-tests hash-tests
ctest --test-dir build/linux-tests --output-on-failure
```

## Continuous integration

`.github/workflows/build.yml` builds Ubuntu 24.04, Windows Server 2022 and
macOS 14 artifacts. Keep Qt and Node versions aligned with `NirmataGUI` when
updating the toolchain.
