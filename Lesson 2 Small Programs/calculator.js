/* 
* Uses build-in Node function require to look for readline-sync library in the 
* node_modules folder.
*/
const readline = require('readline-sync');

console.log('Welcome to Calculator!');


// Ask the user for the first number.
console.log("What's the first number?");
let number1 = readline.question(); 

// Ask the user for the second number.
console.log("What's the second number?");
let number2 = readline.question();

// Ask the user for an operation to perform.
console.log(`What operation would you like to perform? 
1) Add 2) Subtract 3) Multiply 4) Divide`);
let operation = readline.question();

let output;
if (operation === '1') { // '1' represents addition
  output = Number(number1) + Number(number2);
} else if (operation === '2') { // '2' represents subtraction
  output = Number(number1) - Number(number2);
} else if (operation === '3') { // 3 represents multiplication
  output = Number(number1) * Number(number2);
} else if (operation === '4') { // 4 represents division
  output = Number(number1) / Number(number2);
}

console.log(`The result is: ${output}`);