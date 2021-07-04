/*
P
  - Info:
    - recursive function can be rewritten as a non-recursive
      procedural function
    - recursive functions can be extremely slow and may require
      massive quantities of memory and/or stack space.
    - gettting to 50th fibonacci number takes a long time
    - JS can accurately acompute intgers up to 16 digits long
    - fibbonacci(78) is the largest number you can accurately compute
      simple operations in JS
  - Rules
    - rewrite the recursive fibonacci function so that it computes
      its results without using recursion
  - Input: nth (number)
  - Output: the nth fibonacci number
*/

//Examples
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050

/*
D
  f(1)
  f(2)
  f(3) = f(1) + f(2)
  f(4) = f(3) + f(2)
  f(5) = f(4) + f(3)

A
  - create a function called fibonacci that takes nth as argument
  - (reminder that parameter: initialized to values of arguments supplied)
  - set values of first two fibonacci numbers (first two iterations done
    manually)
    - set fib1 = 1, fib2 = 1, fibSum = 0
  - create a loop that terminates when loop reaches the nth - 2
    - during each iteration, set fibSum = fib1 + fib2
    - set fib2 = fib1
    - set fib1 = fibSum
*/
function fibonacci(nth) {
  let a = 1;
  let b = 1;
  let sum = 0;

  for (let count = 3; count <= nth; count++) {
    sum = a + b;
    b = a;
    a = sum;
  }
  return sum;
}
// attempt 1
// function fibonacci(nth) {
//   let fib1 = 1;
//   let fib2 = 1;
//   let fibSum = 0;
//   for (let count = 0; count < nth - 2; count++) {
//     fibSum = fib1 + fib2; // 1 + 1
//     fib2 = fib1;
//     fib1 = fibSum;
//   }
//   return fibSum;
// }

/* their solution

function fibonacci(nth) {
  let previousTwo = [1, 1];

  for (let counter = 3; counter <= nth; counter += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }

  return previousTwo[1];
}

/*
If you run fibonacci(100), you will notice that there is a
discrepancy in the result. This is because the size of the 100th
 Fibonacci number is very big. JavaScript does not handle big
 numbers well. In fact, running fibonacci(10000) returns Infinity,
 because the 10000th Fibonacci number is greater than the value of
 Number.MAX_VALUE
*/