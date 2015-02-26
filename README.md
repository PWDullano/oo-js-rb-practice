# Object-Oriented Programming Assessments

These are meant to be administered by an instructor, one-on-one, using one screen and one keyboard.  Instructors drive (type), students navigate (say what to do).  As an instructor, you should:

* Describe the setup
* Mention that students should talk in code, not ASCII (so "add a property to the object" rather than "type 'this' then 'dot' then 'underscore'")
* Move the interview along quickly, like a job interview.  If they don't have the answer after a short pause, or are floundering, just implement the smallest next step

Ideally each exercise has lots of tests, and you don't have to run all of them.  For example, we should have more than one test of the accumulator pattern, and if they bomb the first one, we can ask them to do a second one, and see how well they would do in a similar job interview scenario (do they pick up quickly).

## Running the files

For ruby just run `rspec` from the directory.

For the javascript exercises, make sure you have node 0.12 or higher.

1. run `npm install` to instal dependencies
1. `cd` into a directory and run:

```
node --harmony ../node_modules/jasmine/bin/jasmine.js
```

## Exercises

### Easy

* Robots
* Cars

### Medium

* Playlist
* Parking lot (on account of having to fill in empty spaces)

### A little harder

* Filesystem (on account of the symlink)
* DMV (on account of the need to track two sets of data)


## Contributing Exercises

The ideal exercise has the following:

* Initial state passed in
* The need for some kind of internal data structure
* A method that filters / maps data somehow
* Some sort of interesting algorithm that requires students to know what variables are / how to use them (see `playlist#swap`)

## TODO

* Build a bus class with people standing and sitting, bus stops etc...
  * board
  * deboard
  * full?

* Build a ledger class that stores transactions and debits and credits accounts
  * we're an asset account
  * debit increases
  * credit decreases
