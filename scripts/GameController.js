// Game controller class
class GameController {
  constructor(startButtonId, boardElementId, endScreenId, restartButtonId) {
    //-This constructor: gets DOM elements by their IDs and stores them in class properties.
    this.startButton = document.getElementById(startButtonId);
    this.gameBoardElement = document.getElementById(boardElementId);
    this.endScreen = document.getElementById(endScreenId);
    this.restartButton = document.getElementById(restartButtonId);
    //-This constructor: adds click events to the start and restart buttons,to call the startGame and restartGame functions when they are clicked.
    this.startButton.addEventListener("click", () => this.startGame());
    this.restartButton.addEventListener("click", () => this.restartGame());
    //-This constructor: Initially, it hides the game board and the end screen.
    this.gameBoardElement.style.display = "none";
    this.endScreen.style.display = "none";
  }

  // Method to start the game
  //-This function: checks if the memory game already exists. If not, it creates and initializes it.
  //-This function: hides the start button, shows the game board, and hides the end screen.
  startGame() {
    if (!this.memoryGame) {
      this.memoryGame = new MemoryGame(this.gameBoardElement.id, this);
      this.memoryGame.initializeGame();
    }

    this.startButton.style.display = "none";
    this.gameBoardElement.style.display = "grid";
    this.endScreen.style.display = "none";
  }
  // Method to show the end screen
  //-This function: hides the game board and shows the end screen.
  showEndScreen() {
    this.gameBoardElement.style.display = "none";
    this.endScreen.style.display = "block";
  }
  // Method to restart the game
  //-This function: resets the memory game, shows the start button, and hides the game board and the end screen.
  restartGame() {
    this.memoryGame = null;
    this.startButton.style.display = "block";
    this.gameBoardElement.style.display = "none";
    this.endScreen.style.display = "none";
  }
}
