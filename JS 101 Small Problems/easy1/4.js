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
  `The area of the room is ${area.toFixed(2)} square meters (${squareFeet.toFixed(2)} square feet).`
);

/* 
** Further Exploration
** Modify the program so that it asks the user for the input type (meters or feet).
** Compute for the area accordingly, and log it and its conversion in parentheses. 
*/

console.log("Is your input type meters or feet?");
let inputType = readlineSync.prompt();

if (inputType === 'meters') {
  console.log("Enter the length of the room in meters:");
  let length = readlineSync.prompt();
  length = parseInt(length, 10);

  console.log("Enter the width of the room in meters:");
  let width = readlineSync.prompt();
  width = parseInt(width, 10);

  let area = length * width;
  let squareFeet = area * 10.7639;

  console.log(
    `The area of the room is ${area.toFixed(2)} square meters (${squareFeet.toFixed(2)} square feet).`
  );
} else if (inputType === 'feet') {
  console.log("Enter the length of the room in feet:");
  let length = readlineSync.prompt();
  length = parseFloat(length);

  console.log("Enter the width of the room in feet:");
  let width = readlineSync.prompt();
  width = parseFloat(length);

  area = length * width;
  squareMeters = area / 10.7639;
  console.log(
    `The area of the room is ${area.toFixed(2)} square feet (${squareMeters.toFixed(2)} square meters).`
  );
} else {
  console.log('Incorrect input type. Please enter meters or feet.');
}

