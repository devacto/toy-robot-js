var board = function(args) {
  this.width = args.width;
  this.height = args.height;
  this.portal = args.portal;
};

board.prototype.checkForPortal = function(x, y, direction) {
  var thereIsAPortal = false;
  if(this.portal) {
    if((this.portal.x === x) && (this.portal.y === y) && (this.portal.direction === direction)) {
      thereIsAPortal = true;
    }
  }
  return thereIsAPortal;
};

board.prototype.validatePosition = function(x, y) {
  var valid = false;
  if((0 <= x) && (x < this.width) && (0 <= y) && (y < this.height)) {
    valid = true;
  }
  return valid;
};

module.exports = board;
