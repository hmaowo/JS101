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
  /*
  ** can also use an array instead of object? 
  ** let arrayOfKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
  */ 

  // extract each digit

  let integer = 0; 
  let arrayOfIntegers = [];
  if (number === 0) {
    arrayOfIntegers.push(0);
  } else {
    1234567890
    for (let counter = number; counter >= 1; counter /= 10) {
      integer = counter % 10; 
      // push integers to an array, start from lowest tens to highest place
      arrayOfIntegers.push(integer); 
      counter -= counter % 10;
    }
  }

  //iterating from highest index of array, get object key that matches the integer
  let string = ''; 
  for (let counter = arrayOfIntegers.length - 1; counter >= 0; counter -= 1) {
    let key = Object.keys(LETTERS)[arrayOfIntegers[counter]];
    string = string + key;
  }
  return string; 
}

