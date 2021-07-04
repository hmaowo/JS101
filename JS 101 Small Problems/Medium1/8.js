/*
P
  - info:
    - memoization invovles saving a computed answer for future reuse
      instead of computing it from scratch everytime it is needed.
    - in fibonacci function, memoization saves calls to fibonacci(nth-2)
      because the necessary values have already been computed by recursive calls
      to fibonacci(nth - 1)
  - rules:
    - refactor the recursive fibonacci function to use memoization
  - hint:
    - use a lookup table, such as an object, for storing and accessing
      previously computed values
*/

/*
Data Structure

f(1) = 1
f(2) = 1
f(3) = f(3-1) + f(3-2)
f(n) = f(n - 1) + f(n - 1)

Algorithm
  - copy paste recursive fibonacci function to here
  - create an object for storing and accessing previously computed values
  -
*/
// attempt 2
let obj = {};
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else if (obj[nth]) {
    return obj[nth];
  } else {
    obj[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return obj[nth];
  }
}

// // attempt 1 : it works
// let obj = {};
// function fibonacci(nth) {
//   if (obj[nth]) {
//     return obj[nth];
//   }

//   if (nth <= 2) {
//     return 1;
//   }

//   let a = fibonacci(nth - 1);
//   let b = fibonacci(nth - 2);
//   obj[nth - 1] = a;
//   obj[nth - 2] = b;

//   return a + b;
// }

//Examples
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050