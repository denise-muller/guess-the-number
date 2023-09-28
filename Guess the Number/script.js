"use strict";

document.querySelector(".guess").value = "";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//Show secret number
//document.querySelector(".number").textContent = secretNumber;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (score > 1) {
    //Invalid guess
    if (guess <= 0 || guess > 20) {
      displayMessage("Invalid number!");
      //Player wins
    } else if (guess === secretNumber) {
      displayMessage("You Win!");

      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".message").style.color = "#60b347";

      if (score > highScore) {
        highScore = score;
        document.querySelector(".highScore").textContent = highScore;
      }
      //Wrong guess
    } else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? "Lower!" : "Higher!");
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    displayMessage("Game Over!");
    document.querySelector(".message").style.color = "#df4242";
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".guess").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    document.querySelector(".check").click();
  }
});

//Play again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").style.color = "#eee";
  displayMessage("Start guessing...");
});
