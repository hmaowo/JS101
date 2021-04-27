function stringy(number) {
  return `${'10'.repeat(Math.floor(number / 2))}${'1'.repeat(number % 2)}`;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"