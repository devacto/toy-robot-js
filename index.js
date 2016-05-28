var rl = require('readline');
var fs = require('fs');

var lineReader = rl.createInterface({
  input: fs.createReadStream('./test-data/test-01.command')
});

lineReader.on('line', function(line) {
  console.log('Line from file:', line);
});
