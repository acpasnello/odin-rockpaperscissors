let buttons = document.querySelectorAll('.choice');
let results = document.querySelector('.results');
let playerScore = 0;
let computerScore = 0;

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
        playerScore++;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        result = "You win! Rock beats Scissors";
        playerScore++;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        result = "You win! Scissors beat Paper";
        playerScore++;
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        result = "You lose! Paper beats Rock";
        computerScore++;
    }
    else if (computerSelection == "rock" && playerSelection == "scissors") {
        result = "You lose! Rock beats Scissors";
        computerScore++;
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        result = "You lose! Scissors beat Paper";
        computerScore++;
    }
    else {
        result = "Undetermined!"
    }
    displayResults(result)
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
function initiateRound(e) {
    console.log("Your slection: " + e.target.textContent)
    playRound(e.target.textContent, getComputerChoice())
}

function displayResults(result) {
    let heading = document.createElement('h1');
    heading.textContent = "Results:"
    results.innerHTML = "";
    results.appendChild(heading)
    if (playerScore == 5) {
        let winner = document.createElement('h2')
        winner.textContent = "WINNER! You've won 5 rounds!"
        results.append(winner)
    } else if (computerScore == 5) {
        let loser = document.createElement('h2')
        loser.textContent = "LOSER! You let the computer win 5 rounds!"
        results.append(loser)
    }
    let resultPhrase = document.createElement('p');
    resultPhrase.textContent = result;
    let scores = document.createElement("p");
    scores.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    results.append(resultPhrase, scores);
}
buttons.forEach(button => button.addEventListener('click', initiateRound))
// playRound(e.target.textContent, getComputerChoice)))
