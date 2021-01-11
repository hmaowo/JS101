console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));;         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"

function integerToString(number) {
  const LETTERS = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9', 
  }
  // extract digit (the remainder)
  let string = '';

  do  {
    let remainder = number % 10; 
    number = Math.floor(number / 10); 
    let key = Object.keys(LETTERS)[remainder];
    string = key + string; // concatenate string right to left, tens place to higher digit place
  } while (number > 0);

  return string; 
}

/* 
** Launch School Notes
** Number.prototype.toString is more explicit than prepending empty string ' ' to a number.
** (17).toString();        // "17"
** (17).toString(2);       // "10001"
** (17).toString(16);      // "11"
** toSTring can convert any number to a base from base2 up to base 36 

** Airbnb style calls for using String () in preference to toString() 
** String() works with all types including null and undefined, while toString() raises an exception
** String() is guaranteed to return a string, unlike toString() where individual objects can 
** override toString() and they don't have to return a string. 

** Launch School's solution

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

*/