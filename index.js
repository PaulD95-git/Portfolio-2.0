/* jshint esversion: 6 */

const choice = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choice[Math.floor(Math.random() * 5)];
    let result = "";
    if (playerChoice === computerChoice) {
        result = "ITS A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                if (computerChoice === "paper" || computerChoice === "spock") {
                    result = "YOU LOSE!";
                } else {
                    result = "YOU WIN!";
                }
                break;
            case "paper":
                if (computerChoice === "scissors" || computerChoice === "lizard") {
                    result = "YOU LOSE!";
                } else {
                    result = "YOU WIN!";
                }
                break;
            case "scissors":
                if (computerChoice === "rock" || computerChoice === "spock") {
                    result = "YOU LOSE!";
                } else {
                    result = "YOU WIN!";
                }
                break;
            case "lizard":
                if (computerChoice === "rock" || computerChoice === "scissors") {
                    result = "YOU LOSE!";
                } else {
                    result = "YOU WIN!";
                }
                break;
            case "spock":
                if (computerChoice === "paper" || computerChoice === "lizard") {
                    result = "YOU LOSE!";
                } else {
                    result = "YOU WIN!";
                }
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}