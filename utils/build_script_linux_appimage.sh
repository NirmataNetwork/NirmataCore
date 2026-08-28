#!/usr/bin/env bash
set -Eeuo pipefail

SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BUILD_DIR="${BUILD_DIR:-${SOURCE_DIR}/build/linux-release}"
DIST_DIR="${DIST_DIR:-${SOURCE_DIR}/build/dist}"
APPDIR="${APPDIR:-${SOURCE_DIR}/build/Nirmata.AppDir}"
LINUXDEPLOY="${LINUXDEPLOY:-linuxdeploy}"
QT_PLUGIN="${LINUXDEPLOY_PLUGIN_QT:-linuxdeploy-plugin-qt}"

command -v "${LINUXDEPLOY}" >/dev/null 2>&1 || {
  echo "linuxdeploy was not found. Set LINUXDEPLOY to its executable." >&2; exit 1;
}
command -v "${QT_PLUGIN}" >/dev/null 2>&1 || {
  echo "linuxdeploy Qt plugin was not found. Set LINUXDEPLOY_PLUGIN_QT." >&2; exit 1;
}

BUILD_DIR="${BUILD_DIR}" DIST_DIR="${DIST_DIR}" "${SOURCE_DIR}/utils/build_script_linux.sh"
rm -rf "${APPDIR}"
mkdir -p "${APPDIR}/usr/bin" "${APPDIR}/usr/share/applications" \
  "${APPDIR}/usr/share/icons/hicolor/256x256/apps"
cp "${BUILD_DIR}/src/Nirmata" "${BUILD_DIR}/src/nirmatad" \
  "${BUILD_DIR}/src/simplewallet" "${BUILD_DIR}/src/connectivity_tool" "${APPDIR}/usr/bin/"
stage="$(find "${DIST_DIR}" -maxdepth 1 -type d -name 'Nirmata-linux-*' \
  -printf '%T@ %p\n' | sort -nr | head -n1 | cut -d' ' -f2-)"
[[ -n "${stage}" ]] || { echo "Linux staging directory was not created" >&2; exit 1; }
cp -a "${stage}/html" "${APPDIR}/usr/bin/html"
cp "${SOURCE_DIR}/resources/app_icon_256.png" \
  "${APPDIR}/usr/share/icons/hicolor/256x256/apps/Nirmata.png"
cp "${SOURCE_DIR}/utils/Nirmata.desktop" "${APPDIR}/usr/share/applications/Nirmata.desktop"
sed -i 's/\r$//' "${APPDIR}/usr/share/applications/Nirmata.desktop"

export QMAKE="${QMAKE:-${QT_PREFIX_PATH:?Set QT_PREFIX_PATH}/bin/qmake6}"
export LINUXDEPLOY_PLUGIN_QT="${QT_PLUGIN}"
extra_library_args=()
if [[ -n "${NIRMATA_EXTRA_LIBRARIES:-}" ]]; then
  IFS=: read -r -a extra_libraries <<<"${NIRMATA_EXTRA_LIBRARIES}"
  for library in "${extra_libraries[@]}"; do
    [[ -f "${library}" ]] || { echo "Extra library not found: ${library}" >&2; exit 1; }
    extra_library_args+=( --library "${library}" )
  done
fi
"${LINUXDEPLOY}" --appdir "${APPDIR}" \
  --desktop-file "${APPDIR}/usr/share/applications/Nirmata.desktop" \
  --icon-file "${APPDIR}/usr/share/icons/hicolor/256x256/apps/Nirmata.png" \
  "${extra_library_args[@]}" \
  --plugin qt --output appimage

mkdir -p "${DIST_DIR}"
image="$(find "${SOURCE_DIR}" "${BUILD_DIR}" -maxdepth 2 -name '*.AppImage' -type f -print -quit)"
[[ -n "${image}" ]] || { echo "linuxdeploy did not create an AppImage" >&2; exit 1; }
mv "${image}" "${DIST_DIR}/Nirmata-linux-$(uname -m).AppImage"
echo "AppImage created in ${DIST_DIR}"
