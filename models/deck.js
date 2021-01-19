var Deck = function() {
  this._cards = [];
};

Deck.prototype = {
  shuffle: function() {
    for(let i = this._cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
		  let temp = this._cards[i];
	  	this._cards[i] = this._cards[j];
		  this._cards[j] = temp;
    }
    // console.log("this._cards:", JSON.stringify(this._cards));
  },

  addCard: function(card) {
    this._cards.push(card);
  },

  drawCard: function() {
    let topCard = this._cards[0];
    this._cards = this._cards.splice(1);
    return topCard;
  },

  getNumCardsWithTag: function(tag) {
    let total = 0;
    this._cards.forEach( card => {
      if(card.tag === tag) total++;
    });

    return total;
  }
};
