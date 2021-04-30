let rlSync = require('readline-sync');

let numbers = [];

numbers.push(Number(rlSync.question('Enter the 1st number: ')));
numbers.push(Number(rlSync.question('Enter the 2nd number: ')));
numbers.push(Number(rlSync.question('Enter the 3rd number: ')));
numbers.push(Number(rlSync.question('Enter the 4th number: ')));
numbers.push(Number(rlSync.question('Enter the 5th number: ')));

const lastNumber = rlSync.question('Enter the last number: ');
if (numbers[lastNumber]) {
  console.log(`The number ${lastNumber} appears in ${numbers}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${numbers}.`);
}
