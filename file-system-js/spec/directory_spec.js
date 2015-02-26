var Directory = require('../directory');

describe('Directory', ()=> {

  describe("#ls", ()=> {
    it("starts off as an empty array", ()=> {
      var directory = new Directory('workspace');

      expect(directory.ls()).toEqual([]);
    });

    // it("returns filenames in order", ()=> {
    //   var directory = new Directory('workspace');
    //
    //   directory.write("foo.txt", "w00t!");
    //   expect(directory.ls()).toEqual(["foo.txt"]);
    //
    //   directory.write("bar.txt", "Hello world");
    //   expect(directory.ls()).toEqual(["bar.txt", "foo.txt"]);
    // });

  });

  // describe("#cat", ()=> {
  //   it("returns the content of the given file", ()=> {
  //     var directory = new Directory('workspace');
  //
  //     directory.write("foo.txt", "w00t!");
  //     expect(directory.cat('foo.txt')).toEqual("w00t!");
  //
  //     directory.write("bar.txt", "Hello world");
  //     directory.ls();
  //     expect(directory.cat('bar.txt')).toEqual("Hello world");
  //   });
  // });
  //
  // describe("#mv", ()=> {
  //   it("changes the name of a given file to another name", ()=> {
  //     var directory = new Directory('workspace');
  //
  //     directory.write("bar.txt", "Hello world");
  //     directory.mv("bar.txt", "foo.txt");
  //
  //     expect(directory.cat('foo.txt')).toEqual('Hello world');
  //     expect(directory.ls()).toEqual(['foo.txt']);
  //   });
  // });

  // describe("#cp", ()=> {
  //   it("copies one object to another", ()=> {
  //     var directory = new Directory('workspace');
  //
  //     directory.write("bar.txt", "Hello world");
  //     directory.cp("bar.txt", "foo.txt");
  //     directory.write("bar.txt", "I've changed");
  //
  //     expect(directory.cat('foo.txt')).toEqual('Hello world');
  //     expect(directory.cat('bar.txt')).toEqual("I've changed");
  //     expect(directory.ls()).toEqual(['bar.txt', 'foo.txt']);
  //   });
  // });
  //
  // describe("#ln_s", ()=> {
  //   it("symlinks one object to another", ()=> {
  //     var directory = new Directory('workspace');
  //
  //     directory.write("bar.txt", "Hello world");
  //     directory.ln_s("bar.txt", "foo.txt");
  //     directory.write("bar.txt", "I've changed");
  //
  //     expect(directory.cat('foo.txt')).toEqual("I've changed");
  //     expect(directory.cat('bar.txt')).toEqual("I've changed");
  //     expect(directory.ls()).toEqual(['bar.txt', 'foo.txt']);
  //   });
  // });

});
