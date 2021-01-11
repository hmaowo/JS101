console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

function signedIntegerToString(number) {
  let string = integerToString(Math.abs(number));
  if (Math.sign(number) === -1) {
    string = "-" + string; 
  } else if (Math.sign(number) === 1) {
    string = "+" + string; 
  } else {
    string = "0"; 
  }
  return string; // remember to return the string. 
}
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

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    let key = Object.keys(LETTERS)[remainder];
    string = key + string; // concatenate string right to left, tens place to higher digit place
  } while (number > 0);

  return string;
}