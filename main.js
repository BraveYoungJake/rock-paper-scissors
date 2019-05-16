let gameChoices = ["rock","paper","scissors"];
let computerChoice = null;


function computerPlay() {
    let computerChoice = gameChoices[Math.floor(Math.random()*gameChoices.length)];
    return computerChoice;
}

document.getElementById("rock").addEventListener("click", function(){
    playRound("rock", computerPlay())
  }); 
document.getElementById("paper").addEventListener("click", function(){
    playRound("paper", computerPlay())
  }); 
document.getElementById("scissors").addEventListener("click", function(){
    playRound("scissors", computerPlay())
  }); 

function playRound(playerSelection, computerSelection){
    playerSelection= playerSelection.toLowerCase();
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        window.alert("You didn't pick a valid choice. Try again.")
    }
    if (playerSelection === computerSelection) {
        document.getElementById("results").innerHTML ="Draw! You both picked the same.";
    } else {
        if (playerSelection == "rock") {
            switch (computerSelection) {
                case "paper":
                ///stats.loses++;
                document.getElementById("results").innerHTML = "You lose! Paper beats rock";
                break;
                case "scissors":
                ///stats.wins++;
                document.getElementById("results").innerHTML ="You win! Rock beats scissors.";
                break;
            } 
        } else if (playerSelection == "paper") {
            switch (computerSelection) {
                case "rock": 
                ///stats.wins++;
                document.getElementById("results").innerHTML ="You win! Paper beats rock.";
                break;
                case "scissors":
               /// stats.loses++;
               document.getElementById("results").innerHTML ="You lose! Scissors beats paper.";
                break;
            }
        } else if (playerSelection == "scissors") {
            switch (computerSelection) {
                case "rock":
                ///stats.loses++;
                document.getElementById("results").innerHTML ="You lose! Rock beats scissors.";
                break;
                case "paper":
                ///stats.wins++;
                document.getElementById("results").innerHTML ="You win! Scissors beats paper.";
                break;
            }
        }
    }
}

function buttonSelect(e) {
    

}
