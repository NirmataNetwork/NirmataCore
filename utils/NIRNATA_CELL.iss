#ifndef SourceDir
  #define SourceDir "..\build\dist\Nirmata-Windows-x64"
#endif
#ifndef OutputDir
  #define OutputDir "..\build\dist\installer"
#endif
#ifndef MyAppVersion
  #define MyAppVersion "2.0.0"
#endif

#define MyAppName "Nirmata CELL"
#define MyAppPublisher "Nirmata Network, Inc."
#define MyAppURL "https://nirmata-network.com/"
#define MyAppExeName "Nirmata.exe"

[Setup]
AppId={{94AC8A81-CB81-4489-9CED-5A424A82AFF5}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={autopf}\Nirmata
DefaultGroupName={#MyAppName}
ChangesAssociations=yes
DisableProgramGroupPage=yes
UninstallDisplayIcon={app}\{#MyAppExeName}
UninstallDisplayName={#MyAppName}
WizardImageFile=installer_image.bmp
WizardSmallImageFile=installer_small_image.bmp
SetupIconFile=..\src\gui\qt-daemon\app.ico
OutputDir={#OutputDir}
OutputBaseFilename=Nirmata-CELL-{#MyAppVersion}-Windows-x64
Compression=lzma2/ultra64
SolidCompression=yes
WizardStyle=modern
ArchitecturesAllowed=x64
ArchitecturesInstallIn64BitMode=x64
PrivilegesRequired=admin
AppMutex=Nirmata_instance
VersionInfoVersion={#MyAppVersion}
VersionInfoCompany={#MyAppPublisher}
VersionInfoDescription=Nirmata CELL ecosystem installer
VersionInfoProductName={#MyAppName}
VersionInfoProductVersion={#MyAppVersion}

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[CustomMessages]
english.SetupTitle=Nirmata CELL ecosystem
english.SetupSubtitle=Secure access to the Nirmata Network
english.SetupDescription=Install the desktop wallet, private NiRoom messenger, PeerSwap marketplace, NiRVeil privacy tools and the blockchain interface.
english.CoreComponent=Nirmata CELL desktop application
english.CoreDescription=Wallet, blockchain, NiRoom, PeerSwap, NiRVeil and ecosystem interface (required)
english.ToolsComponent=Node and command-line tools
english.ToolsDescription=nirmatad, simplewallet and connectivity diagnostics for advanced users
english.StandardInstall=Standard installation
english.FullInstall=Extended installation with node tools
english.CustomInstallation=Custom installation
english.StartWithWindows=Start Nirmata CELL with Windows
english.ReadyHint=The Nirmata ecosystem is ready to be installed. Your wallets and blockchain data in the user profile are never removed or overwritten by this installer.
english.FinishedHint=Nirmata CELL is installed. Welcome to the Nirmata ecosystem.

[Types]
Name: "standard"; Description: "{cm:StandardInstall}"
Name: "full"; Description: "{cm:FullInstall}"
Name: "custom"; Description: "{cm:CustomInstallation}"; Flags: iscustom

[Components]
Name: "core"; Description: "{cm:CoreComponent}"; Types: standard full custom; Flags: fixed
Name: "tools"; Description: "{cm:ToolsComponent}"; Types: full

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked
Name: "startup"; Description: "{cm:StartWithWindows}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked

[Files]
Source: "{#SourceDir}\*"; Excludes: "vc_redist.x64.exe,nirmatad.exe,simplewallet.exe,connectivity_tool.exe,*.log"; DestDir: "{app}"; Components: core; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "{#SourceDir}\nirmatad.exe"; DestDir: "{app}"; Components: tools; Flags: ignoreversion
Source: "{#SourceDir}\simplewallet.exe"; DestDir: "{app}"; Components: tools; Flags: ignoreversion
Source: "{#SourceDir}\connectivity_tool.exe"; DestDir: "{app}"; Components: tools; Flags: ignoreversion
Source: "{#SourceDir}\vc_redist.x64.exe"; DestDir: "{tmp}"; Flags: deleteafterinstall

; Remove runtime and web assets left by the former Qt 5/Angular package before
; installing Qt 6. Wallets and blockchain data live under the user profile and
; are not touched by this migration.
[InstallDelete]
Type: files; Name: "{app}\Qt5*.dll"
Type: files; Name: "{app}\libEGL.dll"
Type: files; Name: "{app}\libGLESV2.dll"
Type: files; Name: "{app}\libeay32.dll"
Type: files; Name: "{app}\ssleay32.dll"
Type: files; Name: "{app}\msvcp120.dll"
Type: files; Name: "{app}\msvcr120.dll"
Type: files; Name: "{app}\vccorlib120.dll"
Type: files; Name: "{app}\concrt140.dll"
Type: files; Name: "{app}\msvcp140.dll"
Type: files; Name: "{app}\vccorlib140.dll"
Type: files; Name: "{app}\vcruntime140.dll"
Type: files; Name: "{app}\*.pdb"
Type: filesandordirs; Name: "{app}\bearer"
Type: filesandordirs; Name: "{app}\generic"
Type: filesandordirs; Name: "{app}\iconengines"
Type: filesandordirs; Name: "{app}\imageformats"
Type: filesandordirs; Name: "{app}\networkinformation"
Type: filesandordirs; Name: "{app}\platforms"
Type: filesandordirs; Name: "{app}\position"
Type: filesandordirs; Name: "{app}\printsupport"
Type: filesandordirs; Name: "{app}\qml"
Type: filesandordirs; Name: "{app}\qmltooling"
Type: filesandordirs; Name: "{app}\resources"
Type: filesandordirs; Name: "{app}\styles"
Type: filesandordirs; Name: "{app}\tls"
Type: filesandordirs; Name: "{app}\translations"
Type: filesandordirs; Name: "{app}\html"

[Registry]
Root: HKCU; Subkey: "Software\Microsoft\Windows\CurrentVersion\Run"; ValueType: string; ValueName: "Nirmata CELL"; ValueData: """{app}\{#MyAppExeName}"""; Tasks: startup; Flags: uninsdeletevalue
Root: HKCR; Subkey: ".dbl"; ValueType: string; ValueName: ""; ValueData: "NirmataWalletDataFile"; Flags: uninsdeletevalue
Root: HKCR; Subkey: "NirmataWalletDataFile"; ValueType: string; ValueName: ""; ValueData: "Nirmata Wallet Data File"; Flags: uninsdeletekey
Root: HKCR; Subkey: "NirmataWalletDataFile\DefaultIcon"; ValueType: string; ValueName: ""; ValueData: "{app}\{#MyAppExeName},0"
Root: HKCR; Subkey: "NirmataWalletDataFile\shell\open\command"; ValueType: string; ValueName: ""; ValueData: """{app}\{#MyAppExeName}"" ""%1"""
Root: HKCR; Subkey: "Nirmata"; ValueType: string; ValueName: ""; ValueData: "URL:Nirmata Protocol"; Flags: uninsdeletekey
Root: HKCR; Subkey: "Nirmata"; ValueType: string; ValueName: "URL Protocol"; ValueData: ""
Root: HKCR; Subkey: "Nirmata\DefaultIcon"; ValueType: string; ValueName: ""; ValueData: "{app}\{#MyAppExeName},0"
Root: HKCR; Subkey: "Nirmata\shell\open\command"; ValueType: string; ValueName: ""; ValueData: """{app}\{#MyAppExeName}"" --deeplink-params=""%1"""
Root: HKCR; Subkey: "NiR"; ValueType: string; ValueName: ""; ValueData: "URL:NiR Protocol"; Flags: uninsdeletekey
Root: HKCR; Subkey: "NiR"; ValueType: string; ValueName: "URL Protocol"; ValueData: ""
Root: HKCR; Subkey: "NiR\DefaultIcon"; ValueType: string; ValueName: ""; ValueData: "{app}\{#MyAppExeName},0"
Root: HKCR; Subkey: "NiR\shell\open\command"; ValueType: string; ValueName: ""; ValueData: """{app}\{#MyAppExeName}"" --deeplink-params=""%1"""

[Icons]
Name: "{autoprograms}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"
Name: "{autodesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; Tasks: desktopicon

[Run]
Filename: "{tmp}\vc_redist.x64.exe"; Parameters: "/install /quiet /norestart"; StatusMsg: "Installing Microsoft Visual C++ Runtime..."; Flags: waituntilterminated
Filename: "{app}\{#MyAppExeName}"; Description: "{cm:LaunchProgram,{#StringChange(MyAppName, '&', '&&')}}"; Flags: nowait postinstall skipifsilent

[Code]
const
  NirmataBackground = $00150D03;
  NirmataSurface = $00241C0B;
  NirmataSurfaceRaised = $00312610;
  NirmataBorder = $00544221;
  NirmataText = $00F7F4EE;
  NirmataMuted = $00B6A98E;
  NirmataAccent = $008BEF27;

procedure StyleControl(Control: TControl);
var
  I: Integer;
  WinControl: TWinControl;
begin
  if Control is TNewStaticText then
  begin
    TNewStaticText(Control).Font.Name := 'Segoe UI';
    TNewStaticText(Control).Font.Color := NirmataText;
  end
  else if Control is TLabel then
  begin
    TLabel(Control).Font.Name := 'Segoe UI';
    TLabel(Control).Font.Color := NirmataText;
    TLabel(Control).Transparent := True;
  end
  else if Control is TNewEdit then
  begin
    TNewEdit(Control).Color := NirmataBackground;
    TNewEdit(Control).Font.Color := NirmataText;
    TNewEdit(Control).Font.Name := 'Segoe UI';
  end
  else if Control is TNewMemo then
  begin
    TNewMemo(Control).Color := NirmataBackground;
    TNewMemo(Control).Font.Color := NirmataText;
    TNewMemo(Control).Font.Name := 'Segoe UI';
  end
  else if Control is TNewCheckListBox then
  begin
    TNewCheckListBox(Control).Color := NirmataBackground;
    TNewCheckListBox(Control).Font.Color := NirmataText;
    TNewCheckListBox(Control).Font.Name := 'Segoe UI';
  end
  else if Control is TNewButton then
  begin
    TNewButton(Control).Font.Name := 'Segoe UI Semibold';
  end;

  if Control is TWinControl then
  begin
    WinControl := TWinControl(Control);
    for I := 0 to WinControl.ControlCount - 1 do
      StyleControl(WinControl.Controls[I]);
  end;
end;

procedure CurPageChanged(CurPageID: Integer);
begin
  WizardForm.PageNameLabel.Font.Color := NirmataAccent;
  WizardForm.PageDescriptionLabel.Font.Color := NirmataMuted;

  if CurPageID = wpWelcome then
  begin
    WizardForm.WelcomeLabel1.Caption := CustomMessage('SetupTitle');
    WizardForm.WelcomeLabel2.Caption := CustomMessage('SetupDescription');
  end
  else if CurPageID = wpReady then
    WizardForm.ReadyLabel.Caption := CustomMessage('ReadyHint')
  else if CurPageID = wpFinished then
  begin
    WizardForm.FinishedHeadingLabel.Caption := CustomMessage('SetupTitle');
    WizardForm.FinishedLabel.Caption := CustomMessage('FinishedHint');
  end;
end;

procedure InitializeWizard;
begin
  WizardForm.Caption := CustomMessage('SetupTitle') + '  ' + '{#MyAppVersion}';
  WizardForm.Font.Name := 'Segoe UI';
  WizardForm.Color := NirmataBackground;
  WizardForm.MainPanel.Color := NirmataSurfaceRaised;
  WizardForm.WelcomePage.Color := NirmataBackground;
  WizardForm.FinishedPage.Color := NirmataBackground;
  WizardForm.InnerPage.Color := NirmataSurface;
  StyleControl(WizardForm);

  WizardForm.PageNameLabel.Font.Name := 'Segoe UI Semibold';
  WizardForm.PageNameLabel.Font.Size := 12;
  WizardForm.PageNameLabel.Font.Color := NirmataAccent;
  WizardForm.PageNameLabel.AutoSize := False;
  WizardForm.PageNameLabel.Left := ScaleX(22);
  WizardForm.PageNameLabel.Top := ScaleY(8);
  WizardForm.PageNameLabel.Width := WizardForm.MainPanel.ClientWidth -
    WizardForm.WizardSmallBitmapImage.Width - ScaleX(42);
  WizardForm.PageNameLabel.Height := ScaleY(23);
  WizardForm.PageDescriptionLabel.Font.Color := NirmataMuted;
  WizardForm.PageDescriptionLabel.AutoSize := False;
  WizardForm.PageDescriptionLabel.Left := ScaleX(38);
  WizardForm.PageDescriptionLabel.Top := ScaleY(31);
  WizardForm.PageDescriptionLabel.Width := WizardForm.MainPanel.ClientWidth -
    WizardForm.WizardSmallBitmapImage.Width - ScaleX(58);
  WizardForm.PageDescriptionLabel.Height := ScaleY(17);
  WizardForm.WelcomeLabel1.Font.Name := 'Segoe UI Semibold';
  WizardForm.WelcomeLabel1.Font.Size := 17;
  WizardForm.WelcomeLabel1.Font.Color := NirmataText;
  WizardForm.WelcomeLabel2.Font.Color := NirmataMuted;
  WizardForm.FinishedHeadingLabel.Font.Name := 'Segoe UI Semibold';
  WizardForm.FinishedHeadingLabel.Font.Size := 16;
  WizardForm.FinishedHeadingLabel.Font.Color := NirmataAccent;
  WizardForm.FinishedLabel.Font.Color := NirmataMuted;

  WizardForm.DirEdit.Color := NirmataBackground;
  WizardForm.DirEdit.Font.Color := NirmataText;
  WizardForm.GroupEdit.Color := NirmataBackground;
  WizardForm.GroupEdit.Font.Color := NirmataText;
  WizardForm.TypesCombo.Color := NirmataBackground;
  WizardForm.TypesCombo.Font.Color := NirmataText;
  WizardForm.ComponentsList.Color := NirmataBackground;
  WizardForm.ComponentsList.Font.Color := NirmataText;
  WizardForm.TasksList.Color := NirmataBackground;
  WizardForm.TasksList.Font.Color := NirmataText;
  WizardForm.ReadyMemo.Color := NirmataBackground;
  WizardForm.ReadyMemo.Font.Color := NirmataText;
  WizardForm.StatusLabel.Font.Color := NirmataText;
  WizardForm.FilenameLabel.Font.Color := NirmataMuted;

end;
