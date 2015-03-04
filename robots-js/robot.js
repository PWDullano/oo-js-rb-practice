var position = [0,0]
var charge = 0
var history = []

var Robot = function (startCharge) {
  position = [0,0];
  charge = startCharge;
  history = [];
};

Robot.prototype.position = function() {
  return position;
};

Robot.prototype.battery = function() {
  return charge;
};

Robot.prototype.moveUp = function() {
  position[1] ++;
  history.push("up");
};

Robot.prototype.moveLeft = function() {
  position[0] --;
  history.push("left");
};

Robot.prototype.history = function() {
  return history;
};


module.exports = Robot;
