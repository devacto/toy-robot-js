var parser = function(args) {
  this.robot = args.robot;
};

var handlePlace = function(str, robot) {
  var arr = str.split(',');
  robot.x = Number(arr[0]);
  robot.y = Number(arr[1]);
  robot.direction = arr[2].toLowerCase();
};

parser.prototype.parse = function(str) {
  var arr = str.split(' ');
  var command = String(arr[0]).toLowerCase();

  switch(command) {
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
