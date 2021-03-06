var parser = require('../../src/parser');
var robot = require('../../src/robot');
var board = require('../../src/board');
var portal = require('../../src/portal');

var myBoard = new board({ width: 5, height: 5 });

describe('parsing PLACE command', function() {
  describe('robot should have', function() {
    var myRobot = new robot({ board: myBoard, x: 0, y: 0, direction: 'north' });
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
    var myRobot = new robot({ board: myBoard, x: 0, y: 0, direction: 'north' });
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
    var myRobot = new robot({ board: myBoard, x: 0, y: 0, direction: 'north' });
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
    var myRobot = new robot({ board: myBoard, x: 0, y: 0, direction: 'north' });
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
    var myRobot = new robot({ board: myBoard, x: 0, y: 0, direction: 'north' });
    var myParser = new parser({ robot: myRobot });
    var result = myParser.parse('REPORT');

    it('produces the correct string', function() {
      result.should.equal('0,0,NORTH');
    });
  });
});

describe('parsing PORTAL command', function() {
  describe('with board', function() {
    var myBoard = new board({width: 5, height: 5});
    var myRobot = new robot({ board: myBoard, x: 0, y: 0, direction: 'north' });
    var myParser = new parser({ robot: myRobot });

    myParser.parse('PORTAL 0,1,NORTH,2,2');

    it('produces a portal with correct attributes in the board', function() {
      myBoard.portal.x.should.equal(0);
      myBoard.portal.y.should.equal(1);
      myBoard.portal.direction.should.equal('north');
      myBoard.portal.x1.should.equal(2);
      myBoard.portal.y1.should.equal(2);
    });
  });
});
