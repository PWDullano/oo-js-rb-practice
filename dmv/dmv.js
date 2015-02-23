var DMV = function (agents) {
  // this._customersInLine = [];
  // this._agents = agents;
  // this._attending = {};
  // agents.forEach(function (agent) {
  //   this._attending[agent] = null;
  // }.bind(this));
};

// DMV.prototype.customersInLine = function () {
//   return this._customersInLine;
// };
//
// DMV.prototype.enter = function (name) {
//   this._customersInLine.push(name);
// };
//
// DMV.prototype.currentCustomerFor = function (agent) {
//   return this._attending[agent];
// };
//
// DMV.prototype.nextCustomer = function () {
//   for (var i = 0; i < this._agents.length; i++) {
//     var agent = this._agents[i];
//     if (this._attending[agent] === null) {
//       this._attending[agent] = this._customersInLine.shift();
//       return;
//     }
//   }
// };
//
// DMV.prototype.resolve = function (customer) {
//   for (var i = 0; i < this._agents.length; i++) {
//     var agent = this._agents[i];
//     var currentCustomer = this._attending[agent];
//     if (customer === currentCustomer) {
//       this._attending[agent] = null;
//       return;
//     }
//   }
// };

module.exports = DMV;
