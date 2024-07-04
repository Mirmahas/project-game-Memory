// Board class
class Board {
  //-This constructor:sets up the game board by storing the game object, the board element, and an empty list for the cards.
  constructor(game, boardElementId) {
    this.game = game;
    this.element = document.getElementById(boardElementId);
    this.cards = [];
  }
  // Method to itializes the board with the card values
  // -This fuction: initializes the cards, shuffles them, and then displays them on the game board.
  initialize(cardsValues) {
    this.cards = cardsValues.map((value) => new Card(value, this.game));
    this.shuffleCards();
    this.render();
  }
  //-This function: Shuffles the cards randomly so they are in a different order each time it is called.
  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  //This function: clears the board and then adds all the cards to the board to display them.
  render() {
    this.element.innerHTML = "";
    this.cards.forEach((card) => this.element.appendChild(card.element));
  }
}
