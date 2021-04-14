// ask the user for their move
// the computer will choose their move
// display who won/the result

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = readline.question();
  }


  // Math.random returns a floating-point number between 0 (inclusive) and 1
  // (exclusive), sometimes 0 but rarely.
  let randomIndex = (Math.floor(Math.random() * VALID_CHOICES.length));
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You choose ${choice}. Computer chose ${computerChoice}.`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'paper' && computerChoice === 'rock')) {
    prompt("You win!");
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'scissors') ||
    (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }

  prompt("Would you like to play again y/n");
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}