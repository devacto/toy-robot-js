var board = require('../../src/board');

var myBoard = new board({ width: 5, height: 5 });

describe('board validating position', function() {
  describe('x is negative', function() {
    it ('should return false', function() {
      myBoard.validatePosition(-1, 0).should.equal(false);
    });
  });

  describe('x is greater than width', function() {
    it('should return false', function() {
      myBoard.validatePosition(5, 0).should.equal(false);
    });
  });

  describe('x is within the board', function() {
    it('should return true', function() {
      myBoard.validatePosition(3, 0).should.equal(true);
    });
  });

  describe('y is negative', function() {
    it('should return false', function() {
      myBoard.validatePosition(0, -1).should.equal(false);
    });
  });

  describe('y is beyond the board', function() {
    it('should return false', function() {
      myBoard.validatePosition(0, 5).should.equal(false);
    });
  });

  describe('y is within the board', function() {
    it('should return true', function() {
      myBoard.validatePosition(0, 4).should.equal(true);
    });
  });
});
