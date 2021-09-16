const buttons = document.querySelectorAll(".btn");
let playerScores = document.querySelector(".player-count");
let computerScores = document.querySelector(".computer-count");
let sessionCountDiv = document.querySelector(".session-count");
let playAgain = document.querySelector(".play-again");
let sessionCount = 0;
let computerCount = 0;
let playerCount = 0;

function playerOption(e) {
  const playerSelection = e.target.textContent;
  const computerSelection = computerPlay();
  if (computerCount == 5 || playerCount == 5) {
    if (computerCount > playerCount) {
      sessionCountDiv.textContent = `final score is Computer ${computerCount} vs ${playerCount} Player. Computer wins this round`;
    } else {
      sessionCountDiv.textContent = `final score is Computer ${computerCount} vs ${playerCount} Player. Player wins this round`;
    }
    playAgain.classList.toggle("active");
  } else {
    let outCome = playRound(playerSelection, computerSelection);
    if (outCome === "computer wins") {
      computerCount += 1;
      computerScores.textContent = computerCount;
    } else if (outCome === "player wins") {
      playerCount += 1;
      playerScores.textContent = playerCount;
    } else {
      playerScores = playerScores;
      computerScores = computerScores;
    }
    sessionCount++;
    sessionCountDiv.textContent = sessionCount;
  }
}

function reset() {
  computerCount = 0;
  playerCount = 0;
  sessionCount = 0;
  playerScores.textContent = playerCount;
  computerScores.textContent = computerCount;
  playAgain.classList.toggle("active");
  sessionCountDiv.textContent = "0";
}

buttons.forEach((btn) => {
  btn.addEventListener("click", playerOption);
});

playAgain.addEventListener("click", reset);

// Computer chooses a hand
function computerPlay() {
  computerOptions = ["paper", "rocks", "scissors"];
  return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

// compares user's hand with computer hands
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection) return;
  else if (
    (computerSelection === "rocks" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rocks")
  ) {
    return "computer wins";
  } else if (
    (playerSelection === "rocks" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rocks")
  ) {
    return "player wins";
  } else {
    return;
  }
}
