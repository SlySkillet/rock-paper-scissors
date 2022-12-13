const getComputerChoice = function(){
    computerChoice = Math.floor(Math.random()*3);
    return computerChoice;
}

const getPlayerChoice = function() {
    playerChoice = prompt ('Rock, Paper or Scissors?');
    playerChoice = playerChoice.toUpperCase();
    if (playerChoice === 'ROCK') {
        playerChoice = 0 ;
    } else if (playerChoice === 'PAPER'){
        playerChoice = 1 ;
    } else if (playerChoice === 'SCISSORS') {
        playerChoice = 2 ;
    } else {getPlayerChoice();};
}

getPlayerChoice();
console.log(playerChoice);



// const playRound = function(playerChoice, computerChoice){
//     playerChoice = prompt ('Rock, Paper or Scissors?');
//     playerChoice = playerChoice.toUpperCase();
//     if (playerChoice === 'ROCK') {
//         playerChoice = 0 ;
//     } else if (playerChoice === 'PAPER'){
//         playerChoice = 1 ;
//     } else if (playerChoice === 'SCISSORS') {
//         playerChoice = 2 ;
//     } else {playRound();};
//     console.log(playerChoice);
// }

