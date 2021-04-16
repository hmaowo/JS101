// ask the user for their move
// the computer will choose their move
// display who won/the result

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}. Computer chose ${computerChoice}.`);

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

  displayWinner(choice, computerChoice);

  prompt("Would you like to play again y/n");
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}

/* Things to consider
1.Notice how the displayWinner function calls the prompt function. What happens
  if you move the  displayWinner function definition above the prompt function
  definition? Does it still work?

  Yes.

2.How would you use the displayWinner function differently if it returned a
  string, as opposed to outputting the string directly?

  Then it would return a string of who won in a variable, and then
  invoke prompt() function from inside the while(true) loop.

3.We used the Math object to generate a random number and round down a floating
  point number. Skim through the documentation for the Math object and see what
  other functions from the object you may find useful. Specifically, read the
  pages for Math.round and Math.ceil. How would you rewrite the random index
  expression if you were to use one of these two methods instead of Math.floor?
  > Conventionally, methods on the Math object are called functions.
  > There doesn't seem to be any good reason for that, but it is what it is.

  The Math.ceil() function always rounds a number up to the next largest
  integer. The Math.round() function returns the value of a number rounded to
  the nearest integer.

  let randomIndex = (Math.round(Math.random() * VALID_CHOICES.length));
  let randomIndex = (Math.ceil(Math.random() * VALID_CHOICES.length));

4.We used a while loop with an always-true condition and a break statement to
  decide whether to replay the game. Can you rewrite the loop so that we don't
  need to use the break statement to stop the loop?

let answer = 'y';
do {
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

  displayWinner(choice, computerChoice);

  prompt("Would you like to play again y/n");
  answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }
} while (answer[0] === 'y');
*/