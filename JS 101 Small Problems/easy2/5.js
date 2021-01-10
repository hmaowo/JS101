let rlSync = require('readline-sync');
console.log('==> Enter the first number:');
let num1 = parseInt(rlSync.prompt());
console.log('==> Enter the second number:');
let num2 = parseInt(rlSync.prompt());

console.log(`==> ${num1} + ${num2} = ${num1 + num2}`);
console.log(`==> ${num1} - ${num2} = ${num1 - num2}`);
console.log(`==> ${num1} * ${num2} = ${num1 * num2}`);
console.log(`==> ${num1} / ${num2} = ${Math.floor(num1 / num2)}`); //prob should not be rounding up
console.log(`==> ${num1} % ${num2} = ${num1 % num2}`);
console.log(`==> ${num1} ** ${num2} = ${Math.pow(num1, num2)}`);

// edge cases to consider: second number cannot be 0 