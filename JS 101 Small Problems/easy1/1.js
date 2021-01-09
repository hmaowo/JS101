function isOdd (number) { 
  return Math.abs(number) % 2 == 1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

/* Further exploration Repeat this exercise with a technique different from the one that you used, 
and different from the one provided. Also consider adding a way for the user to specify the
 limits of the odd numbers logged to the console. */