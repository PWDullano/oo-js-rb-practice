var Directory = require('../directory');

describe('Directory', ()=> {

  it("has a name", ()=> {
    var directory = new Directory('workspace');
    expect(directory.name).toEqual('workspace');

    directory = new Directory('filestuff');
    expect(directory.name).toEqual('filestuff');
  });

  // it("returns filenames in order with ls", ()=> {
  //   var directory = new Directory('workspace');
  //   expect(directory.ls()).toEqual([]);
  //
  //   directory.write("foo.txt", "w00t!");
  //   expect(directory.ls()).toEqual(["foo.txt"]);
  //
  //   directory.write("bar.txt", "Hello world");
  //   expect(directory.ls()).toEqual(["bar.txt", "foo.txt"]);
  // });
  //
  //
  // it("returns filenames with size with ls_la", ()=> {
  //   var directory = new Directory('workspace');
  //   expect(directory.ls()).toEqual([]);
  //
  //   directory.write("foo.txt", "w00t!");
  //   expect(directory.ls()).toEqual(["foo.txt - 5"]);
  //
  //   directory.write("bar.txt", "Hello world");
  //   expect(directory.ls()).toEqual(["bar.txt - 11", "foo.txt - 5"]);
  // });
  //
  // it("returns the content of the given file with cat", ()=> {
  //   var directory = new Directory('workspace');
  //
  //   directory.write("foo.txt", "w00t!");
  //   expect(directory.cat('foo.txt')).toEqual("w00t!");
  //
  //   directory.write("bar.txt", "Hello world");
  //   directory.ls();
  //   expect(directory.cat('bar.txt')).toEqual("Hello world");
  // });
  //
  // it("changes the name of a given file to another name with mv", ()=> {
  //   var directory = new Directory('workspace');
  //
  //   directory.write("bar.txt", "Hello world");
  //   directory.mv("bar.txt", "foo.txt");
  //
  //   expect(directory.cat('foo.txt')).toEqual('Hello world');
  //   expect(directory.ls()).toEqual(['foo.txt']);
  // });
  //
  // it("copies one object to another with cp", ()=> {
  //   var directory = new Directory('workspace');
  //
  //   directory.write("bar.txt", "Hello world");
  //   directory.cp("bar.txt", "foo.txt");
  //   directory.write("bar.txt", "I've changed");
  //
  //   expect(directory.cat('foo.txt')).toEqual('Hello world');
  //   expect(directory.cat('bar.txt')).toEqual("I've changed");
  //   expect(directory.ls()).toEqual(['bar.txt', 'foo.txt']);
  // });
  //
  // it("symlinks one object to another with ln_s", ()=> {
  //   var directory = new Directory('workspace');
  //
  //   directory.write("bar.txt", "Hello world");
  //   directory.ln_s("bar.txt", "foo.txt");
  //   directory.write("bar.txt", "I've changed");
  //
  //   expect(directory.cat('foo.txt')).toEqual("I've changed");
  //   expect(directory.cat('bar.txt')).toEqual("I've changed");
  //   expect(directory.ls()).toEqual(['bar.txt', 'foo.txt']);
  // });

});
