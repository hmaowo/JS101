function leadingSubstrings(str) {
  return str.split('').map((_, index) => {
    return str.slice(0, index + 1);
  });
}
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
/*
function leadingSubstrings(str) {
  let result = [...str].map((_, idx) => str.slice(0, idx + 1));

  console.log(result);
  return result;
}*/

/* first attempt
function leadingSubstrings(str) {
  let arr = [];
  for (let counter = 0; counter < str.length; counter++) {
    let newStr = '';
    for (let count = 0; count <= counter; count++) {
      newStr += str[count];
    }
    arr.push(newStr);
    newStr = '';
  }
  console.log(arr);
}*/