#!/usr/bin/env bash
set -Eeuo pipefail

SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BUILD_DIR="${BUILD_DIR:-${SOURCE_DIR}/build/macos-release}"
DIST_DIR="${DIST_DIR:-${SOURCE_DIR}/build/dist}"
JOBS="${JOBS:-$(sysctl -n hw.logicalcpu)}"
MACOS_DEPLOYMENT_TARGET="${MACOS_DEPLOYMENT_TARGET:-12.0}"
CODESIGN_IDENTITY="${CODESIGN_IDENTITY:--}"

brew_prefix() { brew --prefix "$1" 2>/dev/null || true; }
QT_PREFIX_PATH="${QT_PREFIX_PATH:-$(brew_prefix qt)}"
BOOST_ROOT="${BOOST_ROOT:-$(brew_prefix boost@1.85)}"
BOOST_ROOT="${BOOST_ROOT:-$(brew_prefix boost)}"
OPENSSL_ROOT_DIR="${OPENSSL_ROOT_DIR:-$(brew_prefix openssl@3)}"
DEPENDENCY_PREFIX_PATH="${QT_PREFIX_PATH}"
[[ -n "${BOOST_ROOT}" ]] && DEPENDENCY_PREFIX_PATH+=";${BOOST_ROOT}"
[[ -n "${OPENSSL_ROOT_DIR}" ]] && DEPENDENCY_PREFIX_PATH+=";${OPENSSL_ROOT_DIR}"

if [[ -z "${QT_PREFIX_PATH}" || ! -x "${QT_PREFIX_PATH}/bin/macdeployqt" ]]; then
  echo "Qt 6 was not found. Set QT_PREFIX_PATH or install it with: brew install qt" >&2
  exit 1
fi

if [[ "${PACKAGE_ONLY:-false}" != true ]]; then
  rm -rf "${BUILD_DIR}"

  generator=()
  command -v ninja >/dev/null 2>&1 && generator=(-G Ninja)
  cmake_args=(
    -S "${SOURCE_DIR}" -B "${BUILD_DIR}"
    -DCMAKE_BUILD_TYPE=Release
    -DCMAKE_OSX_DEPLOYMENT_TARGET="${MACOS_DEPLOYMENT_TARGET}"
    -DCMAKE_PREFIX_PATH="${DEPENDENCY_PREFIX_PATH}"
    -DBUILD_GUI=ON -DSTATIC=OFF
  )
  [[ -n "${BOOST_ROOT}" ]] && cmake_args+=("-DBOOST_ROOT=${BOOST_ROOT}")
  [[ -n "${OPENSSL_ROOT_DIR}" ]] && cmake_args+=("-DOPENSSL_ROOT_DIR=${OPENSSL_ROOT_DIR}")
  [[ "${testnet:-false}" == true ]] && cmake_args+=("-DTESTNET=ON")

  cmake "${generator[@]}" "${cmake_args[@]}"
  cmake --build "${BUILD_DIR}" --config Release --parallel "${JOBS}" \
    --target Nirmata nirmatad simplewallet connectivity_tool
fi

APP="${BUILD_DIR}/src/Nirmata.app"
[[ -d "${APP}" ]] || { echo "Application bundle was not created: ${APP}" >&2; exit 1; }
PRISTINE_APP="${BUILD_DIR}/Nirmata.pristine.app"
if [[ "${PACKAGE_ONLY:-false}" == true ]]; then
  [[ -d "${PRISTINE_APP}" ]] || {
    echo "Pristine application bundle is missing; run a full build once before PACKAGE_ONLY." >&2
    exit 1
  }
  rm -rf "${APP}"
  cp -a "${PRISTINE_APP}" "${APP}"
else
  rm -rf "${PRISTINE_APP}"
  cp -a "${APP}" "${PRISTINE_APP}"
