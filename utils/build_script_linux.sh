#!/usr/bin/env bash
set -Eeuo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
SOURCE_DIR="$(cd -- "${SCRIPT_DIR}/.." && pwd)"
BUILD_DIR="${BUILD_DIR:-${SOURCE_DIR}/build/linux-release}"
DIST_DIR="${DIST_DIR:-${SOURCE_DIR}/build/dist}"
BUILD_JOBS="${BUILD_JOBS:-$(nproc)}"
BUILD_GUI="${BUILD_GUI:-ON}"
QT_PREFIX_PATH="${QT_PREFIX_PATH:-}"
GUI_HTML_DIR="${GUI_HTML_DIR:-}"

for tool in cmake c++ tar; do
  command -v "${tool}" >/dev/null || { echo "Missing required tool: ${tool}" >&2; exit 1; }
done

if [[ "${BUILD_GUI}" == "ON" && -z "${QT_PREFIX_PATH}" ]]; then
  if command -v qtpaths6 >/dev/null; then
    QT_PREFIX_PATH="$(qtpaths6 --install-prefix)"
  else
    echo "Qt 6.8+ was not found. Set QT_PREFIX_PATH or run utils/install_deps_ubuntu.sh --with-qt." >&2
    exit 1
  fi
fi

cmake_args=(
  -S "${SOURCE_DIR}"
  -B "${BUILD_DIR}"
  -D CMAKE_BUILD_TYPE=Release
  -D BUILD_GUI="${BUILD_GUI}"
  -D STATIC=OFF
  -D CMAKE_EXPORT_COMPILE_COMMANDS=ON
)

command -v ninja >/dev/null && cmake_args+=( -G Ninja )
[[ -n "${QT_PREFIX_PATH}" ]] && cmake_args+=( -D CMAKE_PREFIX_PATH="${QT_PREFIX_PATH}" )
[[ -n "${BOOST_ROOT:-}" ]] && cmake_args+=( -D BOOST_ROOT="${BOOST_ROOT}" )
[[ -n "${OPENSSL_ROOT_DIR:-}" ]] && cmake_args+=( -D OPENSSL_ROOT_DIR="${OPENSSL_ROOT_DIR}" )
[[ "${testnet:-false}" == "true" ]] && cmake_args+=( -D TESTNET=TRUE )

cmake "${cmake_args[@]}"
targets=(daemon simplewallet connectivity_tool)
[[ "${BUILD_GUI}" == "ON" ]] && targets+=(Nirmata)
cmake --build "${BUILD_DIR}" --parallel "${BUILD_JOBS}" --target "${targets[@]}"

version="$(${BUILD_DIR}/src/nirmatad --version | awk '/^Nirmata/ {print $2; exit}' | sed 's/\[.*$//')"
version="${version:-dev}"
version="${version//[^A-Za-z0-9._-]/}"
stage="${DIST_DIR}/Nirmata-linux-$(uname -m)-${version}"
rm -rf "${stage}"
mkdir -p "${stage}/bin"
install -m 0755 "${BUILD_DIR}/src/nirmatad" "${BUILD_DIR}/src/simplewallet" "${BUILD_DIR}/src/connectivity_tool" "${stage}/bin/"

if [[ "${BUILD_GUI}" == "ON" ]]; then
  install -m 0755 "${BUILD_DIR}/src/Nirmata" "${stage}/bin/"
  if [[ -z "${GUI_HTML_DIR}" ]]; then
    [[ -d "${SOURCE_DIR}/../NirmataGUI/html" ]] && GUI_HTML_DIR="${SOURCE_DIR}/../NirmataGUI/html"
    [[ -z "${GUI_HTML_DIR}" ]] && GUI_HTML_DIR="${SOURCE_DIR}/src/gui/qt-daemon/layout/html"
  fi
  [[ -f "${GUI_HTML_DIR}/index.html" ]] || { echo "GUI index.html not found in ${GUI_HTML_DIR}" >&2; exit 1; }
  cp -a "${GUI_HTML_DIR}" "${stage}/html"
fi

if [[ "${BUILD_GUI}" == "ON" ]]; then
  cat >"${stage}/run-nirmata.sh" <<'EOF'
#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
exec "${ROOT}/bin/Nirmata" --html-path="${ROOT}/html" "$@"
EOF
  chmod 0755 "${stage}/run-nirmata.sh"
fi

archive="${stage}.tar.zst"
tar --zstd -cf "${archive}" -C "${DIST_DIR}" "$(basename "${stage}")"
printf 'Build complete: %s\n' "${archive}"
