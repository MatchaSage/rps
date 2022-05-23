const availableChoice = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let gameTie = 0;

function computerPlay() {
    let cpuTurn = availableChoice[Math.floor(Math.random()*availableChoice.length)];
    return cpuTurn;
}


// function checkPlayerchoice(playerSelection){
//     if (!availableChoice.includes(playerSelection)) {
//         alert("Please only choose: Rock, Paper or Scissors!")
//         game();
//     }

//     else {
//         //pass
//     }
// }

function playGame(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        gameTie += 1;
        return `Its a tie!`;
    }

    else if (playerSelection == 'rock' && computerSelection != 'paper'){
        playerScore += 1;
        return `You win! Rock beats ${computerSelection}!`;
    }

    else if (playerSelection == 'paper' && computerSelection != 'scissors') {
        playerScore += 1;
        return `You win! Paper beats ${computerSelection}!`;
    }

    else if (playerSelection == 'scissors' && computerSelection != 'rock') {
        playerScore += 1;
        return `You win! Scissors beats ${computerSelection}!`;
    }

    else {
        computerScore += 1;
        return `You lose! ${playerSelection} loses to ${computerSelection}!`;
    }
}

// function game(){
//     // for (let i = 0; i < 5; i++){
//         // let playerSelection = window.prompt("Choose: Rock, Paper, Scissors").toLowerCase();
//         let computerSelection = computerPlay();
//         // checkPlayerchoice(playerSelection)
//         // console.log(playGame(playerSelection, computerSelection));
//     // }

//     alert(`Final Score \n Player: ${playerScore} \n Computer: ${computerScore}\n Ties: ${gameTie}`)
// }



const userScore = document.querySelector('.player-score');
const compScore = document.querySelector('.computer-score');
const ties = document.querySelector('.ties');
const result = document.querySelector('div');
const btn = document.querySelectorAll('.btn');
const winner = document.querySelector('.winner');

btn.forEach(btn => {
    btn.addEventListener('click', () => {
        
        
        if (btn.className.includes('rock')) {
            let computerSelection = computerPlay();
            result.textContent = playGame('rock', computerSelection);
        }

        else if (btn.className.includes('paper')) {
            let computerSelection = computerPlay();
            result.textContent = playGame('paper', computerSelection);
        }

        else if (btn.className.includes('scissors')) {
            let computerSelection = computerPlay();
            result.textContent = playGame('scissors', computerSelection);
        }
        
        if (playerScore <= 5 && computerScore <= 5){
            userScore.textContent = `Player Score: ${playerScore}`;
            compScore.textContent = `Computer Score: ${computerScore}`;
            ties.textContent = `Ties: ${gameTie}`;

            if (playerScore == 5) {
                winner.textContent = 'PLAYER WINS';
            }

            else if (computerScore == 5) {
                winner.textContent = 'COMPUTER WINS';
            }
        }
        
        
    
    });
    


});