!define PRODUCT_NAME "FocusPulse Pro"
!define PRODUCT_VERSION "1.0.0"
!define COMPANY_NAME "Thorsten Bylicki"
!define COPYRIGHT "© 2025 Thorsten Bylicki. Alle Rechte vorbehalten."

VIProductVersion "${PRODUCT_VERSION}"
VIAddVersionKey "ProductName" "${PRODUCT_NAME}"
VIAddVersionKey "CompanyName" "${COMPANY_NAME}"
VIAddVersionKey "FileDescription" "${PRODUCT_NAME} Installer"
VIAddVersionKey "LegalCopyright" "${COPYRIGHT}"

!define MUI_ABORTWARNING
!define MUI_ICON "icon.ico"
!define MUI_UNICON "icon.ico"

!insertmacro MUI_PAGE_WELCOME
!insertmacro MUI_PAGE_DIRECTORY
!insertmacro MUI_PAGE_INSTFILES
!insertmacro MUI_PAGE_FINISH

!insertmacro MUI_UNPAGE_CONFIRM
!insertmacro MUI_UNPAGE_INSTFILES

!define MUI_WELCOMEPAGE_TITLE "${PRODUCT_NAME} Setup"
!define MUI_WELCOMEPAGE_TEXT "Willkommen zur Installation von ${PRODUCT_NAME} v${PRODUCT_VERSION}.

Klicken Sie auf Weiter, um fortzufahren."

Name "${PRODUCT_NAME} ${PRODUCT_VERSION}"
OutFile "FocusPulse_Installer.exe"
InstallDir "$PROGRAMFILES\FocusPulse Pro"

Section "Install"
  SetOutPath "$INSTDIR"
  File /r "dist\win-unpacked\*.*"
  CreateShortcut "$DESKTOP\FocusPulse.lnk" "$INSTDIR\FocusPulse.exe"
SectionEnd

Section "Uninstall"
  Delete "$DESKTOP\FocusPulse.lnk"
  RMDir /r "$INSTDIR"
SectionEnd