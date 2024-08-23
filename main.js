//Function that make the computer choice with Math.random
function getRandomInt(a){
    return Math.floor(Math.random() * a);
}

function getComputerChoice(){
    let choice = getRandomInt(3);
    if (choice === 0){
        return "rock";
    }else if (choice === 1){
        return "paper";
    }else if (choice === 2){
        return "scissors";
    }
}


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resultDiv = document.querySelector('#result');
const finalResult = document.querySelector('#finalResult');


rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})

scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})

let humanScore = 0;
let computerScore = 0;

function updateScore() {
    const scoreDiv = document.querySelector('#score');
    scoreDiv.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
}

function disableButtons(){
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function announceWinner(){
    if (humanScore == 5){
        finalResult.textContent = `¡You win! The final score is Player: ${humanScore} - Computer ${computerScore}`;
        disableButtons();
        resultDiv.remove();
    }else if(computerScore == 5){
        finalResult.textContent = `¡You loose! The final score is Player: ${humanScore} - Computer ${computerScore}`;
        disableButtons();
        resultDiv.remove();
    }
}


function playRound(humanChoice, computerChoice){

    if (humanChoice == "rock" && computerChoice == "scissors"){
        resultDiv.textContent = "You win! Rock beats Scissors.";
        humanScore = humanScore + 1;
    }else if (humanChoice == "rock" && computerChoice == "paper"){
        resultDiv.textContent = "You lose! Paper beats Rock.";
        computerScore = computerScore + 1;
    }else if (humanChoice == "paper" && computerChoice == "rock"){
        resultDiv.textContent = "You win! Paper beats Rock.";
        humanScore = humanScore + 1;
    }else if (humanChoice == "paper" && computerChoice == "scissors"){
        resultDiv.textContent = "You lose! Scissors beats Paper.";
        computerScore = computerScore + 1;
    }else if (humanChoice == "scissors" && computerChoice == "paper"){
        resultDiv.textContent = "You win! Scissors beats Paper.";
        humanScore = humanScore + 1;
    }else if (humanChoice == "scissors" && computerChoice == "rock"){
        resultDiv.textContent = "You lose! Rock beats Scissors.";
        computerScore = computerScore + 1;
    }else if (humanChoice == computerChoice){
        resultDiv.textContent = "It's a tie!";
    }

    announceWinner();
    updateScore();
}



