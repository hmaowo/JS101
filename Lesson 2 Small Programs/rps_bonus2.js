/*
** ask the user for their move
** the computer will choose their move
** display who won/the result

** Bonus features
** 1. Lizard spock
** 3. Best of 5
*/

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WIN_CONDITIONS = {
  rock: ['scissors', 'lizard'],
  scissors: ['paper', 'lizard'],
  paper: ['rock', 'spock'],
  spock: ['scissors', 'rock'],
  lizard: ['spock', 'paper']
};
const WINS_NEEDED = 5;
let playerScore = 0;
let computerScore = 0;

while (true) {

  while (true) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    displayRoundWinner(playerChoice, computerChoice);
    trackScore(playerChoice, computerChoice);
    displayRoundScore();
    let terminate = displayGrandWinner();
    if (terminate === 'game over') break;
  }

  prompt("Would you like to play again y/n");
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function getPlayerChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let playerChoice = readline.question();

  while (!VALID_CHOICES.includes(playerChoice)) {
    prompt("That's not a valid choice.");
    playerChoice = readline.question();
  }

  return playerChoice;
}

function getComputerChoice() {
  let randomIndex = (Math.floor(Math.random() * VALID_CHOICES.length));
  let computerChoice = VALID_CHOICES[randomIndex];
  return computerChoice;
}

function whoWins(player, opponent) {
  return WIN_CONDITIONS[player].includes(opponent);
}

function displayRoundWinner(playerChoice, computerChoice) {
  prompt(`You chose ${playerChoice}. Computer chose ${computerChoice}.`);

  if (whoWins(playerChoice, computerChoice)) {
    prompt('You win this round.');
  } else if (playerChoice === computerChoice) {
    prompt('You tied.');
  } else {
    prompt('Computer wins this round.');
  }
}

function trackScore(playerChoice, computerChoice) {
  if (whoWins(playerChoice, computerChoice)) {
    playerScore++;
  } else if (playerChoice === computerChoice) {
    playerScore += 0;
    computerScore += 0;
  } else {
    computerScore++;
  }
}

function displayRoundScore() {
  prompt(`Your wins: ${playerScore} Computer wins: ${computerScore}`);
}

function displayGrandWinner() {
  if (playerScore === WINS_NEEDED) {
    prompt(`You are the grand winner!`);
    return 'game over';
  } else if (computerScore === WINS_NEEDED) {
    prompt(`Computer is the grand winner.`);
    return 'game over';
  } else {
    return 'game on';
  }
}

/*
** Notes for myself
** \ is a line continuation for temperate literal.
*/