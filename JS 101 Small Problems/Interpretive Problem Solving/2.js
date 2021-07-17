/*
P
  - input: n : odd integer
  - output: four - pointed diamond in n x n grid
Their understanding the problem
input
  - odd integer n that represents the size of diamond
  - n represents the total number of rows, as well as width of
    widest row
output
  - the return value of the function is not significant
  - the program should print out a diamond made up of * characters
Requirements
  - using n = 5 as an example:
    - each row is a string of asterisks, prepended by spaces
    - the 5 rows will have 1, 3, 5, 3, and 1 asterisks
    - the 5 rows will have 2, 1, 0, 1, 2, spaces prepended
Mental Model
- General model for diamond of size n
  - Each row is a string of asterisks, prepended by spaces
  - the n rows will have 1, 3, ...n, ...3, 1 asterisks
  - each row will have (n - countOfAsterisks) / 2 spaces
Algorithm
  - generate a sequence of numbers for the given odd number n
  - for each number in this sequence
      log out the concatentation of `(n - number) / 2` spaces and `number`
      asterisks

  - initialize increment to 2
  - start with first number, 1, incrementing the number by increment
    with each step
  - when the number is equal to n, flip the increment to -2
  - stop when we get to a negative number
*/

function diamond (n) {
  numberSequence(n).forEach(number => {
    console.log(' '.repeat((n - number) / 2) + '*'.repeat(number));
  });
}

function numberSequence(n) {
  let increment = 2;
  let number = 1;
  let sequence = [];

  while (number > 0) {
    sequence.push(number);
    if (number === n) {
      increment = -2;  // this flips triangle, without printing the row twice
    }
    number += increment;
  }

  return sequence;
}

// Examples

diamond(1);
// logs
// *
diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *