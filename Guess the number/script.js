"use strict";

let correctNumber = Math.trunc(Math.random() * 20) + 1;
console.log(correctNumber);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

document.querySelector(".check").addEventListener("click", function () {
  let guessedNumber = Number(document.querySelector(".guess").value);
  if (!guessedNumber) {
    displayMessage("NO number entered ❌");
  } else if (guessedNumber === correctNumber) {
    displayMessage("Correct Answer 😀");
    displayNumber(guessedNumber);
    highScore = Math.max(highScore, score);
    document.querySelector(".highscore").textContent = highScore;
    document.querySelector(".score").textContent = 20;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (guessedNumber !== correctNumber) {
    if (score > 1) {
      displayMessage(guessedNumber < correctNumber ? "Too Low" : "Too high");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  correctNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayNumber("?");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing....");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