fi
mkdir -p "${APP}/Contents/MacOS" "${DIST_DIR}"
cp "${BUILD_DIR}/src/nirmatad" "${BUILD_DIR}/src/simplewallet" "${APP}/Contents/MacOS/"

GUI_HTML_DIR="${GUI_HTML_DIR:-}"
if [[ -z "${GUI_HTML_DIR}" && -f "${SOURCE_DIR}/../NirmataGUI/html/index.html" ]]; then
  GUI_HTML_DIR="${SOURCE_DIR}/../NirmataGUI/html"
fi
if [[ -z "${GUI_HTML_DIR}" ]]; then
  GUI_HTML_DIR="${SOURCE_DIR}/src/gui/qt-daemon/layout/html"
fi
mkdir -p "${APP}/Contents/lib" "${APP}/Contents/Frameworks"
for formula in webp brotli; do
  formula_prefix="$(brew_prefix "${formula}")"
  if [[ -d "${formula_prefix}/lib" ]]; then
    cp -Lf "${formula_prefix}"/lib/*.dylib "${APP}/Contents/lib/"
    cp -Lf "${formula_prefix}"/lib/*.dylib "${APP}/Contents/Frameworks/"
  fi
done
rm -rf "${APP}/Contents/_CodeSignature"
codesign --remove-signature "${APP}/Contents/MacOS/Nirmata" >/dev/null 2>&1 || true
find "${APP}/Contents/lib" "${APP}/Contents/Frameworks" -type f -name '*.dylib' \
  -exec codesign --remove-signature {} \; >/dev/null 2>&1 || true

deploy_args=("${APP}" -always-overwrite)
deploy_lib_dirs=(
  "${QT_PREFIX_PATH}/lib"
  "${OPENSSL_ROOT_DIR}/lib"
  "${BOOST_ROOT}/lib"
  "$(brew_prefix webp)/lib"
  "$(brew_prefix brotli)/lib"
)
for lib_dir in "${deploy_lib_dirs[@]}"; do
  [[ -d "${lib_dir}" ]] && deploy_args+=("-libpath=${lib_dir}")
done
macdeploy_log="${BUILD_DIR}/macdeployqt.log"
if ! "${QT_PREFIX_PATH}/bin/macdeployqt" "${deploy_args[@]}" >"${macdeploy_log}" 2>&1; then
  cat "${macdeploy_log}" >&2
  exit 1
fi
if grep -q 'Cannot resolve rpath' "${macdeploy_log}"; then
  cat "${macdeploy_log}" >&2
  exit 1
fi

# macdeployqt only follows the main GUI executable. Bundle dependencies of the
# command-line programs shipped beside it as well, so they work without Homebrew.
cli_dependency_queue=(
  "${APP}/Contents/MacOS/nirmatad"
  "${APP}/Contents/MacOS/simplewallet"
)
homebrew_dependencies() {
  local binary="$1"
  local first_dependency_line=2
  if file "${binary}" | grep -q 'dynamically linked shared library'; then
    first_dependency_line=3 # line 2 is LC_ID_DYLIB, not a load command
  fi
  otool -L "${binary}" | awk -v first="${first_dependency_line}" \
    'NR >= first { print $1 }' | grep '^/opt/homebrew/' || true
}
queue_index=0
processed_binaries=""
while (( queue_index < ${#cli_dependency_queue[@]} )); do
  binary="${cli_dependency_queue[queue_index++]}"
  if grep -Fqx "${binary}" <<<"${processed_binaries}"; then
    continue
  fi
  processed_binaries+="${binary}"$'\n'
  codesign --remove-signature "${binary}" >/dev/null 2>&1 || true
  while IFS= read -r dependency; do
    [[ -n "${dependency}" ]] || continue
    bundled_library="${APP}/Contents/Frameworks/$(basename "${dependency}")"
    if [[ ! -f "${bundled_library}" ]]; then
      cp -Lf "${dependency}" "${bundled_library}"
      chmod u+w "${bundled_library}"
      install_name_tool -id "@rpath/$(basename "${dependency}")" "${bundled_library}"
    fi
    cli_dependency_queue+=("${bundled_library}")
    install_name_tool -change "${dependency}" \
      "@executable_path/../Frameworks/$(basename "${dependency}")" "${binary}"
  done < <(homebrew_dependencies "${binary}")
done

# Homebrew's Qt 6 macdeployqt can leave absolute references in the nested
# QtWebEngine helper. Convert every remaining load command to the bundle rpath.
while IFS= read -r -d '' binary; do
  file "${binary}" | grep -q 'Mach-O' || continue
  while IFS= read -r dependency; do
    [[ -n "${dependency}" ]] || continue
    if [[ "${dependency}" == *.framework/Versions/* ]]; then
      relative_dependency="${dependency#*/lib/}"
      replacement="@rpath/${relative_dependency}"
    else
      replacement="@rpath/$(basename "${dependency}")"
    fi
    codesign --remove-signature "${binary}" >/dev/null 2>&1 || true
    install_name_tool -change "${dependency}" "${replacement}" "${binary}"
  done < <(homebrew_dependencies "${binary}")
