"use strict";

let player = 0;
let nacplayer = -1;
let totalScoreOfPlayer0 = 0;
let totalScoreOfPlayer1 = 0;
let currScoreOfPlayer0 = 0;
let currScoreOfPlayer1 = 0;

const toggleActivePlayer = function (active, notactive) {
  document.querySelector(`.player--${active}`).classList.add("player--active");
  document
    .querySelector(`.player--${notactive}`)
    .classList.remove("player--active");
};

const reset = function () {
  player = 1;
  nacplayer = 0;
  toggleActivePlayer(player, nacplayer);
  currScoreOfPlayer0 = 0;
  currScoreOfPlayer1 = 0;
  totalScoreOfPlayer0 = 0;
  totalScoreOfPlayer1 = 0;

  const tscores = document.querySelectorAll(".score");

  const currScores = document.querySelectorAll(".current-score");

  for (let i = 0; i < tscores.length; i++) {
    tscores[i].textContent = 0;
    currScores[i].textContent = 0;
  }
};

document.querySelector(".btn--roll").addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  document.querySelector("img").src = `dice-${dice}.png`;
  if (dice === 1) {
    document.querySelector(`#current--${player}`).textContent = 0;
    player === 0 ? (currScoreOfPlayer0 = 0) : (currScoreOfPlayer1 = 0);
    player = player === 0 ? 1 : 0;
    nacplayer = player === 0 ? 1 : 0;

    toggleActivePlayer(player, nacplayer);
  } else {
    player === 0 ? (currScoreOfPlayer0 += dice) : (currScoreOfPlayer1 += dice);
    if (player === 0) {
      document.querySelector("#current--0").textContent = currScoreOfPlayer0;
    } else {
      document.querySelector("#current--1").textContent = currScoreOfPlayer1;
    }
  }
});

document.querySelector(".btn--new").addEventListener("click", reset);

document.querySelector(".btn--hold").addEventListener("click", function () {
  if (player === 0) {
    totalScoreOfPlayer0 += currScoreOfPlayer0;
    currScoreOfPlayer0 = 0;
    document.querySelector("#score--0").textContent = totalScoreOfPlayer0;
    document.querySelector("#current--0").textContent = 0;

    if (totalScoreOfPlayer0 >= 100) {
      document.querySelector(".player--0").classList.add("player--winner");
      reset();
    } else {
      player = 1;
      toggleActivePlayer(1, 0);
    }
  } else if (player === 1) {
    totalScoreOfPlayer1 += currScoreOfPlayer1;
    currScoreOfPlayer1 = 0;
    document.querySelector("#score--1").textContent = totalScoreOfPlayer1;
    document.querySelector("#current--1").textContent = 0;
    if (totalScoreOfPlayer1 >= 100) {
      document.querySelector(".player--1").classList.add("player--winner");
      console.log("player 1 won");
      reset();
    } else {
      player = 0;
      toggleActivePlayer(0, 1);
    }
  }
});
