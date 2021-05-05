function random (min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

let age = random(20, 120);
console.log(`Teddy is ${age} years old!`);

/* further exploration
It would make a difference if Math.round() is used because Math.floor makes
sure that the number does not round up and go over the limit. For example if
Math.random chose the number 0.9999. That is (0.999 * (120- 20 )) + 20 = 120.99
*/