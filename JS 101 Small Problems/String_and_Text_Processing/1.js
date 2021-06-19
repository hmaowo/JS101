console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true

function isUppercase(string) {
  return string.toUpperCase() === string;
}


/* my solution - unncessary
function isUppercase(str) {
  return str.split('').every(letter => letter === letter.toUpperCase());
}*/
