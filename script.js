const getComputerChoice = function(){
    computerChoice = Math.floor(Math.random()*3);
    return computerChoice;
}

const getPlayerChoice = function() {
    playerChoice = prompt ('Rock, Paper or Scissors?');
    playerChoice = playerChoice.toUpperCase();
    if (playerChoice === 'ROCK') {
        playerChoice = 0 ;
        return playerChoice;
    } else if (playerChoice === 'PAPER'){
        playerChoice = 1 ;
        return playerChoice;
    } else if (playerChoice === 'SCISSORS') {
        playerChoice = 2 ;
        return playerChoice;
    } else {getPlayerChoice();};
}

const playRound = function(playerChoice, computerChoice){
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    console.log(playerChoice);
}

playRound();


// getPlayerChoice();
// console.log(playerChoice);





