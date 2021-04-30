let rlSync = require('readline-sync');

let age = Number(rlSync.question('What is your age? '));
let retire = Number(rlSync.question('At what age would you like to retire? '));

let date = new Date();
let year = date.getFullYear();

let yearsLeft = retire - age;
let retireYear = year + yearsLeft;


console.log(`It's ${year}. You will retire in ${retireYear}. \n You only have \
${yearsLeft} years of work to go!`);