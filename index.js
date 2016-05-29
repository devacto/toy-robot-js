#!/usr/bin/env node

var rl = require('readline');
var fs = require('fs');
var Parser = require('./src/parser');
var Robot = require('./src/robot');
var Board = require('./src/board');
var program = require('commander');

program
  .arguments('<file>')
  .action(function(file) {
    var lineReader = rl.createInterface({
      input: fs.createReadStream(file)
    });

    var myBoard = new Board({ width: 5, height: 5 });
    var myRobot = new Robot({ board: myBoard, x: 0, y: 0, direction: 'north' });
    var myParser = new Parser({ robot: myRobot });

    lineReader.on('line', function(line) {
      var result = myParser.parse(line);
      if(result !== undefined) {
        console.log(result);
      }
    });
  })
  .parse(process.argv);
