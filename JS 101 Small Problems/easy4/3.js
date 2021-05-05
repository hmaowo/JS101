let rlSync = require('readline-sync');

let age = Number(rlSync.question('What is your age? '));
let retire = Number(rlSync.question('At what age would you like to retire? '));

let date = new Date();
let year = date.getFullYear();

let yearsLeft = retire - age;
let retireYear = year + yearsLeft;


console.log(`It's ${year}. You will retire in ${retireYear}. \n You only have \
${yearsLeft} years of work to go!`);

/*
further exploration
If you don't use new keyboard on line 6 you will get a 
TypeError: today.getFullYear is not a function. Date.prototype.getFullYear is 
an instance method of the Date object, so it can only be invoked from an 
instance of the Date object. You get that instance by calling the Date 
object's constructor, by using the new keyword.
*/