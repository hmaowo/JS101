console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

/*
function removeVowels(array) {
  return array.map(word => word.replace(/[aeiou]/gi, ''));
}*/

function removeVowels(arr) {
  return arr.map(word => [...word].filter(char => {
    return !('aeiouAEIOU'.includes(char));
  }).join(''));
}