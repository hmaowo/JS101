console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

function staggeredCase(str) {
  let count = 0;
  return str.split('')
    .map((letter) => {
      if (/[^a-z]/gi.test(letter)) {
        count += 0;
        return letter;
      } else {
        count += 1;
        return count % 2 === 1 ? letter.toUpperCase() : letter.toLowerCase();
      }
    })
    .join('');
}

/* their solution
function staggeredCase(string) {
  let needUpper = true;

  return string
    .split("")
    .map(char => {
      char = char.toLowerCase();
      if (char >= 'a' && char <= 'z') {
        if (needUpper) {
          needUpper = false;
          return char.toUpperCase();
        } else {
          needUpper = true;
          return char.toLowerCase();
        }
      } else {
        return char;
      }
    })
    .join("");
} */