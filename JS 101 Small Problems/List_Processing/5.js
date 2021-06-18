console.log(substrings('abcde'));

function substrings(str) {
  return [...str].reduce((acc, _, index) => {
    let newStr = str.substring(index);
    return acc.concat(leadingSubstrings(newStr));
  }, []);
}

function leadingSubstrings(str) {
  return [...str].map((_, index) => str.slice(0, index + 1));
}

/* first attempt
function substrings(str) {
  let arr = [];
  str.split('').forEach((_, index) => { // be careful about how you split
    for (let count = index; count < str.length; count++) {
      arr.push(str.slice(index, count + 1));
    }
  });
  return arr;
}*/

// returns
// ["a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e"]