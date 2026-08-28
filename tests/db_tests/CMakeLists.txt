add_executable(db_tests db_tests.cpp)
target_link_libraries(db_tests crypto common lmdb zlibstatic ${Boost_LIBRARIES})
add_test(db_tests db_tests)

