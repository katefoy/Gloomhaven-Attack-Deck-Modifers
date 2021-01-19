/*
view:
* layer with the webpage that the user sees
* includes any actions that manipulate the DOM
*/

var ModifierDeckView = function(drawButton, cardImage, blessButton, curseButton, blessCount, curseCount, cardCount,addedDiv) {
  this.drawButton = drawButton;
  this.cardImage = cardImage;
  this.blessButton = blessButton;
  this.curseButton = curseButton;
  this.blessCount = blessCount;
  this.curseCount = curseCount;
  this.cardCount = cardCount;
  this.addedDiv = addedDiv;
}

ModifierDeckView.prototype = {
  showACard: function(card){
    this.cardImage.src = card.img;
  },

  addDrawEventListener: function(fnc) {
    this.drawButton.addEventListener('click', () => {
      this.drawButton.classList.add('highlight')
      setTimeout( function() {
        this.drawButton.classList.remove('highlight')
      }, 100)

      fnc()

    });

  },

  addBlessCardEventListener: function(fnc){
    this.blessButton.addEventListener('click', () => {
      fnc()
    })
  },

  addCurseCardEventListener: function(fnc){
    this.curseButton.addEventListener('click', () => {
      fnc()
    })
  },

  //duration is in milliseconds.
  showNotification: function(text, duration) {
    this.addedDiv.textContent = text; //add text
    this.addedDiv.style.textShadow = "1px 2px 3px black";
    this.addedDiv.style.background = "#951515";

    setTimeout( () => {
      this.addedDiv.innerText = ''
      this.addedDiv.style.background = "white"
      this.addedDiv.style.boxShadow = "none"
    }, duration)
  },

  showBlessCardCount: function(count) {
    this.blessCount.innerText = count
  },

  showCurseCardCount: function(count) {
    this.curseCount.innerText = count
  },
  
  showCardCount:function(count) {
    this.cardCount.innerText = count
  },

}
