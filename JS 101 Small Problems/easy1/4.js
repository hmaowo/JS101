let readlineSync = require('readline-sync');

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let area = length * width; 
let squareFeet = area * 10.7639; 

console.log(
  `The area of the room is ${area.toFixed(2)} square meters (${squareFeet.toFixed(2)} square feet)`
);
