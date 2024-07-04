//-This code waits until the web page is fully loaded and then initializes the game controller (GameController) with the specific elements of the page
window.onload = function () {
  new GameController(
    "startGameButton",
    "gameBoard",
    "endScreen",
    "restartGameButton"
  );
};
