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
let myScore = 0;
let computerScore = 0;

while (true) {
  playGame(); 

  prompt("Would you like to play again y/n");
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}

function playGame() {
  while (true) {
    let choice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    let roundWinner = findRoundWinner(choice, computerChoice);
    let winsTracker = trackWins(roundWinner);
    let grandWinner = displayWinner(winsTracker);
    if (grandWinner === 'game over') break;
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function getPlayerChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let playerChooses = readline.question();

  while (!VALID_CHOICES.includes(playerChooses)) {
    prompt("That's not a valid choice.");
    playerChooses = readline.question();
  }

  return playerChooses;
}

function getComputerChoice() {
  let randomIndex = (Math.floor(Math.random() * VALID_CHOICES.length));
  let computerChooses = VALID_CHOICES[randomIndex];
  return computerChooses;
}

function findRoundWinner(choice, computerChoice) {
  prompt(`You chose ${choice}. Computer chose ${computerChoice}.`);

  if (WIN_CONDITIONS[choice].includes(computerChoice)) {
    return 'me';
  } else if (choice === computerChoice) {
    return 'tie';
  } else {
    return 'computer';
  }
}

function trackWins(currentWinner) {
  if (currentWinner === 'me') {
    myScore++;
    if (myScore === WINS_NEEDED) {
      return 'me game over';
    } else {
      return 'me';
    }
  } else if (currentWinner === 'tie') {
    return 'tie';
  } else {
    computerScore++;
    if (computerScore === WINS_NEEDED) {
      return 'grand winner is computer';
    } else {
      return 'computer';
    }
  }
}

function displayWinner(winner) {
  if (winner === 'me game over') {
    prompt("You are the grand winner!");
    return 'game over';
  } else if (winner === 'computer game over') {
    prompt("Computer is the grand winner!");
    return 'game over';
  } else if (winner === 'me') {
    prompt(`You win this round. Your wins: ${myScore} \
Computer wins: ${computerScore}`);
    return 'game on';
  } else if (winner === 'computer') {
    prompt(`Computer wins this round. Your wins: ${myScore} \
Computer wins: ${computerScore}`);
    return 'game on';
  } else {
    prompt(`You tied. Your wins: ${myScore} Computer wins: ${computerScore}`);
    return 'game on';
  }
}
/*
** Notes for myself
** \ is a line continuation for temperate literal.
*/