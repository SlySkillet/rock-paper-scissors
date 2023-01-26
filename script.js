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

btnNew.addEventListener('click', init);

// getComputerChoice();

// // let playerChoice;

// const getPlayerChoice = function () {
//   playerChoice = prompt('Rock, Paper or Scissors?');
//   playerChoice = playerChoice.toUpperCase();
//   return playerChoice;
// };

// getPlayerChoice();

// const playRound = function (playerChoice, computerChoice) {
//   playerChoice = getPlayerChoice();
//   console.log(playerChoice);
//   computerChoice = getComputerChoice();
//   console.log(computerChoice);
//   if (
//     playerChoice !== 'ROCK' &&
//     playerChoice !== 'PAPER' &&
//     playerChoice !== 'SCISSORS'
//   ) {
//     alert('Check spelling!');
//     playRound();
//   } else if (playerChoice === 'ROCK' && computerChoice === 'PAPER') {
//     result = 'Lose';
//     console.log('You lose! Paper covers Rock!');
//     return result;
//   } else if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') {
//     result = 'Win';
//     console.log('You win! Rock smashes Scissors!');
//     return result;
//   } else if (playerChoice === 'PAPER' && computerChoice === 'ROCK') {
//     result = 'Win';
//     console.log('You win! Paper covers Rock!');
//     return result;
//   } else if (playerChoice === 'PAPER' && computerChoice === 'SCISSORS') {
//     result = 'Lose';
//     console.log('You lose! Scissors cut paper!');
//     return result; // win/lose outcomes for Paper
//   } else if (playerChoice === 'SCISSORS' && computerChoice === 'ROCK') {
//     result = 'Lose';
//     console.log('You lose! Rock smashes Scissors!');
//     return result;
//   } else if (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') {
//     result = 'Win';
//     console.log('You win! Scissors cut paper!');
//     return result; //win/lose outcomes for Scissors
//   } else {
//     alert('Draw!');
//     playRound();
//   } //draw outcome
// };

// playRound();

// // GAME OF 5//
// let playerWin = 0;
// let computerWin = 0;
// const game = function () {
//   for (let i = 0; i < 5; i++) {
//     playRound();
//     if (result === 'Win') {
//       playerWin += 1;
//     } else {
//       computerWin += 1;
//     }
//     console.log(
//       `ROUND-${i + 1} SCORE: Player ${playerWin} Computer ${computerWin}`
//     );
//     if (playerWin === 3) {
//       console.log(`You win! ${playerWin} to ${computerWin}!`);
//       break;
//     } else if (computerWin === 3) {
//       console.log(`You lose! ${computerWin} to ${playerWin}`);
//       break;
//     }
//   }
// };

// game();
