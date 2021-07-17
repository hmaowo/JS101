// classmate's answer
function star(oddNumber) {
  let dc = 1;
  let symbol = "*";
  for (let count = 0; count > -1; count += dc) {
    if (count === Math.floor(oddNumber / 2)) {
      console.log(symbol.repeat(oddNumber));
      count = Math.floor(oddNumber / 2) - 1;
      // aka middle - 1
      // could use "continue" instead, to skip over rest of function
      dc = -1;
    }
    let outer = " ".repeat(count);
    let inner = " ".repeat(((oddNumber - 3) / 2) - count);
    console.log(outer + symbol + inner + symbol + inner + symbol + outer);
  }
}

star(7);
star(9);