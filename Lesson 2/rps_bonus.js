/*
** Bonus features
** 1. Lizard spock
** 2. Shortened Input
** 3. Best of 5
*/

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const VALID_INPUT = ['rock', 'paper', 'scissors', 'lizard', 'spock',
  'r', 'p', 's', 'l', 'sp'];
const WIN_CONDITIONS = {
  rock: ['scissors', 'lizard'],
  scissors: ['paper', 'lizard'],
  paper: ['rock', 'spock'],
  spock: ['scissors', 'rock'],
  lizard: ['spock', 'paper'],
};
const INPUT_MATCH = {
  r: 'rock',
  s: 'scissors',
  p: 'paper',
  sp: 'spock',
  l: 'lizard',
};
const WINS_NEEDED = 5;
let playerScore = 0;
let computerScore = 0;

prompt(`Welcome to Rock-Paper-Scissors-Spock-Lizard!`);
prompt(`You will be matched against a computer. Whoever reaches 5 wins first \
is the grand winner.`);
prompt(`You may shorten your input by typing the first letter, such as 'r' for \
'rock' or 's' for scissors'.`);
prompt(`However, if you shorten 'spock' you must type 'sp'. \n `);

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

  playerScore = 0;
  computerScore = 0;

  if (answer[0] !== 'y') break;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function getPlayerChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let playerChoice = readline.question();

  while (!VALID_INPUT.includes(playerChoice)) {
    prompt("That's not a valid choice.");
    playerChoice = readline.question();
  }

  if (Object.keys(INPUT_MATCH).includes(playerChoice)) {
    playerChoice = INPUT_MATCH[playerChoice];
  }
  return playerChoice;
}

function getComputerChoice() {
  let randomIndex = (Math.floor(Math.random() * VALID_CHOICES.length));
  let computerChoice = VALID_CHOICES[randomIndex];
  return computerChoice;
}

function whoWins(choice, computerChoice) {
  return WIN_CONDITIONS[choice].includes(computerChoice);
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
  prompt(`Your wins: ${playerScore} Computer wins: ${computerScore} \n`);
}

function displayGrandWinner() {
  if (playerScore === WINS_NEEED) {
    prompt(`You are the grand winner!`);
    return 'game over';
  } else if (computerScore === WINS_NEEDED) {
    prompt(`Computer is the grand winner.`);
    return 'game over';
  } else {
    return 'game on';
  }
}