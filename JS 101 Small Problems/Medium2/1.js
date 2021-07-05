/* eslint-disable max-lines-per-function */
/*
P
   - Hint:
      - This is a string processing problem. Either convert string into array
        and use list procssing(iteration) to gather and tally characters, or use
        regex to get characters that match a pattern.
      - Once you have the characters, get quantity of each category, divide
        quantity by length of the string, the format the result as needed.
   - Input: string
   - Output: an object with these properties:
      - the percentage of characters in the string that are lowercase letters
      - the percentage of characters that are uppercase letters
      - the percentage of characters that are neither
*/

/*
A
  - create a function called letterPercentages and intake a string argument str
  - use String.match to get lowercase, uppercase, and neither characters,
    set these into their own variables
  - divide the string lengths by length of the main string
  - push these lengths into the object with their respective keys
*/

function letterPercentages(str) {
  let obj = {};

  let lowercase = str.match(/[a-z]/g) || '';
  obj['lowercase'] = (lowercase.length / str.length * 100).toFixed(2);

  let uppercase = str.match(/[A-Z]/g) || '';
  obj['uppercase'] = (uppercase.length / str.length * 100).toFixed(2);

  let neither = str.match(/[^a-zA-z]/g) || '';
  obj['neither'] = (neither.length / str.length * 100).toFixed(2);

  return obj;
}

// Examples
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }