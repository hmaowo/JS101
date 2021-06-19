console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

// my solution
function letterCaseCount(str) {
  let obj = {lowercase: 0, uppercase: 0, neither: 0};

  [...str].forEach(letter => {
    if (/[^a-z]/gi.test(letter)) {
      obj['neither'] += 1;
    } else if (letter === letter.toUpperCase()) {
      obj['uppercase'] += 1;
    } else {
      obj['lowercase'] += 1;
    }
  });

  return obj;
}

/* their solution
function letterCaseCount(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
} */

// short solution
// let letterCaseCount = (str) => ({
//   lowercase: (str.match(/[a-z]/g) || []).length,
//   uppercase: (str.match(/[A-Z]/g) || []).length,
//   neither: (str.match(/[^a-zA-Z]/g) || []).length,
// });

// their solution1
// function letterCaseCount(string) {
//   let counts = { lowercase: 0, uppercase: 0, neither: 0 }

//   for (let index = 0; index < string.length; index += 1) {
//     let char = string[index];
//     if ((char >= 'a') && (char <= 'z')) {
//       counts.lowercase += 1;
//     } else if ((char >= 'A') && (char <= 'Z')) {
//       counts.uppercase += 1;
//     } else {
//       counts.neither += 1;
//     }
//   }

//   return counts;
// }