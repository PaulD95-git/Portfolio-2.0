/* jshint esversion: 6 */

// Array of possible choices for the game
const choice = ["rock", "paper", "scissors", "lizard", "spock"];

// DOM elements for displaying player, computer choices, and results
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

// Initial scores for player and computer
let playerScore = 0;
let computerScore = 0;

/**
 * Main function to handle gameplay logic
 */
function playGame(playerChoice) {
    // Randomly select a choice for the computer
    const computerChoice = choice[Math.floor(Math.random() * 5)];
    let result = "";

    // Determine the result of the game (win, lose, or tie)
    if (playerChoice === computerChoice) {
        result = "ITS A TIE!";
    } else {
        // Determine outcome based on player and computer choices
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

    // Update the DOM elements with player and computer choices, and the result
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    // Remove previous result styling (green/red text)
    resultDisplay.classList.remove("greenText", "redText");

    // Update score and styling based on the result of the game
    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");  // Add green color for a win
            playerScore++;
            playerScoreDisplay.textContent = playerScore; // Update player score
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");  // Add red color for a loss
            computerScore++;
            computerScoreDisplay.textContent = computerScore; // Update computer score
            break;
    }
}