var Portal = require('./portal');

var parser = function(args) {
  this.robot = args.robot;
};

var handlePlace = function(str, robot) {
  var arr = str.split(',');
  robot.x = Number(arr[0]);
  robot.y = Number(arr[1]);
  robot.direction = arr[2].toLowerCase();
};

var handlePortal = function(str, robot) {
  var arr = str.split(',');

  var myPortal = new Portal({
    x: Number(arr[0]),
    y: Number(arr[1]),
    direction: arr[2].toLowerCase(),
    x1: Number(arr[3]),
    y1: Number(arr[4])
  });

  robot.board.portal = myPortal;
};

parser.prototype.parse = function(str) {
  var arr = str.split(' ');
  var command = String(arr[0]).toLowerCase();

  switch(command) {
    case 'portal':
      handlePortal(arr[1], this.robot);
      break;
    case 'place':
      handlePlace(arr[1], this.robot);
      break;
    case 'left':
      this.robot.left();
      break;
    case 'right':
      this.robot.right();
      break;
    case 'move':
      this.robot.move();
      break;
    case 'report':
      return this.robot.report();
  }
};

module.exports = parser;
