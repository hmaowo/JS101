/*
** ddaaiillyy ddoouubbllee
** Write a function that takes a string argument and returns a new string that
** contains the value of the original string with all consecutive duplicate
** characters collapsed into a single character.
*/

function crunch (string) {
  let newString = "";
  for (let index = 0; index < string.length; index++) {
    if (string[index] !== string[index - 1]) {
      newString += string[index];
    }
  }
  console.log(newString);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

/*
Further exploration: using regular expressions
*/