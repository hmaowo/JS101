/*
P
- Inputs
  - An array that contains the list of values
  - A delimiter (default is a comma followed by a space)
  - A join word (default is 'or')
  - Outputs
- Output
  - A string that represents the final string
Algorithm
  - if input array is empty, return an empty string
  - if input array only has one value, return that value as a string
  - if input array has exactly two values, return those values separated by the join word; don't use delimiter
  - if input array has three or more values, return the concatenation of all of the values as follows:
  - Add the delimiter between each pair of values
  - Add the join word before the last value

  - first create a separate file for joinOr function, that we will add into
    tictactoe.js later
  - function should intake the array and output a string based on rules
  - the arguments for joinOr will be ${emptySquares(board).join(', ')} from 
    the playerChoosesSquare function
*/
// Examples
console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"

/* Data Structure
delimeters = [[1, 2, 3]]
delimeters = [[1, 2, 3], '; ']
delimeters = [[1, 2, 3], ', ', 'and']
delimeters = [[]]
delimeters = [[5]]
delimeters = [[1, 2]]
*/
function joinOr(arr, delimeter = ', ', word = 'or') {
  switch (arr.length) {
    case 0: 
      return "";
    case 1: 
      return `${arr[0]}`;
    case 2: 
      return arr.join(` ${word} `);
    default:
      let firstPart = arr.slice(0, arr.length - 1);
      let lastPart = arr[arr.length - 1];
      return `${firstPart.join(delimeter)}${delimeter}${word} ${lastPart}`;
  }
}
