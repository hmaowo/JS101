function palindromes(str) {
  return substrings(str).filter(isPalindrome);
  /*
  let arr = substrings(str);
  return arr.reduce((acc, cv) => {
    if (isPalindrome(cv)) {
      acc.push(cv);
    }
    return acc;
  }, []); */
}

function isPalindrome(word) {
  return word.length > 1 && word === [...word].reverse().join('');
}

function substrings(str) {
  return [...str].reduce((acc, _, index) => {
    let newStr = str.substring(index);
    return acc.concat(leadingSubstrings(newStr));
  }, []);
}

function leadingSubstrings(str) {
  return [...str].map((_, index) => str.slice(0, index + 1));
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]