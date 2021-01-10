function penultimate(string) {
  let words = string.split(" ");
  return words[words.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

/* 
** Further exploration: Suppose we need a function that retrieves the middle word of a
** phrase/sentence. What edge cases need to be considered?
** How would you handle those edge cases without ignoring them?
** Write a function that returns the middle word of a phrase or sentence.
** It should handle all of the edge cases you thought of.

** edge cases: string that contains only white space
**             string with one word
**             string with no words
**             string that is even length with no middle character
*/ 


function middleOfPhrase(string) {
  if (string) {
    string = string.trim();
    if (string.length === 0) {
      return "Please enter a prhase.";
    } else if (string.length === 1){
      return string;
    } else {
      let words = string.split(" ");
      if (words.length === 1) { 
        return string; 
      } else if (words.length % 2 === 0) { 
        return "There is no middle word because the phrase is of an even length."
      } else {
        return words[Math.round((words.length - 1) / 2)];
      }
    }
  } else { 
    return "Please enter a phrase.";
  }
}

console.log(middleOfPhrase()); // logs "Please enter a phrase."
console.log(middleOfPhrase("  ")); // logs "Please enter a phrase."
console.log(middleOfPhrase(" ")); // logs "Please enter a phrase."
console.log(middleOfPhrase('a')); // logs 'a'
console.log(middleOfPhrase('           a  ')); // logs 'a' 
console.log(middleOfPhrase("Launch School is great!")); // logs "There is no middle word 
// because the phrase is of an even length."
console.log(middleOfPhrase("1 2 3 4 5")); // logs 3
