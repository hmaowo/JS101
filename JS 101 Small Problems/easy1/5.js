let rlSync = require('readline-sync');
let bill = Number(rlSync.question("What is the bill? "));
let tipPercentage = Number(rlSync.question("What is the tip percentage? "));

let tip = bill * (tipPercentage / 100);
let total = bill + tip; 

console.log(`\nThe tip is $${tip.toFixed(2)}`); //start on a new line 
console.log(`The total is $${total.toFixed(2)}`);

/* question: use Number() or parseFloat()? */