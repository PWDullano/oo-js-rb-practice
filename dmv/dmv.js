var Directory = function (name) {
  // this.name = name;
  // this._files = {};
};

// Directory.prototype.ls = function () {
//   var result = [];
//   for (var key in this._files) {
//     if (this._files.hasOwnProperty(key)) {
//       result.push(key);
//     }
//   }
//   return result.sort();
// };

// Directory.prototype.write = function (name, content) {
//   if(!this._files[name]) this._files[name] = {name: name};
//   this._files[name].content = content;
// };

// Directory.prototype.cat = function (name) {
//   return this._files[name].content;
// };

// Directory.prototype.mv = function (src, destination) {
//   this._files[destination] = this._files[src];
//   this._files[destination].name = destination;
//   delete this._files[src];
// };

// Directory.prototype.cp = function (src, destination) {
//   this._files[destination] = {
//     name: this._files[src].name,
//     content: this._files[src].content
//   };
// };

// Directory.prototype.ln_s = function (src, destination) {
//   this._files[destination] = this._files[src];
// };

module.exports = Directory;
