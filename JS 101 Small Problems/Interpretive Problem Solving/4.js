/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
/*
Understanding the problem:
  - input:
    - size: an odd integer that indicates the size of the grid
      that the "8 - pointed star" will occupy. Its smallest
      value is 7.
  - output:
    - "8-pointed star": going by the example, the function creates 
      the "star" by logging size rows of asterisks (*).
      - Each row is of length size.
      - Each row has three asterisks.
      - The rows have varying amounts of spaces between the three asterisks and 
        varying amounts of padding on the left and right sides.
      - The middle row is an exception—it logs out size number of asterisks 
      and no spaces. */

function getPaddingSequence(size) {
  let paddingSequence = [];
  let paddingIncrement = 1;
  let spacesPadding = 0;
  while (spacesPadding >= 0) {
    paddingSequence.push(spacesPadding);
    if (spacesPadding === (size - 3) / 2) {
      paddingSequence.push(spacesPadding);
      paddingIncrement = -1;
    }
    spacesPadding += paddingIncrement;
  }
  return paddingSequence;
}
function getSpaceSequence(size) {
  let betweenSequence = [];
  let betweenIncrement = -1;
  let spacesBetween = (size - 3) / 2;
  while (spacesBetween <= (size - 3) / 2) {
    betweenSequence.push(spacesBetween);
    if (spacesBetween === 0) {
      betweenSequence.push(spacesBetween);
      betweenIncrement = 1;
    }
    spacesBetween += betweenIncrement;
  }

  return betweenSequence;
}

function printStar(spaceBetween, padding) {
  let asterisks = ["*", "*", "*"];
  let repeatPadding = " ".repeat(padding);
  let repeatSpaces = " ".repeat(spaceBetween);
  console.log(`${repeatPadding}${asterisks.join(repeatSpaces)}${repeatPadding}`);
}

function star(size) {
  let betweenSequence = getSpaceSequence(size);
  let paddingSequence = getPaddingSequence(size);

  console.log(betweenSequence);
  console.log(paddingSequence);

  let index = 0;
  for (let row = 1; row <= size; row++) {
    if (row === Math.floor(size / 2) + 1) {
      console.log("*".repeat(size));
      continue;
    }
    printStar(betweenSequence[index], paddingSequence[index]);
    index += 1;
  }
}

// Examples
star(7);
//star(9);


/*
Algorithm
  - create function that generates each row's spaces (rowSpaces)
    - set betweenSequence to [];
    - set paddingSequence to [];
    - set betweenIncrement variable to -1
    - set paddingIncrement variabble to 1
    - set spacesbetween to (size - 3) / 2
    - set spacesPadding to 0
    - use a while loop that exits when number is greater than 0
      - betweenSequence.push(spacesBetween);
      - paddingSequence.push(spacesPadding);
      - when spacesBetween is equal to 0
          betweenIncrement = 1;
          paddingIncrement = - 1;
      - spacesBetween += betweenIncrement;
      - spacesPadding += paddingIncrement;
  - create main function star which joins the
    - create for loop that iterates through each row
    - for each row, print characters based on sequences
*/