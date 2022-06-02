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

function game(){
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;
    for(let i= 0;i<5;i++){
        let result = playRound(prompt("Choose Rock, Paper or Scissors:",computerPlay));
        console.log(result);
        switch(result){
            case "You both won! Yay!":
                draws++;
            case "Paper beats Rock. Computer won!":
                computerWins++;
            case "Rock beats Scissors. Player won!":
                playerWins++;
            case "Scissors beats Paper. Player won!":
                playerWins++;
            case "Rock beats Scissors. Computer won!":
                computerWins++;
            case "Paper beats rock. Player won!":
                computerWins++; 
            case "Scissors beats Paper. Player won!":
                playerWins++;   
            default:
                console.log("Whoopsie in switch!");
        }
    }
    if(playerWins === computerWins) return "It's a draw!";
    return playerWins > computerWins ? `You won ${playerWins} times and are the overall winner!` :
                                        `The Computer won ${computerWins} times and is the overall winner!`;
}

console.log(game());