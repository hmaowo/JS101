//1
const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}
function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(messages('welcome'));

while (true) {
  // ask for two numbers
  // ask for operation
  // perform operation and display results


  prompt(messages('number1', 'es'));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages('invalid'));
    number1 = readline.question();
  }

  prompt(messages('number2'));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages('invalid'));
    number2 = readline.question();
  }

  prompt(`What operation would you like to perform?
  1) Add 2) Subtract 3) Multiply 4) Divide`);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is: ${output}`);

  prompt('Would you like to perform another operation? (y/n)');
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break; // if user enters Y or yes instead of y
}
