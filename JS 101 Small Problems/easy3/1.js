// further exploration
function crunch(string) {
  console.log(string.replace(/(.)(?=\1)/ig, ''));
}

/*
function crunch (string) {
  let newString = "";
  for (let index = 0; index < string.length; index++) {
    if (string[index] !== string[index - 1]) {
      newString += string[index];
    }
  }
  console.log(newString);
}
*/

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
