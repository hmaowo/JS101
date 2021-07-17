/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/*
Understanding problem
- input: word as a string
- Output: boolean value of true or false
- Rules:
  - we need to map out the path from input(a string) to the output
    (a boolean). We can derive the following requirements from
    the problem description:
    1. We're given 13 two- letter blocks.
    2. If the input contains any two letters from the same block,
       return false.
    3. If a block is used more than once, return false.
    4. Otherwise, return true.
    5. Ignore case when appyling the block rules.

Data Structure and Algorithm

array :
['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW',
'HU', 'VI', 'LY', 'ZM']
This requires changing letter to uppercase before searching.

Or we can use
['BObo', 'XKxk', 'DQdq', 'CPcp', 'NAna', 'GTgt', 'REre', 'FSfs',
'JWjw', 'HUhu', 'VIvi', 'LYly', 'ZMzm']

- define an array that contains the 13 two letter blocks
- turn the input string into an array of letters and iterate through it.
- For each letter:
  - if we can't find a block that contains the letter, return false
  - otherwise, remove the block that contains the letter from the blocks
    array.
- return true after we've processed all the letters in the input string.
*/

function isBlockWord (word) {
  word = word.toUpperCase();
  let blocks  = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW',
    'HU', 'VI', 'LY', 'ZM'];

  let arr = word.split('');

  // careful to not use forEach here because return won't exit isBlockWord function
  for (let index = 0; index < arr.length; index++) {
    let letter = arr[index];
    let matchingBlock = blocks.filter(block => {
      return block.includes(letter);
    })[0]; // need to get the value from [], because can't compare arrays by their value

    if (matchingBlock === undefined) { //  [] !== []
      return false; // blocks doesn't contain the letter
    } else {
      blocks.splice((blocks.indexOf(matchingBlock)), 1);
    }
  }

  return true;
}


// examples
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false