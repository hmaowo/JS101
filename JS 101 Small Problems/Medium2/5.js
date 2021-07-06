/* eslint-disable max-len */
/*
P
- info: 
  - A featured number (something unique to this exercise) is an odd number that is a 
    multiple of 7, with all of its digits occurring exactly once each. 
  - For example, 49 is a featured number, but 98 is not (it is not odd), 
    97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

  - input: function that takes an integer as an argument and
  - output: returns the next featured number greater than the integer.
    - Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

A
  - create a function called featured that takes an integer as argument (num)
  - use if/ else statement
    - return 'No next featured number' if num is greater than or equal to 9876543201
  - while num is less than 9876543201,
    - num += 1
    - if (num is divisibly by 7 && num is an odd number)
      - test to see if there are duplicates in this number
        - create a string of the number
        - convert string to an array
        - use array.every & indexOf to check for no duplicates
      - if no duplicate then
        - return num
*/

function featured (num) {
  const MAX_FEATURED = 9876543201;

  while (num < MAX_FEATURED) {
    num += 1;
    if (oddMultipleOf7(num)) {
      if (noRepeatingDigits(num)) {
        return num;
      }
    }
  }

  return 'There is no possible number that fulfills those requirements.';
  // default after it checks all numbers
}

function noRepeatingDigits(num) {
  let string = String(num);
  let array = string.split('');
  let seen = {};

  array.forEach(cv => {
    if (seen[cv]) {
      return false;
    }
    seen[cv] = true;
  });

  return true;
}

function oddMultipleOf7(num) {
  return num % 7 === 0 && num % 2 === 1;
}

// examples
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."