class CardCollection {
  constructor(){
    this.cards = [];
  }

  acquire(card) {
    this.cards.push(card);
  }
}


module.exports = CardCollection;
