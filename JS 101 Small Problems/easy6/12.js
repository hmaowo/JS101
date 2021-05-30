console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
// these tests should log true

function isBalanced(string) {
  let paren = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] === '(') {
      paren += 1;
    } else if (string[index] === ')') {
      paren -= 1;
    }
    if (paren < 0) return false; // can never start with ).
  }
  return paren === 0;
}