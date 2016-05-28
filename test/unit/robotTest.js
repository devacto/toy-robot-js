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

describe('robot moving', function() {
  describe('facing north', function() {
    var myRobot = new robot({ x: 2, y: 2, direction: 'north' });

    it('should move forward', function() {
      myRobot.move();
      myRobot.x.should.equal(2);
      myRobot.y.should.equal(3);
    });
  });

  describe('facing east', function() {
    var myRobot = new robot({ x: 2, y: 2, direction: 'east' });

    it('should move right', function() {
      myRobot.move();
      myRobot.x.should.equal(3);
      myRobot.y.should.equal(2);
    });
  });

  describe('facing south', function() {
    var myRobot = new robot({ x: 2, y: 2, direction: 'south' });

    it('should move backward', function() {
      myRobot.move();
      myRobot.x.should.equal(2);
      myRobot.y.should.equal(1);
    });
  });

  describe('facing west', function() {
    var myRobot = new robot({ x: 2, y: 2, direction: 'west' });

    it('should move left', function() {
      myRobot.move();
      myRobot.x.should.equal(1);
      myRobot.y.should.equal(2);
    });
  });
});
