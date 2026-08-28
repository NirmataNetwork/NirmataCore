#!/usr/bin/env bash
set -Eeuo pipefail

QT_VERSION="${QT_VERSION:-6.8.3}"
QT_ROOT="${QT_ROOT:-${HOME}/.local/Qt}"

alsa_package="libasound2"
if apt-cache show libasound2t64 >/dev/null 2>&1; then
  alsa_package="libasound2t64"
fi

sudo apt-get update
sudo apt-get install -y --no-install-recommends \
  build-essential cmake ninja-build git rsync pkg-config curl ca-certificates zstd \
  python3 python3-venv libssl-dev libboost-all-dev libicu-dev libbz2-dev zlib1g-dev \
  libcups2-dev libvulkan-dev \
  libgl1 libegl1 libdbus-1-3 libfontconfig1 libfreetype6 libnss3 "${alsa_package}" \
  libx11-6 libx11-xcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 \
  libxi6 libxkbcommon0 libxkbcommon-x11-0 libxkbfile1 libxrandr2 libxrender1 libxtst6 \
  libxcb1 libxcb-cursor0 libxcb-glx0 libxcb-icccm4 libxcb-image0 libxcb-keysyms1 \
  libxcb-randr0 libxcb-render-util0 libxcb-shape0 libxcb-shm0 libxcb-sync1 \
  libxcb-util1 libxcb-xfixes0 libxcb-xinerama0 libxcb-xkb1

if [[ "${1:-}" == "--with-qt" ]]; then
  venv="${HOME}/.cache/nirmata-aqt"
  python3 -m venv "${venv}"
  "${venv}/bin/pip" install --upgrade pip aqtinstall
  "${venv}/bin/aqt" install-qt linux desktop "${QT_VERSION}" linux_gcc_64 \
    --outputdir "${QT_ROOT}" -m qtwebengine qtwebchannel qtpositioning qtserialport qtimageformats
  printf 'Qt installed. Export:\n  QT_PREFIX_PATH=%s/%s/gcc_64\n' "${QT_ROOT}" "${QT_VERSION}"
fi
