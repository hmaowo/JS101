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

/* Launch School Solution : using object to convert string to numeric value

function stringToInteger(string) {
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
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

*/