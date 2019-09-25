document.getElementById('container');
container.style.textAlign = "center";

const titleDiv = document.createElement('div');
const resultsDiv = document.createElement('div');
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const roundResults = document.createElement('p');
const scoreBoard = document.createElement('div');
const score = document.createElement('p');
const gameButton = document.createElement('button');
const resultTracker = document.createElement('div');
const resultList = document.createElement('h5');

container.appendChild(titleDiv);
container.appendChild(resultsDiv);

rockButton.id = 'rock';
rockButton.innerText = 'ROCK';
rockButton.style.margin = "15px";
rockButton.style.height = "35px";
rockButton.style.width = "100px";

paperButton.id = 'paper';
paperButton.innerText = 'PAPER';
paperButton.style.margin = "15px";
paperButton.style.height = "35px";
paperButton.style.width = "100px";

scissorsButton.id = 'scissors';
scissorsButton.innerText = 'SCISSORS';
scissorsButton.style.margin = "15px";
scissorsButton.style.height = "35px";
scissorsButton.style.width = "100px";

titleDiv.innerHTML = '<h2 id="title">I want to play a game!</h2>';
titleDiv.appendChild(rockButton);
titleDiv.appendChild(paperButton);
titleDiv.appendChild(scissorsButton);

resultsDiv.innerHTML = '<h3 id="results">Round Results:</h3>';
resultsDiv.appendChild(roundResults);

scoreBoard.innerText = 'SCORE:';
container.appendChild(scoreBoard);

score.innerText = 'Computer: 0 \nPlayer: 0';
container.appendChild(score);

gameButton.id = 'newGame';
gameButton.innerText = 'NEW GAME';
container.appendChild(gameButton);
gameButton.style.margin = "10px";

resultList.innerText = "";
container.appendChild(resultTracker);
container.appendChild(resultList);
resultTracker.innerText = 'Game Log:'

//Functions
function computerPlay() {
    let compOptions = ['ROCK', 'PAPER', 'SCISSORS'];
    let compSelect = compOptions[Math.floor(Math.random() * compOptions.length)];
    return compSelect;
}

let btnR = document.getElementById("rock");
btnR.addEventListener('click', playRock);
function playRock() {
    let playerSelection = "ROCK";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
};

let btnP = document.getElementById("paper");
btnP.addEventListener('click', playPaper);
function playPaper() {
    let playerSelection = "PAPER";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);;
}

let btnS = document.getElementById("scissors");
btnS.addEventListener('click', playScissors);
function playScissors() {
    let playerSelection = "SCISSORS";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

function keepScore() {
    if ((playerScore === 5) && (computerScore < playerScore)) {
        alert(`WINNER!! \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`);
    } else if ((computerScore === 5) && (playerScore < computerScore)) {
        alert(`YOU LOST!! \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore} \nWOMP WOMP WOMP`);
    } else {
    }
}

function playRound(playerSelection, computerSelection) {
    if ((computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') || 
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')) {
        computerScore++;
        roundResults.style.color = "red";
        roundResults.innerText = `Player chose ${playerSelection}. 
            Computer chose ${computerSelection}. 
            ${computerSelection} beats ${playerSelection}. 
            Computer wins this round.`;
        score.innerText = `Computer: ${computerScore} 
            Player: ${playerScore}`;
        resultList.innerText += `Player chose ${playerSelection}. Computer chose ${computerSelection}. Player: ${playerScore}  Computer: ${computerScore} \n`;  
    } else if (computerSelection === playerSelection) {
        roundResults.style.color = "black";
        roundResults.innerText = `Player chose ${playerSelection}. 
            Computer chose ${computerSelection}. 
            This round is a draw.`;
        score.innerText = `Computer: ${computerScore}   
            Player: ${playerScore}`;
        resultList.innerText += `Player chose ${playerSelection}. Computer chose ${computerSelection}. Player: ${playerScore}  Computer: ${computerScore} \n`;
    } else {
        playerScore++;
        roundResults.style.color = "green";
        roundResults.innerText = `Player chose ${playerSelection}. 
            Computer chose ${computerSelection}. 
            ${playerSelection} beats ${computerSelection}. 
            Player wins this round.`;
        score.innerText = `Computer: ${computerScore}   
            Player: ${playerScore}`;
        resultList.innerText += `Player chose ${playerSelection}. Computer chose ${computerSelection}. Player: ${playerScore}  Computer: ${computerScore} \n`;
    }
    keepScore();
}

let btnG = document.getElementById("newGame");
btnG.addEventListener('click', resetScore);
function resetScore() {
    playerScore = 0;
    computerScore = 0;
    score.innerText = `Computer: ${computerScore}   Player: ${playerScore}`;
    resultList.innerText = "";
    roundResults.innerText = "";
}

let playerScore = 0;
let computerScore = 0;