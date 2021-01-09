let rlSync = require('readline-sync');
let integer = parseInt(rlSync.question("Please enter an integer greater than 0: "));
let answer = rlSync.question(`Enter "s" to compute the sum, or "p" to compute the product. `);

if (answer === 's') {
  let sum = 0; 
  for (let i = 1; i <= integer; i++) {
    sum += i; 
  }
  console.log(`\nThe sum of the integers between 1 and ${integer} is ${sum}.`);
} else if (answer === 'p') {
  let product = 1; 
  for (let i = 1; i <= integer; i++) {
    product *= i; 
  } 
  console.log(`\nThe product of the integers between 1 and ${integer} is ${product}.`);
} else { 
  console.log("Oops. Unknown operation.");
};