/* eslint-disable max-len */
/*
P
  - Input: lengths of the 3 sides of triangle
  - Output: returns one of the four strings: ''equilateral', 'isosceles',
    'scalene', or 'invalid'.
  - Rules
    - To be a valid triangle
        - sum of the lengths of the two shortest sides must be greater than the length 
        of the longest side.
        - every side must have a length greater than 0
        - If either of these conditions is not satisfied, the triangle is invalid.
    - Equilateral: All three sides are of equal length.
    - Isosceles: Two sides are of equal length, while the third is different.
    - Scalene: All three sides are of different lengths.
  - Hint: 
    Valid triangles must have the following two characteristics:
    1. All sides must have lengths greater than zero — i.e.,
    the shortest side is greater than zero (shortest > 0).
    2. The sum of the two shortest sides must be greater than the longest side
    (shortest + middle > longest).
*/
// Examples
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

function triangle(a, b, c) {
  [a, b, c] = [...arguments].sort((a, b) => a - b);

  if ((a <= 0) || (a + b < c)) {
    return 'invalid';
  } else if (a === b && a === c) {
    return 'equilateral';
  } else if (a === b || b === c || a === c) { //if just one side is equal to each other
    return 'isosceles';
  } else {
    return 'scalene';
  }
}