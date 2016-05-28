var robot = require('../../src/robot');

describe('robot moving left from north', function() {
  it('should have direction of west', function() {
    var myRobot = new robot({ direction: 'north' });
    myRobot.left();
    myRobot.direction.should.equal('west');
  });
});
