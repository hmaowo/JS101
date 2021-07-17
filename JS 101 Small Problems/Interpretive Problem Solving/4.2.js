
function printStarRow(spacesBetween, padding) {
  let spaces = " ".repeat(spacesBetween);
  let pad = " ".repeat(padding);
  let asterisks = ["*", "*", "*"];

  console.log(`${pad}${asterisks.join(spaces)}${pad}`);
}

// the more padding, the less spacesBetween, so they are inversely related
function star(size) {
  let middleRow = Math.floor(size / 2);

  let increment = 1;
  for (let index = 0; index >= 0; index += increment) {
    if (index === middleRow) {
      console.log("*".repeat(size));
      increment = -1;
      continue;
    }
    let spacesBetween = ((size - 3) / 2) - index;
    let padding = index;
    printStarRow(spacesBetween, padding);
  }
}

star(7);
star(9);
