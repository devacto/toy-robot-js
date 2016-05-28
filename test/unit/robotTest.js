var robot = require('../../src/robot');

describe('robot', function() {
  it('moves correctly', function() {
    var something = robot.move();
    something.should.equal(0);
  });
});
