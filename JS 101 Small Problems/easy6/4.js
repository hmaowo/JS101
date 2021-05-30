console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

function centerOf(string) {
  if (string.length % 2 === 0) {
    return string.slice((string.length / 2) - 1, (string.length / 2) + 1);
  } else {
    let start = Math.floor(string.length / 2); //rounds down for odd number
    let end = start + 1;
    return string.slice(start,end);
  }
}