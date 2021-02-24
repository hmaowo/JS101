/*
** Given loan amount, Annual Percentage Rate (APR), & loan duration,
** calculate the monthly interest rate and loan duration in months.
*/

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return (number <= 0 || Number.isNaN(number));
}

prompt("Welcome to Mortgage Calculator!");

while (true) {

  prompt("Enter the loan amount.");
  let loanAmount = Number(readline.question());

  while (invalidNumber(loanAmount)) {
    prompt("Please enter a positive number.");
    loanAmount = Number(readline.question());
  }

  prompt("Enter the Annual Percentage Rate (APR).");
  let APR = Number(readline.question());
  APR /= 100;

  while (invalidNumber(APR)) {
    prompt("Please enter a positive number.");
    loanAmount = Number(readline.question());
  }

  prompt("Enter the loan duration in years.");
  let loanYears = Number(readline.question());

  while (invalidNumber(loanYears)) {
    prompt("Please enter a positive number.");
    loanAmount = Number(readline.question());
  }

  let loanMonths = loanYears * 12;
  let monthlyIntRate = APR / 12;

  let monthlyPayment = loanAmount * (monthlyIntRate /
                      (1 - Math.pow((1 + monthlyIntRate), (-loanMonths))));

  prompt(`Your monthly payment is $${monthlyPayment.toFixed(2)}.`);

  prompt("Another calculation?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}

/*
** The Number.isNaN() method determines whether the passed value is NaN
** and its type is Number. It is a more robust version of the original
** global isNaN(). Compared to isNaN(), Number.isNaN() doesn't suffer from
** the problem of forcefuly converting the parameter to a number.
*/