done < <(find "${APP}/Contents" -type f -print0)

# Dependencies recorded as @executable_path/../Frameworks work for the main
# executable, but resolve relative to the deeply nested QtWebEngineProcess for
# framework binaries loaded by that helper. Frameworks already carry bundle
# rpaths, so use @rpath for their private dependencies.
while IFS= read -r -d '' binary; do
  file "${binary}" | grep -q 'Mach-O' || continue
  [[ "${binary}" == "${APP}/Contents/MacOS/"* ]] && continue
  while IFS= read -r dependency; do
    [[ "${dependency}" == @executable_path/../Frameworks/* ]] || continue
    replacement="@rpath/${dependency#@executable_path/../Frameworks/}"
    codesign --remove-signature "${binary}" >/dev/null 2>&1 || true
    install_name_tool -change "${dependency}" "${replacement}" "${binary}"
  done < <(otool -L "${binary}" | awk 'NR >= 2 { print $1 }')

  if file "${binary}" | grep -q 'dynamically linked shared library'; then
    if [[ "${binary}" == *'.framework/Versions/'* ]]; then
      bundle_rpath='@loader_path/../../..'
    else
      bundle_rpath='@loader_path'
    fi
    if ! otool -l "${binary}" | awk '/cmd LC_RPATH/{getline; getline; print $2}' | grep -Fqx "${bundle_rpath}"; then
      codesign --remove-signature "${binary}" >/dev/null 2>&1 || true
      install_name_tool -add_rpath "${bundle_rpath}" "${binary}"
    fi
  fi
done < <(find "${APP}/Contents" -type f -print0)

portable=true
while IFS= read -r -d '' binary; do
  file "${binary}" | grep -q 'Mach-O' || continue
  if homebrew_dependencies "${binary}" | grep -q .; then
    echo "Unbundled Homebrew dependency in ${binary}:" >&2
    homebrew_dependencies "${binary}" >&2
    portable=false
  fi
done < <(find "${APP}/Contents" -type f -print0)
[[ "${portable}" == true ]] || exit 1

rm -rf "${APP}/Contents/MacOS/html"
rsync -a --delete --exclude node_modules --exclude .angular "${GUI_HTML_DIR}/" "${APP}/Contents/MacOS/html/"
xattr -cr "${APP}"
codesign --force --deep --options runtime \
  --entitlements "${SOURCE_DIR}/utils/macos_entitlements.plist" \
  --sign "${CODESIGN_IDENTITY}" "${APP}"
codesign --verify --deep --strict "${APP}"

archive="${DIST_DIR}/nirmata-macos-$(uname -m).zip"
ditto -c -k --sequesterRsrc --keepParent "${APP}" "${archive}"
echo "macOS package created: ${archive}"
