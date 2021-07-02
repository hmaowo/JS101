function rotateRightmostDigits(num, count) {
// algorithm
// convert the original number to a string
  let str = String(num);
  // eslint-disable-next-line max-len
  // split the string into two parts: the part to remain unchanged and the part to be rotated
  let part1 = str.slice(0, str.length - count); // 2nd is first index to exclude
  let part2 = str.slice(str.length - count);
  // rotate the second part
  part2 = part2.slice(1) + part2[0];
  // join the first part back together with the rotated second part
  str = part1 + part2;
  // convert the string to a number and return it
  return Number(str);
}

/* their solution
function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}*/

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917