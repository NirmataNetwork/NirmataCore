execute_process(
    COMMAND "${GIT}" describe --always --dirty --match "v${VERSION}"
    RESULT_VARIABLE RET
    OUTPUT_VARIABLE DESCRIPTION
    ERROR_QUIET
    OUTPUT_STRIP_TRAILING_WHITESPACE)
if(RET)
    message(STATUS "Git revision is unavailable; using unknown")
    set(VERSION "unknown")
    configure_file("src/version.h.in" "${TO}")
else()
    string(REGEX MATCH "[^0-9a-f]([0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f])[0-9a-f]*(-dirty)?" STUB_VAR "${DESCRIPTION}")
    if(NOT CMAKE_MATCH_1)
        string(REGEX MATCH "^([0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f])(-dirty)?$" STUB_VAR "${DESCRIPTION}")
    endif()
    set(VERSION "${CMAKE_MATCH_1}${CMAKE_MATCH_2}")
    configure_file("src/version.h.in" "${TO}")
endif()
