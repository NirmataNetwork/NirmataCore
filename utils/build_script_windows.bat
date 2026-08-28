@echo off
setlocal EnableExtensions EnableDelayedExpansion

set "SOURCE_DIR=%~dp0.."
if not defined VCINSTALLDIR (
  set "VSWHERE=%ProgramFiles(x86)%\Microsoft Visual Studio\Installer\vswhere.exe"
  if not exist "!VSWHERE!" (
    echo Visual Studio Installer vswhere.exe was not found.
    exit /b 1
  )
  for /f "usebackq tokens=*" %%I in (`"!VSWHERE!" -latest -products * -requires Microsoft.VisualStudio.Component.VC.Tools.x86.x64 -property installationPath`) do set "VSINSTALL_DIR=%%I"
  if not defined VSINSTALL_DIR (
    echo Visual Studio 2022 with the x64 C++ toolchain was not found.
    exit /b 1
  )
  for %%I in ("!VSWHERE!") do set "PATH=%%~dpI;!PATH!"
  call "!VSINSTALL_DIR!\Common7\Tools\VsDevCmd.bat" -arch=x64 -host_arch=x64 >nul || exit /b 1
)
if not defined BUILD_DIR set "BUILD_DIR=%SOURCE_DIR%\build\windows-release"
if not defined DIST_DIR set "DIST_DIR=%SOURCE_DIR%\build\dist\Nirmata-Windows-x64"
if not defined INSTALLER_OUTPUT_DIR set "INSTALLER_OUTPUT_DIR=%SOURCE_DIR%\build\dist\installer"
if not defined APP_VERSION set "APP_VERSION=2.0.0"
if not defined QT_PREFIX_PATH (
  echo QT_PREFIX_PATH must point to Qt 6.8.3 msvc2022_64.
  exit /b 1
)
if not defined BOOST_ROOT (
  echo BOOST_ROOT must point to a Boost installation.
  exit /b 1
)
if not defined OPENSSL_ROOT_DIR (
  echo OPENSSL_ROOT_DIR must point to an OpenSSL 3 installation.
  exit /b 1
)

set "BOOST_LIBRARYDIR_ARG="
if defined BOOST_LIBRARYDIR set "BOOST_LIBRARYDIR_ARG=-DBOOST_LIBRARYDIR=%BOOST_LIBRARYDIR%"

set "TESTNET_ARG="
if /I "%testnet%"=="true" set "TESTNET_ARG=-DTESTNET=ON"

cmake -S "%SOURCE_DIR%" -B "%BUILD_DIR%" -G "Visual Studio 17 2022" -A x64 ^
  -DBUILD_GUI=ON -DSTATIC=OFF -DCMAKE_PREFIX_PATH="%QT_PREFIX_PATH%" ^
  -DBOOST_ROOT="%BOOST_ROOT%" %BOOST_LIBRARYDIR_ARG% ^
  -DOPENSSL_ROOT_DIR="%OPENSSL_ROOT_DIR%" ^
  %TESTNET_ARG% || exit /b 1
cmake --build "%BUILD_DIR%" --config Release --parallel --target Nirmata daemon simplewallet connectivity_tool || exit /b 1

if exist "%DIST_DIR%" rmdir /s /q "%DIST_DIR%"
mkdir "%DIST_DIR%" || exit /b 1
copy /y "%BUILD_DIR%\src\Release\Nirmata.exe" "%DIST_DIR%\" >nul
copy /y "%BUILD_DIR%\src\Release\nirmatad.exe" "%DIST_DIR%\" >nul
copy /y "%BUILD_DIR%\src\Release\simplewallet.exe" "%DIST_DIR%\" >nul
copy /y "%BUILD_DIR%\src\Release\connectivity_tool.exe" "%DIST_DIR%\" >nul

set "VC_REDIST_SOURCE="
if defined VCToolsRedistDir if exist "%VCToolsRedistDir%vc_redist.x64.exe" set "VC_REDIST_SOURCE=%VCToolsRedistDir%vc_redist.x64.exe"
if not defined VC_REDIST_SOURCE if defined VSINSTALL_DIR (
  for /f "delims=" %%I in ('dir /b /s "!VSINSTALL_DIR!\VC\Redist\MSVC\vc_redist.x64.exe" 2^>nul') do set "VC_REDIST_SOURCE=%%I"
)
if not defined VC_REDIST_SOURCE (
  echo Visual C++ x64 redistributable was not found in the Visual Studio installation.
  exit /b 1
)
copy /y "%VC_REDIST_SOURCE%" "%DIST_DIR%\vc_redist.x64.exe" >nul || exit /b 1

if defined WindowsSdkDir if exist "%WindowsSdkDir%Redist\D3D\x64" set "PATH=%WindowsSdkDir%Redist\D3D\x64;%PATH%"
"%QT_PREFIX_PATH%\bin\windeployqt.exe" --release --no-translations --compiler-runtime "%DIST_DIR%\Nirmata.exe" || exit /b 1
for %%F in ("%OPENSSL_ROOT_DIR%\bin\libcrypto*.dll" "%OPENSSL_ROOT_DIR%\bin\libssl*.dll") do (
  if exist "%%~fF" copy /y "%%~fF" "%DIST_DIR%\" >nul
)
dir /b "%DIST_DIR%\libcrypto-3*.dll" >nul 2>&1
if errorlevel 1 (
  echo OpenSSL 3 runtime DLL was not found under %OPENSSL_ROOT_DIR%\bin.
  exit /b 1
)

if defined GUI_HTML_DIR goto copy_gui
if exist "%SOURCE_DIR%\..\NirmataGUI\html\index.html" set "GUI_HTML_DIR=%SOURCE_DIR%\..\NirmataGUI\html"
if not defined GUI_HTML_DIR set "GUI_HTML_DIR=%SOURCE_DIR%\src\gui\qt-daemon\layout\html"
:copy_gui
robocopy "%GUI_HTML_DIR%" "%DIST_DIR%\html" /MIR /XD node_modules .angular >nul
if errorlevel 8 exit /b 1

if not exist "%DIST_DIR%\vc_redist.x64.exe" (
  echo vc_redist.x64.exe is required in %DIST_DIR% for the installer.
  exit /b 1
)

if not defined ISCC_EXE if exist "%ProgramFiles(x86)%\Inno Setup 6\ISCC.exe" set "ISCC_EXE=%ProgramFiles(x86)%\Inno Setup 6\ISCC.exe"
if not defined ISCC_EXE if exist "%ProgramFiles%\Inno Setup 6\ISCC.exe" set "ISCC_EXE=%ProgramFiles%\Inno Setup 6\ISCC.exe"
if not defined ISCC_EXE for /f "delims=" %%I in ('where ISCC.exe 2^>nul') do if not defined ISCC_EXE set "ISCC_EXE=%%I"
if not defined ISCC_EXE (
  echo Inno Setup 6 compiler ISCC.exe was not found. Install Inno Setup 6 or set ISCC_EXE.
  exit /b 1
)

if not exist "%INSTALLER_OUTPUT_DIR%" mkdir "%INSTALLER_OUTPUT_DIR%" || exit /b 1
"%ISCC_EXE%" /Qp "/DSourceDir=%DIST_DIR%" "/DOutputDir=%INSTALLER_OUTPUT_DIR%" "/DMyAppVersion=%APP_VERSION%" "%SOURCE_DIR%\utils\NIRNATA_CELL.iss" || exit /b 1

echo Windows portable package created: %DIST_DIR%
echo Windows installer created: %INSTALLER_OUTPUT_DIR%\Nirmata-CELL-%APP_VERSION%-Windows-x64.exe
exit /b 0
