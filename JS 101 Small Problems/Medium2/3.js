/* 
P
  - Input: takes 3 angles of a triangle
  - Output: returns 'right', 'acute', 'obtuse', or 'invalid'
  - Rules:
    - Right: One angle is a right angle (exactly 90 degrees).
    - Acute: All three angles are less than 90 degrees.
    - Obtuse: One angle is greater than 90 degrees.
    - To be a valid triangle, the sum of the angles must be
      exactly 180 degrees, and every angle must be greater than 0.
      If either of these conditions is not satisfied, the
      triangle is invalid.

A
  - write a function called triangle that takes 3 angles as argument
  - if sum of angles is not 180, and every angle is not greater than 0, return
    invalid
  - etc.
*/

function triangle(a, b, c) {
  let angles = [a, b, c];
  let sum = angles.reduce((a, b) => a + b);

  if (sum !== 180 || a <= 0 || b <= 0 || c <= 0) {
    return 'invalid';
  } else if (angles.some(angle => angle === 90)) {
    return 'right';
  } else if (angles.every(angle => angle < 90)) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

// Examples
console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"