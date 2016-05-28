var robot = function(args) {
  this.direction = args.direction;
  this.x = args.x;
  this.y = args.y;
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

robot.prototype.right = function() {
  switch(lcase(this.direction)) {
    case 'north':
      this.direction = 'east';
      break;
    case 'east':
      this.direction = 'south';
      break;
    case 'south':
      this.direction = 'west';
      break;
    case 'west':
      this.direction = 'north';
      break;
  }
};

robot.prototype.move = function() {
  switch(lcase(this.direction)) {
    case 'north':
      this.y += 1;
      break;
    case 'east':
      this.x += 1;
      break;
    case 'south':
      this.y -= 1;
      break;
    case 'west':
      this.x -= 1;
      break;
  }
};

module.exports = robot;
