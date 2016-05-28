var robot = function(args) {
  this.direction = args.direction;
};

var lcase = function(original) {
  return String(original).toLowerCase();
};

robot.prototype.left = function() {
  switch(lcase(this.direction)) {
    case 'north':
      this.direction = 'west';
      break;
    case 'east':
      this.direction = 'north';
      break;
    case 'south':
      this.direction = 'east';
      break;
    case 'west':
      this.direction = 'south';
      break;
  }
};

module.exports = robot;
