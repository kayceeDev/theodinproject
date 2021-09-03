// Computer chooses a hand
function computerPlay() {
  computerOptions = ["rock", "paper", "scissors"];
  return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

// compares users hand with computer hands
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  return playerSelection === computerSelection
    ? "Draw game"
    : (computerSelection === "rocks" && playerSelection === "scissors") ||
      (computerSelection === "scissors" && playerSelection === "paper") ||
      (computerSelection === "paper" && playerSelection === "rocks")
    ? `You Lose! ${computerSelection} beats ${playerSelection}`
    : (computerSelection === "scissors" && playerSelection === " rocks") ||
      (computerSelection === "paper" && playerSelection === "scissors") ||
      (computerSelection === "rocks" && playerSelection === "paper")
    ? `You win! ${playerSelection} beats ${computerSelection}`
    : "The game is indecissive";
}

// plays game for 5times and displays winner
let game = (num) => {
  let playerScore = 0;
  let computerScore = 0;
  let count = num;
  while (count > 0) {
    const playerSelection = prompt(
      "To play the game, enter a selection (rock, paper or selction): "
    );
    const computerSelection = computerPlay();
    outCome = playRound(playerSelection, computerSelection);
    if (
      outCome === `You Lose! ${computerSelection} beats ${playerSelection}` &&
      outCome !== "Draw game" &&
      outCome !== "The game is indecissive"
    ) {
      computerScore += 1;
    } else if (
      outCome !== "Draw game" &&
      outCome !== "The game is indecissive"
    ) {
      playerScore += 1;
    }
    count--;
  }
  return computerScore > playerScore
    ? `You Lose! Computer score : ${computerScore}, Player score : ${playerScore}`
    : computerScore < playerScore
    ? `You Win! Computer Score: ${computerScore}, Player score ${playerScore}`
    : `Draw game! Computer Score: ${computerScore}, Player score ${playerScore}`;
};

console.log(game(5));
