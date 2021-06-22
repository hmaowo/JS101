console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []

function wordLengths(str) {
  if (str === undefined || str.length === 0) {
    return [];
  } else {
    return str
      .split(' ')
      .map(word => `${word} ${word.length}`);
  //The placeholder expression result is implicitly converted to a string.
  }
}

// Note that arrow functions do not have access to the arguments object.
// const wordLengths = (...args) => {
//   if (args.length === 0 || args[0].length === 0) {
//     return [];
//   }

//   return args[0].split(" ").map(function (word) {
//     return `${word} ${String(word.length)}`; // unnessary!
//   });
// };

// function wordLengths(words) {
//   if (arguments.length === 0 || words.length === 0) {
//     return [];
//   }

//   return words.split(' ').map(function (word) {
//     return word + ' ' + String(word.length);
//   });
// }