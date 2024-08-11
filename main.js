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

//Function to make the human choice case insensitive
function getHumanChoice(){
    let choice = prompt("Choose your option:").toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        return 'Invalid option, please choose "Rock", "Paper" or "Scissors"'; 
    }else
    return choice;
}

//Function to play five rounds

function playGame(a){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if (humanChoice === "Invalid option, please choose \"Rock\", \"Paper\" or \"Scissors\"") {
            console.log(humanChoice); 
            return; 
        }

        if (humanChoice == "rock" && computerChoice == "scissors"){
            console.log("You win! Rock beats Scissors.");
            humanScore = humanScore + 1;
        }else if (humanChoice == "rock" && computerChoice == "paper"){
            console.log("You lose! Paper beats Rock.");
            computerScore = computerScore + 1;
        }else if (humanChoice == "paper" && computerChoice == "rock"){
            console.log("You win! Paper beats Rock.");
            humanScore = humanScore + 1;
        }else if (humanChoice == "paper" && computerChoice == "scissors"){
            console.log("You lose! Scissors beats Paper.");
            computerScore = computerScore + 1;
        }else if (humanChoice == "scissors" && computerChoice == "paper"){
            console.log("You win! Scissors beats Paper.");
            humanScore = humanScore + 1;
        }else if (humanChoice == "scissors" && computerChoice == "rock"){
            console.log("You lose! Rock beats Scissors.");
            computerScore = computerScore + 1;
        }else if (humanChoice == computerChoice){
            console.log("It's a tie!");
        }    
    }  

    for (i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection); 
        console.log("The score is:\n Computer: " + computerScore + "\n Player: " + humanScore);
    }
    return console.log("The final score is:\n Computer: " + computerScore + "\n Player: " + humanScore);
}

playGame();
