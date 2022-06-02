function computerPlay(){
    let random = Math.random();
    if (random < 0.34){
        return "Rock";
    }
    else if (random > 0.66){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) return "You both won! Yay!";
    else if(playerSelection.toLowerCase() === "rock" && "Paper" === computerSelection) return "Paper beats Rock. Computer won!";
    else if(playerSelection.toLowerCase() === "rock" && "Scissors" === computerSelection) return "Rock beats Scissors. Player won!";
    else if(playerSelection.toLowerCase() === "scissors" && "Paper" === computerSelection) return "Scissors beats Paper. Player won!";
    else if(playerSelection.toLowerCase() === "scissors" && "Rock" === computerSelection) return "Rock beats Scissors. Computer won!";
    else if(playerSelection.toLowerCase() === "paper" && "Rock" === computerSelection) return "Paper beats rock. Player won!";
    else if(playerSelection.toLowerCase() === "paper" && "Scissors" === computerSelection) return "Scissors beats Paper. Computer won!";
    else return "Uh, oh. Something went wrong!";
}

console.log(playRound("Rock", computerPlay()));