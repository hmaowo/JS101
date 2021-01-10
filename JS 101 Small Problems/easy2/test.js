console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

function stringToInteger(string) {
  let number = 0;
  let digit = 10 ** string.length;
  for (let i = 0; i < string.length; i += 1) {
    for (let num = 0; num <= 9; num += 1) {
      if (string[i].includes(num)) {
        number += num * digit;
        break;
      }
    }
  }
}