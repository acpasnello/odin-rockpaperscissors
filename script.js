function playRound(playerSelection, computerSelection) {
    // Paper beats Rock, Rock beats Scissors, Scissors beat Paper
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let result;
    if (playerSelection == computerSelection) {
        result = "Draw! Go again."
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        result = "You win! Paper beats Rock"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        result = "You win! Rock beats Scissors"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        result = "You win! Scissors beat Paper"
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        result = "You lose! Paper beats Rock"
    }
    else if (computerSelection == "rock" && playerSelection == "scissors") {
        result = "You lose! Rock beats Scissors"
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        result = "You lose! Scissors beat Paper"
    }
    else {
        result = "Undetermined!"
    }
    return result;
}

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    let computerChoice = choices[Math.floor(Math.random() * 3)]
    console.log("Computer chooses " + computerChoice)
    return computerChoice;
}

function checkPlayerChoice(choice) {
    choice = choice.toLowerCase()
    if (choice == "rock" || choice == "paper" || choice == "scissors" || choice == "scissor") {
        return true;
    } else {
        return false;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("What's your play? Rock, Paper, or Scissors?");
        if (checkPlayerChoice(playerChoice)) {
            let computerChoice = getComputerChoice();
            let result = playRound(playerChoice, computerChoice);
            console.log(result);
        } else {
            alert("Please choose either Rock, Paper, or Scissors.")
            i--;
        }
    }
}

game()
// const player = "rock";
// const comp = getComputerChoice();
// console.log(playRound(player, comp));