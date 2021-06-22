console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

// good solution
function swapCase(words) {
  return words.split('').map(arr => {
    if (arr === arr.toUpperCase()) {
      return arr.toLowerCase();
    } else {
      return arr.toUpperCase();
    }
  }).join('');
}

// unncessary dont need to split twice
// function swapCase(str) {
//   return str
//     .split(' ')
//     .map(word => {
//       return [...word].map(letter => {
//         return letter === letter.toUpperCase() ? letter.toLowerCase()
//           : letter.toUpperCase();
//       }).join('');
//     })
//     .join(' ');
// }

/* their solution
function swapCase(string) {
  return string
    .split("")
    .map(char => {
      if ((char >= 'a') && (char <= 'z')) {
        return char.toUpperCase();
      } else if ((char >= 'A') && (char <= 'Z')) {
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join("");
}*/