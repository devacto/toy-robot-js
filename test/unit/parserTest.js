var parser = require('../../src/parser');
var robot = require('../../src/robot');

describe('parsing PLACE command', function() {
  describe('robot should have', function() {
    var myRobot = new robot({ x: 0, y: 0, direction: 'north' });
    var myParser = new parser({ robot: myRobot });
    myParser.parse('PLACE 1,1,SOUTH');

    it('correct x', function() {
      myRobot.x.should.equal(1);
    });

    it('correct y', function() {
      myRobot.y.should.equal(1);
    });

    it('correct direction', function() {
      myRobot.direction.should.equal('south');
    });
  });
});

describe('parsing LEFT command', function() {
  describe('robot should have', function() {
    var myRobot = new robot({ x: 0, y: 0, direction: 'north' });
    var myParser = new parser({ robot: myRobot });
    myParser.parse('LEFT');

    it('correct x', function() {
      myRobot.x.should.equal(0);
    });

    it('correct y', function() {
      myRobot.y.should.equal(0);
    });

    it('correct direction', function() {
      myRobot.direction.should.equal('west');
    });
  });
});

describe('parsing RIGHT command', function() {
  describe('robot should have', function() {
    var myRobot = new robot({ x: 0, y: 0, direction: 'north' });
    var myParser = new parser({ robot: myRobot });
    myParser.parse('RIGHT');

    it('correct x', function() {
      myRobot.x.should.equal(0);
    });

    it('correct y', function() {
      myRobot.y.should.equal(0);
    });

    it('correct direction', function() {
      myRobot.direction.should.equal('east');
    });
  });
});

describe('parsing MOVE command', function() {
  describe('robot should have', function() {
    var myRobot = new robot({ x: 0, y: 0, direction: 'north' });
    var myParser = new parser({ robot: myRobot });
    myParser.parse('MOVE');

    it('correct x', function() {
      myRobot.x.should.equal(0);
    });

    it('correct y', function() {
      myRobot.y.should.equal(1);
    });

    it('correct direction', function() {
      myRobot.direction.should.equal('north');
    });
  });
});

describe('parsing REPORT command', function() {
  describe('with robot', function() {
    var myRobot = new robot({ x: 0, y: 0, direction: 'north' });
    var myParser = new parser({ robot: myRobot });
    var result = myParser.parse('REPORT');

    it('produces the correct string', function() {
      result.should.equal('0,0,NORTH'); 
    });
  });
});
