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

// getPlayerChoice()
// console.log(playerChoice);

const playRound = function(playerChoice, computerChoice){
    playerChoice = getPlayerChoice();
    console.log(playerChoice);
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    if (playerChoice === 0 && computerChoice === 1) {
        result = 'Computer wins! Paper covers Rock!' ;
        return result
    } else if (playerChoice === 0 && computerChoice === 2){
        result = 'You win! Rock smashes Scissors!' ;
        return result;
    } else if (playerChoice === 1 && computerChoice === 0){
        result = 'You win! Paper covers Rock!' ;
        return result;
    }  else if (playerChoice === 1 && computerChoice === 2){
        result = 'You lose! Scissors cut Paper!' ; 
        return result;// win/lose outcomes for Paper
    } else if (playerChoice === 2 && computerChoice === 0){
        result = 'You lose! Rock smashes Scissors!' ;
        return result;
    } else if (playerChoice === 2 && computerChoice === 1){
        result = 'You win! Scissors cut paper!' ;
        return result ; //win/lose outcomes for Scissors
    } else {
        alert ('Draw!') ;
        playRound() ;
    } //draw outcome   
    console.log(result);
}


playRound();








