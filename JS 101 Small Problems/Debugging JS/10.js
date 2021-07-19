function neutralize(sentence) {
  let words = sentence.split(" ");

  for (let count = 0; count < words.length; count++) {
    let word = words[count];
    if (isNegative(word)) {
      const index = words.indexOf(word);
      words.splice(index, 1);
      count -= 1;
    }
  }
  return words.join(" ");
}

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.