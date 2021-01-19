var Card = function(value, img, oneTimeUse, tag) {
  this.value = value;
  this.img = img;
  this.oneTimeUse = oneTimeUse;
  this.tag = tag;
}

Card.prototype = {
  calculateDamage: function(attackValue) {
    return attackValue + this.value;
  },

  causesReshuffle: function(){
    return false;
  }
}
