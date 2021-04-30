function wordSizes(string) {
  string = string.replace(/^\W/, '');
  let wordObject = {};
  let array = string.split(' ');

  for (let counter = 0; counter < array.length; counter++) {
    let key = array[counter].length;
    if (key > 0) {
      if (!wordObject[key]) {
        wordObject[key] = 0;
      }
      wordObject[key] += 1;
    }
  }

  return wordObject;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}