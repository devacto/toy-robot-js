#!/usr/bin/env bats

@test "Acceptance test using test data" {
  result="$(./index.js ./test-data/test-01.command)"
  [ "$result" = "0,1,NORTH" ]
}

@test "Portal functional test" {
  result="$(./index.js ./test-data/test-02.command)"
  [ "$result" = "2,2,NORTH" ]
}
