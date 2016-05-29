var board = function(args) {
  this.width = args.width;
  this.height = args.height;
};

board.prototype.validatePosition = function(x, y) {
  var valid = false;
  if((0 <= x) && (x < this.width) && (0 <= y) && (y < this.height)) {
    valid = true;
  }
  return valid;
};

module.exports = board;
