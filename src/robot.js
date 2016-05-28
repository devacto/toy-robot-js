var robot = function(args) {
  this.direction = args.direction;
};

robot.prototype.left = function() {
  if(String(this.direction).toLowerCase() === 'north') {
    this.direction = 'west';
  }
};

module.exports = robot;
