/*
Controller: performs all the logic for the app
*/

var modifierDeckController = function(startingCardDataArray, view){
  this.discardedCards = [];
  this.currentDeck = new Deck();

  var self = this;

  function initializeDeck(startingCardDataArray) {
    startingCardDataArray.forEach(function(cardData){
      //create cards as instances of the Card and MultiplierCard constructors
      if(cardData.type === "adder") {
        let card = new Card(cardData.value, cardData.img, cardData.oneTimeUse, cardData.tag)

        self.currentDeck.addCard(card);
      } else {
        let multiplierCard = new MultiplierCard(cardData.value, cardData.img, cardData.oneTimeUse, cardData.tag)

        self.currentDeck.addCard(multiplierCard);
      }
    });
  }

  initializeDeck(startingCardDataArray);
  self.currentDeck.shuffle() //then shuffle existing deck

  //executes all logic functions and renders them into the DOM using the modifierDeckView fns
  view.addDrawEventListener(self.drawAndDiscardCard.bind(self))

  view.addBlessCardEventListener(self.addBlessCard.bind(self))

  view.addCurseCardEventListener(self.addCurseCard.bind(self))
}

modifierDeckController.prototype = {
  drawAndDiscardCard: function (){
    var topCard = this.currentDeck.drawCard(); //draw topCard from currentDeck

    //as long as topCard is a not bless or curse card, add it to the discardedCards
    if(topCard.oneTimeUse === false) {
      this.discardedCards.push(topCard); //once topCard drawn push it to the discardedDeck
    }

    view.showACard(topCard); //then show the topCard in the DOM

    view.showBlessCardCount(this.currentDeck.getNumCardsWithTag('bless'))
    view.showCurseCardCount(this.currentDeck.getNumCardsWithTag('curse'))

    //put discarded cards back in currentDeck and reshuffle if card causesReshuffle()

    if(topCard.causesReshuffle()) {
      this.currentDeck._cards =
      this.currentDeck._cards.concat(this.discardedCards);
      this.discardedCards = []; //reset discardedCards to empty array
      this.currentDeck.shuffle();

      view.showNotification(textValues.RESHUFFLE_DECK_NOTIFICATION, 1000) // shows notification after 1 second
    }
  },
  addBlessCard: function(){
    var blessCard = new MultiplierCard(2, 'images/cards/bless-small.jpg', true, 'bless');
    this.currentDeck.addCard(blessCard);
    this.currentDeck.shuffle();

    view.showNotification(textValues.BLESS_CARD_NOTIFICATION, 500) // shows notification after a 1/2 second

    view.showBlessCardCount(this.currentDeck.getNumCardsWithTag('bless'))

  },

  addCurseCard: function(){
    var curseCard = new MultiplierCard(0, 'images/cards/curse-small.jpg', true, 'curse');
    this.currentDeck.addCard(curseCard);
    this.currentDeck.shuffle();

    view.showNotification(textValues.CURSE_CARD_NOTIFICATION, 500)

    view.showCurseCardCount(this.currentDeck.getNumCardsWithTag('curse'))
  },
}
