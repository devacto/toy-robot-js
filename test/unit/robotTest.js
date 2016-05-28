var _ = require('lodash');
var robot = require('../../src/robot');

describe('robot turning left', function() {
  var directionsToLeft = {
    'north' : 'west',
    'east'  : 'north',
    'south' : 'east',
    'west'  : 'south'
  };

  _.forEach(directionsToLeft, function(value, key) {
    describe('from ' + key, function(){
      it('should have direction of ' + value, function() {
        var myRobot = new robot({ direction: key });
        myRobot.left();
        myRobot.direction.should.equal(value);
      });
    });
  });
});

describe('robot turning right', function() {
  var directionsToRight = {
    'north' : 'east',
    'east'  : 'south',
    'south' : 'west',
    'west'  : 'north'
  };

  _.forEach(directionsToRight, function(value, key) {
    describe('from ' + key, function(){
      it('should have direction of ' + value, function() {
        var myRobot = new robot({ direction: key });
        myRobot.right();
        myRobot.direction.should.equal(value);
      });
    });
  });
});
