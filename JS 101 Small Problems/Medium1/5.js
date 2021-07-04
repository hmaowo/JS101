/* eslint-disable max-lines-per-function */
/*
P: problem
- input: String
- output: string with every occurence of a "number word"
  converted to its corresponding digit character
- question: is it case sensitive, will the number words ever be
  capitalized
*/
// A: algorithim
// create an object matching number word with digit character
// split string into array of words, separate using ' '
// iterate over array using map, to return an array also
//  - match letters only(the number word) and store in string
//  - use string.replace() to replace the number word with digit character
//  - return the word element
//  convert the array back into string

// E: examples
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

function wordToDigit(str) {
  let convertObj = {
    // properties shouldn't be quoted as all quotes are redundant
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  return str.split(' ')
    .map(word => {
      let numberWord = word.match(/[a-z]/gi);
      word = word.replace(numberWord, convertObj[numberWord]);
      // replace has some implicit coercion to string
      return word;
    })
    .join(' ');
}

/* their solution 
const NUM_WORDS = {
  zero:  0,
  one:   1,
  two:   2,
  three: 3,
  four:  4,
  five:  5,
  six:   6,
  seven: 7,
  eight: 8,
  nine:  9,
};

// they iterated over the Object.keys
function wordToDigit(sentence) {
  Object.keys(NUM_WORDS).forEach(word => {
    let regex = new RegExp(word, 'g');
    sentence = sentence.replace(regex, NUM_WORDS[word]);
  });

  return sentence;
}

The solution uses a NUM_WORDS object as a lookup table for 
converting each numeric word to its digit counterpart. 
The solution iterates over the keys of the NUM_WORDS object and 
iteratively replaces all instances of each numeric word in the 
sentence argument. During each iteration, the solution creates a 
RegExp object and assigns it to the regex variable. The solution
 passes this regex as an argument to the String.prototype.replace 
 method, reassigning the value of the sentence via the statement:
