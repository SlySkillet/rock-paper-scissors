'use strict';

const btnNew = document.querySelector('.btn--new');
const btnRock = document.querySelector('.btn--0');
const btnPaper = document.querySelector('.btn--1');
const btnScissors = document.querySelector('.btn--2');
const mainBody = document.querySelector('.main');
let roundResult = document.querySelector('.result');
let playerThrow = document.querySelector('.throw--0');
let computerThrow = document.querySelector('.throw--1');
let playerScore = document.getElementById('score--0');
let computerScore = document.getElementById('score--1');

let computerChoice, playerChoice;
let scores = [0, 0];

//computer choice
const getComputerChoice = function () {
  computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerChoice = 'ROCK';
    computerThrow.textContent = '🗿';
    return computerChoice;
  } else if (computerChoice === 1) {
    computerChoice = 'PAPER';
    computerThrow.textContent = '📃';
    return computerChoice;
  } else {
    computerChoice = 'SCISSORS';
    computerThrow.textContent = '✄';
    return computerChoice;
  }
};

// initialize function
const init = function () {
  scores = [0, 0];
  mainBody.classList.remove('win');
  mainBody.classList.remove('lose');
  playerThrow.textContent = '';
  computerThrow.textContent = '';
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  roundResult.textContent = '::RPS::';
};

//button functionality
btnRock.addEventListener('click', function () {
  playerChoice = 'ROCK';
  playerThrow.textContent = '🗿';
  playRoundNew();
});
btnPaper.addEventListener('click', function () {
  playerChoice = 'PAPER';
  playerThrow.textContent = '📃';
  playRoundNew();
});
btnScissors.addEventListener('click', function () {
  playerChoice = 'SCISSORS';
  playerThrow.textContent = '✄';
  playRoundNew();
});

btnNew.addEventListener('click', init);

//play round
const playRoundNew = function () {
  computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    roundResult.textContent = '~~DRAW~~';
  } else if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') {
    roundResult.textContent = 'ROCK SMASHES SCISSORS - YOU WIN!';
    scores[0] += 1;
    playerScore.textContent = scores[0];
  } else if (playerChoice === 'PAPER' && computerChoice === 'ROCK') {
    roundResult.textContent = 'PAPER COVERS ROCK - YOU WIN!';
    scores[0] += 1;
    playerScore.textContent = scores[0];
  } else if (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') {
    roundResult.textContent = 'SCISSORS CUT PAPER - YOU WIN!';
    scores[0] += 1;
    playerScore.textContent = scores[0];
  } else if (playerChoice === 'ROCK' && computerChoice === 'PAPER') {
    roundResult.textContent = 'PAPER COVERS ROCK - YOU LOSE!';
    scores[1] += 1;
    computerScore.textContent = scores[1];
  } else if (playerChoice === 'PAPER' && computerChoice === 'SCISSORS') {
    roundResult.textContent = 'SCISSORS CUT PAPER - YOU LOSE!';
    scores[1] += 1;
    computerScore.textContent = scores[1];
  } else if (playerChoice === 'SCISSORS' && computerChoice === 'ROCK') {
    roundResult.textContent = 'ROCK SMASHES SCISSORS - YOU LOSE';
    scores[1] += 1;
    computerScore.textContent = scores[1];
  }
  if (scores[0] === 3) {
    mainBody.classList.add('win');
  } else if (scores[1] === 3) {
    mainBody.classList.add('lose');
  }
};
