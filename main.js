//Function that make the computer choice with Math.random
function getRandomInt(a){
    return Math.floor(Math.random() * a);
}

function getComputerChoice(){
    let choice = getRandomInt(3);
    if (choice === 0){
        return "Rock";
    }else if (choice === 1){
        return "Paper";
    }else if (choice === 2){
        return "Scissors";
    }
}

//Function to make the human choice
function getHumanChoice(){
    let choice = parseInt(prompt("Choose your option:\n 1. Rock\n 2. Paper\n 3. Scissors"));
    if (choice === 1){
        return "Rock";
    }else if (choice === 2){
        return "Paper";
    }else if (choice === 3){
        return "Scissors";
    }
}

console.log(getHumanChoice())