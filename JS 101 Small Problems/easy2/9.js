console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

// my solution
function stringToInteger (string) {
  let number = 0; 
  let digit = (10 ** (string.length - 1));
  for (let i = 0; i < string.length; i += 1) {
    for (let num = 0; num <= 9; num += 1) {
      if (string[i].includes(num)) {
        number += num * digit;
        digit = digit / 10;
      }
    }
  }
  return number; 
}


/* 
** Launch School Solution : using object to convert string to numeric value

** Use digits stored as strings to look up corresponding numeric values. 

function stringToInteger(string) {
  const DIGITS = { //object keys(property names) are always strings. 
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

** so if you have 4, 3, 1 it is computed as 
** 10 * 0 + 4 -> 4
** 10 * 4 + 3 -> 43
** 10 * 43 + 1 -> 431

** Further Exploration: 
** Write a hexadecimalToInteger() function that converts a string representing a hexadecimal
** number to its integer value. Note that hexadecimal numbers use base 16 instead of 10, and the
** "digits" A, B, C, D, E, and F (and the lowercase equivalents) correspond to decimal values of
** 10-15.

** A hex value is the digit sequence of the remainders from from last to first.

** How to convert hexadecimal to decimal:

** 4D9f

** 4 x 16^3 + 13 x 16^2 + 9 x 16^1 + 15 = 19871

** How to convert decimal to hexadecimal:

** 19871

** 19871 / 16 = 1241 R 15 -> F
** 1241 / 16 = 77 R 9 -> 9
** 77 / 16 = 4 R 13 -> D

** convert the R (remainders) to hexadecimal numbers. Write it from most significant digit to
** least significant digit.

** 4 D 9 F.
*/

console.log(hexadecimalToInteger('4D9f') === 19871); // logs true

function hexadecimalToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10, 
    B: 11, 
    C: 12, 
    D: 13, 
    E: 14, 
    F: 15, 
    a: 10,
    b: 11, 
    c: 12, 
    d: 13, 
    e: 14, 
    f: 15, 
    10: 16
  };

  let array = string.split(""); //convert string to array
  let arrayOfDigits = array.map(char => DIGITS[char]); // creates new array of numbers 

  let number = 0; 
  let digit = 16 ** (array.length - 1); 
  arrayOfDigits.forEach(function(element) { //creates a number by iterating over the array
    number = number + (element * digit); 
    digit = digit / 16; 
  });
  return number;
}

