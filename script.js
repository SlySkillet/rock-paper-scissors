const getComputerChoice = function(){
    computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) {
        computerChoice = 'ROCK' ;
        return computerChoice;
    } else if (computerChoice === 1) {
        computerChoice = 'PAPER'
        return computerChoice;
    } else {computerChoice = 'SCISSORS'
        return computerChoice;
    }
}

const getPlayerChoice = function() {
    playerChoice = prompt ('Rock, Paper or Scissors?');
    playerChoice = playerChoice.toUpperCase();
    return playerChoice;
}

// 


const playRound = function(playerChoice, computerChoice){
    playerChoice = getPlayerChoice();
    console.log(playerChoice);
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    if (playerChoice === 'ROCK' && computerChoice === 'PAPER') {
        result = 'Lose' ;
        console.log('You lose! Paper covers Rock!');
        return result
    } else if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS'){
        result = 'Win' ;
        console.log('You win! Rock smashes Scissors!');
        return result;
    } else if (playerChoice === 'PAPER' && computerChoice === 'ROCK'){
        result = 'Win' ;
        console.log('You win! Paper covers Rock!');
        return result;
    }  else if (playerChoice === 'PAPER' && computerChoice === 'SCISSORS'){
        result = 'Lose' ; 
        console.log('You lose! Scissors cut paper!');
        return result;// win/lose outcomes for Paper
    } else if (playerChoice === 'SCISSORS' && computerChoice === 'ROCK'){
        result = 'Lose' ;
        console.log('You lose! Rock smashes Scissors!');
        return result;
    } else if (playerChoice === 'SCISSORS' && computerChoice === 'PAPER'){
        result = 'Win' ;
        console.log('You win! Scissors cut paper!');
        return result ; //win/lose outcomes for Scissors
    } else {
        alert ('Draw!') ;
        playRound() ;
    } //draw outcome   
   
}

// //GAME OF 5//
// let playerWin = 0
// let computerWin = 0
// const game = function() {
//     for (let i = 0 ; i < 5 ; i ++) {
//         playRound() ;
//         if (result === 'Win') {
//             playerWin += 1 ;
//         } else {computerWin += 1}
//         console.log(playerWin, computerWin);
//         if (playerWin === 3) {
//             console.log (`You win! ${playerWin} to ${computerWin}!`);
//             break;
//         } else if (computerWin === 3) {
//             console.log (`You lose! ${computerWin} to ${playerWin}`);
//             break;
//         }
//     }
// }


// game()

//ORIGINAL GETPLAYERCHOICE FUNCTION//

// const getPlayerChoice = function() {
//     playerChoice = prompt ('Rock, Paper or Scissors?');
//     playerChoice = playerChoice.toUpperCase();
//     if (playerChoice === 'ROCK') {
//         playerChoice = 0 ;
//         return playerChoice;
//     } else if (playerChoice === 'PAPER'){
//         playerChoice = 1 ;
//         return playerChoice;
//     } else if (playerChoice === 'SCISSORS') {
//         playerChoice = 2 ;
//         return playerChoice;
//     } else {getPlayerChoice();};
// }

//ORIGINAL PLAYROUND FUNCTION//

// const playRound = function(playerChoice, computerChoice){
//     playerChoice = getPlayerChoice();
//     console.log(playerChoice);
//     computerChoice = getComputerChoice();
//     console.log(computerChoice);
//     if (playerChoice === 0 && computerChoice === 1) {
//         result = 'Computer wins! Paper covers Rock!' ;
//         return result
//     } else if (playerChoice === 0 && computerChoice === 2){
//         result = 'You win! Rock smashes Scissors!' ;
//         return result;
//     } else if (playerChoice === 1 && computerChoice === 0){
//         result = 'You win! Paper covers Rock!' ;
//         return result;
//     }  else if (playerChoice === 1 && computerChoice === 2){
//         result = 'You lose! Scissors cut Paper!' ; 
//         return result;// win/lose outcomes for Paper
//     } else if (playerChoice === 2 && computerChoice === 0){
//         result = 'You lose! Rock smashes Scissors!' ;
//         return result;
//     } else if (playerChoice === 2 && computerChoice === 1){
//         result = 'You win! Scissors cut paper!' ;
//         return result ; //win/lose outcomes for Scissors
//     } else {
//         alert ('Draw!') ;
//         playRound() ;
//     } //draw outcome   
//     console.log(result);
// }