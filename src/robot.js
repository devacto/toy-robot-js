var robot = function(args) {
  this.direction = args.direction;
  this.x = args.x;
  this.y = args.y;
  this.board = args.board;
};

var lcase = function(original) {
  return String(original).toLowerCase();
};

var ucase = function(original) {
  return String(original).toUpperCase();
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
      if(this.board.validatePosition(this.x, this.y + 1)){
        this.y += 1;
      }
      break;
    case 'east':
      if(this.board.validatePosition(this.x + 1, this.y)){
        this.x += 1;
      }
      break;
    case 'south':
      if(this.board.validatePosition(this.x, this.y - 1)){
        this.y -= 1;
      }
      break;
    case 'west':
      if(this.board.validatePosition(this.x - 1, this.y)){
        this.x -= 1;
      }
      break;
  }
};

robot.prototype.report = function() {
  var result = this.x + ',' + this.y + ',' + ucase(this.direction);
  return result;
};

module.exports = robot;
