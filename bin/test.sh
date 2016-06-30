#!/bin/bash
set -e

echo "checking code quality"
./node_modules/.bin/jshint index.js ./src/ --reporter unix
./node_modules/.bin/jscs index.js ./src/

printf "\nrunning unit tests"
./bin/test-unit.sh

printf "\nrunning functional tests"
./bin/bats test/functional/robot.bats

printf "\nchecking test coverage\n"
./node_modules/.bin/istanbul --config=./config/istanbul.json check-coverage
