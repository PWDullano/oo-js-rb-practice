var CardCollection = require('../card-collection');
var Card = require('../card');

describe('CardCollection', ()=> {

  it('starts off with an empty array of cards', ()=> {
    var collection = new CardCollection();

    expect(collection.cards).toEqual([]);
  });

  it('can acquire cards', ()=> {
    var collection = new CardCollection();

    var card = new Card('babe ruth', 35, true);
    collection.acquire(card)

    expect(collection.cards).toEqual([card]);
  });

});
