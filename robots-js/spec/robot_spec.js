var Robot = require('../robot');

describe('Robot', ()=> {

  it('starts off at position 0,0 and the battery power given', ()=> {
    var robot = new Robot(17);

    expect(robot.position()).toEqual([0,0]);

    expect(robot.battery()).toEqual(17);
  });

  // it moves left/right and decreases battery power
  // it moves up/down and decreases battery power
  // it records it's movements

});
