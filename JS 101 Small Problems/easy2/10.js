console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

function stringToSignedInteger(string) {
  if (string.includes("-")) {
    string = string.replace("-", "");
    return - stringToInteger(string); //return -number
  } else if (string.includes("+")){
    string = string.replace("+", "");
    return stringToInteger(string); 
  } else { 
    return stringToInteger(string);
  }
}

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
  let array = string.split("");
  let arrayOfIntegers = array.map(char => DIGITS[char]); //map creates a new array

  let number = 0; 
  let place = 10 ** (string.length - 1);
  arrayOfIntegers.forEach(function (num) { //don't use map here, not tryna make a new array
    number = number + num * place;
    place = place / 10; 
  });
  return number;
}
