// Entry point ot application. Gets all explicity information need
// Uses the JSON file

/*
Model = card, deck, multiplierCard js files
* holds all the data objects

*/

// DOM ELEMENTS
let drawButton = document.getElementById("drawButton");
let highlightButton = document.getElementsByClassName('highlight')
let unhighlightButton = document.getElementsByClassName('unhighlight')
let cardImage = document.getElementById("imgClickAndChange");
let blessButton = document.getElementById('bless')
let curseButton = document.getElementById('curse')
let blessCount = document.getElementById('bless-count')
let curseCount = document.getElementById('curse-count')
let addedDiv = document.querySelector('.added');

// Transport all DOM elements to view to be executed via DOM Manipulation
var view = new ModifierDeckView(drawButton, cardImage, blessButton, curseButton, blessCount, curseCount, addedDiv);

// Create all cards from JSON file using an AJAX call
// separate to cardLoader Controller in the future
var modifierDeckController = new modifierDeckController(monstersDeck, view);
