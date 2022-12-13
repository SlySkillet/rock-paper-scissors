const getComputerChoice = function(){
    computerChoice = Math.floor(Math.random()*3);
    return computerChoice;
}

const playRound = function(playerChoice, computerChoice){
    playerChoice = prompt ('Rock, Paper or Scissors?');
    playerChoice = playerChoice.toUpperCase();
}

playRound();
