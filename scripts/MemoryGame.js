class MemoryGame {
  //-This constructor: sets up a new game saving the board ID and controller, initializing lists for flipped and matched cards, creating a new game board, and defining the card values. Parametros
  constructor(boardId, controller) {
    this.boardElementId = boardId; // Save the game board's ID
    this.controller = controller; // Save the game controller. "to crontrol when show the end screem"
    this.flippedCards = []; // List of flipped cards
    this.matchedCards = []; // List of matched cards
    this.board = new Board(this, this.boardElementId); //creating a new game board
    this.cardsValues = [
      "☂️",
      "☂️",
      "🦜",
      "🦜",
      "🍉",
      "🍉",
      "🎺",
      "🎺",
      "🦥",
      "🦥",
      "💻",
      "💻",
      "🚲",
      "🚲",
      "⛄️",
      "⛄️",
    ];
  }

  //-This funtion: Prepared the cards on the board. Initializes the game with the cards.
  initializeGame() {
    this.board.initialize(this.cardsValues);
  }
  //-This funtion: Checks if the two flipped cards match
  checkMatch() {
    const [card1, card2] = this.flippedCards; // Get the two flipped cards
    if (card1.value === card2.value) {
      // Check if the cards are the same
      card1.match(); // Mark the first card as matched
      card2.match(); // Mark the second card as matched
      //- Add the matched cards to the list
      this.matchedCards.push(card1, card2);
    } else {
      //- Wait one second, and flips the two cards back to their original position.
      setTimeout(() => {
        card1.unflip(); // Flip the first card back over
        card2.unflip(); // Flip the second card back over
      }, 1000);
    }
    this.flippedCards = []; // Clear the list of flipped cards, so that you can flip two new cards the next time

    // - If all cards are matched, show the end screen,
    if (this.matchedCards.length === this.cardsValues.length) {
      setTimeout(() => {
        this.controller.showEndScreen();
      }, 500);
    }
  }
}
