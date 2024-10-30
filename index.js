const choice = ["rock", "paper", "scissors","lizard","spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("houseDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

function playGame(playerChoice){
    const houseChoice = choice[Math.floor(Math.random() * 5)];
    let result = "";
    if(playerChoice === houseChoice){
        result = "ITS A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                if (houseChoice === "paper" || houseChoice === "spock"){
                    result = "YOU LOSE!" 
                } else {
                    result = "YOU WIN!"
                }
                break;
            case "paper":
                if (houseChoice === "scissors" || houseChoice === "lizard"){
                    result = "YOU LOSE!" 
                } else {
                    result = "YOU WIN!"
                }
                    break;