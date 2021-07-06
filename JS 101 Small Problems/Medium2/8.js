/* eslint-disable max-len */
/*
Problem
  - rule: print the longest sentence in a string based on
          the number of words
    - it's about manipulating and processing strings
    - treat every character that is not spaces or sentence ending
      characters as a word. So -- should count as word.
    - question:  should comma be a word?
  - input: string
  - output: log the longest sentence and word to console

Algorithm
  - create function longestSentence(str)
    - invoke function for getting longest sentence getLongest(str)
    - invoke function that takes the longest sentence, and returns the wordCount
    - invoke a print function that logs the info above
    - in getLongest()
      - create an array for storing the sentences arr[]
      - iterate over the string using for loop
        - terminate loop when index is equal to str.length
        - set marker = 0;
        - if str[index] is a sentence ending character
          - then get the sentence by using str.slice(sentenceMarker, index + 1)
            // remenber slice (start, end) end is excluded.
          - push this into arr[]
          - set maker = index + 2; // excluding the space between sentence
      - sort arr from longest to shortest sentence( in terms of word count!!)
      - return sorted array [0];
  - wordCounter(longestSentence)
    - returns wordCount
  - print(sentence, wordCount)

*/

function longestSentence(str) {
  let arr = getSentences(str);
  let sentence = sortSentences(arr);
  let wordCount = wordCounter(sentence);
  print(sentence, wordCount);
}

function getSentences(str) {
  let arr = [];
  let marker = 0;
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === '?' || str[index] === '.' || str[index] === '!') {
      arr.push(str.slice(marker, index + 1));
      marker = index + 2;
    }
  }
  return arr;
}

function sortSentences(array) { // arr will get mutated because its pass by reference
  array.sort((a, b) => {
    return b.split(' ').length - a.split(' ').length;
  });

  return array[0];
}

function wordCounter(longest) {
  return longest.split(' ').length;
}

function print(sentence, wordCount) {
  console.log(sentence + '\n');
  console.log(`The longest sentence has ${wordCount} words.\n`);
}

// Examples
let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.