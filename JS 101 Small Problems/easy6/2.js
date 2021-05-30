console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

function doubleConsonants(string) {
  return string.split('').map(char => {
    if (char.match(/[^aeiouAEIOU\W]/g)) {
      // ^ caret is the "not" (!) operator in regex
      char = char.repeat(2);
    }
    return char;
  }).join('');
}