/*
** use String.prototype.charCodeAt() to determine ASCII value of a character
** ASCII string value is sum of ASCII value of every character in the string.
*/

function asciiValue(string) {
  let value = 0; 

  for (let index = 0; index < string.length; index++) {
    value += string.charCodeAt(index);
  }

  return value; 
}
console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0