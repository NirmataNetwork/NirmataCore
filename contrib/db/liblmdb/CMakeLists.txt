
set (lmdb_sources mdb.c midl.c)

include_directories("${CMAKE_CURRENT_SOURCE_DIR}")

if(CMAKE_C_COMPILER_ID STREQUAL "GNU")
  set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -Wno-missing-field-initializers -Wno-missing-braces -Wno-aggregate-return -Wno-discarded-qualifiers -Wno-unused-but-set-variable -Wno-implicit-fallthrough -Wno-maybe-uninitialized")
elseif(CMAKE_C_COMPILER_ID MATCHES "Clang")
  set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -Wno-missing-field-initializers -Wno-missing-braces -Wno-aggregate-return -Wno-incompatible-pointer-types-discards-qualifiers -Wno-unused-but-set-variable -Wno-implicit-fallthrough")
endif()
if(FREEBSD)
  add_definitions(-DMDB_DSYNC=O_SYNC)
endif()

add_library(lmdb  ${lmdb_sources})

target_link_libraries(lmdb PRIVATE ${CMAKE_THREAD_LIBS_INIT})

if(WIN32)
  target_link_libraries(lmdb ntdll)
endif()

add_executable(mdb_copy mdb_copy.c)
target_link_libraries(mdb_copy lmdb)
set_property(TARGET mdb_copy PROPERTY FOLDER "utils")
