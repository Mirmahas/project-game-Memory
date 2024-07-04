// Class Card representing a single card in the memory game
class Card {
  //This constructor: creates a new div element for a card, stores its value and a reference to the game, and sets up the card to flip when clicked.
  constructor(value, game) {
    this.value = value; //Stores the card's value or symbol.
    this.game = game; // Stores a reference to the game.
    this.element = document.createElement("div"); //  Creates a new div element for the card.
    this.element.classList.add("card"); // Adds the "card" class to the div element.
    this.element.dataset.value = value; //Sets a data-value attribute on the div with the card's value.
    this.element.innerText = ""; // Initially, the card's text is empty
    this.element.addEventListener("click", () => this.flip()); //  Adds a click event listener to flip the card when it is clicked.
  }
  // Method to flip the card
  // This function: flips a card, displays its value, and adds it to the list of flipped cards. If there are two flipped cards, check for a match.
  flip() {
    if (
      this.game.flippedCards.length < 2 &&
      !this.element.classList.contains("flipped") &&
      !this.element.classList.contains("matched")
    ) {
      this.element.classList.add("flipped");
      this.element.innerText = this.value;
      this.game.flippedCards.push(this);

      if (this.game.flippedCards.length === 2) {
        this.game.checkMatch();
      }
    }
  }
  // Unflip the card
  unflip() {
    this.element.classList.remove("flipped");
    this.element.innerText = "";
  }
  // Mark the card as matched
  match() {
    this.element.classList.add("matched");
  }
}
