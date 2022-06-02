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