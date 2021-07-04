/* eslint-disable max-len */
/*
P
- Input: nth
- Output: nth Fibonacci number
- Rules:
  - write a recursive function that computes the nth Fibonacci number
- info:
  - It calls itself at least once.
  - It has an ending condition — e.g., if (num === 1), in the sum function above.
  - The results of each recursion are used in each step — e.g., num + sum(num - 1) uses sum(num - 1).

  E
  - this recursion example computes the sum of all integers between 1 and nth
  function sum(num) {
    if ( num === 1) {
      return 1;
    }
    return num + sum(num - 1);
  }
D
    F(1) = 1
    F(2) = 1
    F(nth) = F(nth - 1) + F(nth - 2) where nth > 2

    F(1) = 1
    F(2) = 1
    F(3) = 1 + 1 = 2
    F(4) = 1 + 2 = 3
    F(5) = 2 + 3 = 5
    F(6) = 3 + 5 = 8

    F(1) = 1
    F(2) = 1 
    F(3) = 1 + 1
    F(4) = 1 + 1 + 1
    F(5) = (1 + 1) + (1 + 1 + 1)
    f(n)
  f(2)
    n is equal to 2, so terminate loop, return 1

  f(4)
   return f(3) + f(2)
        f(2) + f(1)   +     1
        1 + 1 + 1
  f(5)
    return f(4) + f(3)
    f(3) + f(2) + f(2) + f(1)
    f (2) + f(1) + 1 + 1 + 1
    1 + 1 + 1 + 1 = 5
A
  // create a function fibonacci and take in a number nth (num)
  // if num is less than or equal to 2, return 1
  // return fibonacci(nth - 1) + fibonacci(nth - 2)
C
*/

function fibonacci(nth) { // 3
  if (nth <= 2) {
    return 1; // return terminates entire function
  }
  return fibonacci(nth - 1) + fibonacci(nth - 2);
}
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765