// Write a function that takes an integer as an argument and returns
//  the maximum rotation of that integer.You can(and probably should)
//  use the rotateRightmostDigits function from the previous exercise.

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

// count is part being rotated
// 735291 number.length - count = 0, so count = 6
// 352917 number.length - count = 1, count = 5
// 329175
// 321759
// 321597
// 321579

function maxRotation(num) {
  for (let counter = String(num).length; counter > 0; counter--) {
    num = rotateRightmostDigits(num, counter);
  }
  return num;
}


function rotateRightmostDigits(number, count) {
  number = String(number);
  let firstPart = number.slice(0, number.length - count);
  let secondPart = number.slice(number.length - count);
  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

/* their solution
function maxRotation(number) {
  let numberDigits = String(number).length;
  for (let count = numberDigits; count >= 2; count--) {
    number = rotateRightmostDigits(number, count);
  }
  return number;
}

With the use of the rotateRightmostDigits function from the previous exercise,
this solution simply becomes a matter of repeatedly calling that function,
passing the number and count as arguments. The variable count — representing
the number of digits in the number argument — is decremented by 1 at the end of
each iteration, all the way down until it reaches a value of 2. It is not
necessary to rotate all the way down to 1 because rotating the rightmost digit
has no effect.
*/
