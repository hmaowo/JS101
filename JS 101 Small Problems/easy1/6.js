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


/* 
** Further Exploration: 
** What if the input was an array of integers instead of just a single integer?
** How would your computeSum and computeProduct functions change?
** Given that the input is an array, how might you make use of the Array.prototype.reduce() method? 
*/

let input = rlSync.question(`Please enter an array of integers greater than 0, separated by \
a single empty space. Do not enclose the integers in brackets. Please folow these guidelines, \
otherwise the function may not compute properly. 
For example: 1 2 3 4 5 \n` );

let arrayOfText = input.split(' ');
let array = arrayOfText.map(function(element) {
  return parseInt(element);
}); //convert array element from string to numbers. 

if (array.includes(NaN)) { 
  console.log(`Your input did not follow the rules. Try again. `)
} else {
  console.log(`This is your array [${array}].`);
  let answer = rlSync.question(`Enter "s" to compute the sum, or "p" to compute the product. `);

  if (answer === 's') {
    let sum = array.reduce((sum, element) => sum + element, 0)
    console.log(`\nThe sum of the integers in the array is is ${sum}.`);
  } else if (answer === 'p') {
    let product = array.reduce((product, element) => product * element, 1); 
    console.log(`\nThe product of the integers in the array is ${product}.`);
  } else { 
    console.log("Oops. Unknown operation.");
  }
}

