// my solution
for (let i = 1; i <= 99 ; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// Launch School Solution
for (let number = 1; number < 100; number += 2) {
  console.log(number);
}

/* Further exploration Repeat this exercise with a technique different from the one that you used,
and different from the one provided. Also consider adding a way for the user to specify the
 limits of the odd numbers logged to the console. */

let rlSync = require('readline-sync');
console.log(`This program logs the odd numbers between two numbers, inclusive. The numbers you \
choose must be between 1 and 99`);
let num1 = Number(rlSync.question("Please enter the lower limit number. \n"));
let num2 = Number(rlSync.question("Enter the upper limit number. \n"));
if (num1 < 1 || num2 > 99 || num1 > 99 || num2 < 1) {
  console.log("Please enter numbers between 1 and 99.");
} else if (num2 < num1) { 
  console.log(`Please enter an upper limit number that is greater than the \
lower limit number.`);
} else {
  for (let counter = num1; counter <= num2; counter += 1 ) {
    if (counter % 2 == 1) {
      console.log(counter);
    }
  }
}
