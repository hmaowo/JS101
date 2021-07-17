/*
Understanding Problem
  - input: size
  - output: an 8 pointed star in NxN grid

  - Info:
    - space between asterisks starts at (size - 3 ) / 2 in first row,
    then decrements by 1 for each row
    - padding is inversely reladed, starts at 0, increments by 1,
      ends at (size - 3) / 2
Algorithm
  - create a function that builds the row that takes padding and spacesBetween
  - main function star
    - for loop for rows before middle row
      - calls buildsRow
    - print row of asterisks
    - for loop for rows below middle row
Data Structure
  spaces between [2, 1, 0, 0, 1, 2] which uses (size - 3) / 2
  padding [0, 1, 2, 2, 1, 0]
*/

function printStarRow(spacesBetween, padding) {
  let spaces = " ".repeat(spacesBetween);
  let pad = " ".repeat(padding);
  let asterisks = ["*", "*", "*"];

  console.log(`${pad}${asterisks.join(spaces)}${pad}`);
}

// the more padding, the less spacesBetween, so they are inversely related
function star(size) {
  let middleRow = Math.floor(size / 2) + 1;
  let index = 0;

  for (let row = 1; row < middleRow; row++) {
    let spacesBetween = ((size - 3) / 2) - index;
    let padding = index;
    printStarRow(spacesBetween, padding);
    index += 1;
  }

  index = 0;
  for (let row = middleRow + 1; row <= size; row++) {
    let spacesBetween = index;
    let padding = ((size - 3) / 2) - index;
    printStarRow(spacesBetween, padding);
    index += 1;
  }
}
star(7);
star(9);

