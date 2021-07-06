/*
Problem
  - input: count
  - output: difference between square of the sum of the first count
    positive integers & sum of the square of the first count positive
    integers
  - we assume that there is no negative integers in the input?
*/

// Examples
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

// Data Structure
// 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)

/*
Algorithm
  - create a function called sumSquareDifference that intakes a
    count number as argument
      return squareOfSum() - sumOfSquares()
      // invoking the functions here and returning the difference of
        the function return values
  - create a function called squareOfSum and pass count to it
     - we need to get the square of the sum of the count ->
       - set sum = 0
       - create a loop that starts at 1 and terminates when the counter
       equal to the count number
         - during each iteration, sum += counter
     - then set square = sum ** 2
     - return square number
  - create a function called sumOfSquare
    - we need to get the sum of the squares of the count positive
      integers
      - let arrOfSquares = [];
      - create a loop that starts at 1 and termiantes when counter
        is equal to the count number
        - during each iteration, push the square of counter(counter**2)
           into the arrofSquares array
      - when loop ends, we need to sum the array of squares
      - let's use the array.reduce() function : so
        arrOfSquares.reduce((a,b) => a + b);
      - return the value at the end of reduce function
    
*/

// // translate to code
// function sumSquareDifference(count) {
//   return squareOfSum(count) - sumOfSquare(count);
// }

// function squareOfSum(count) {
//   let sum = 0;
//   for (let counter = 1; counter <= count; counter++) {
//     sum += counter;
//   }
//   return sum ** 2; // square of sum
// }

// function sumOfSquare(count) {
//   let arrOfSquares = [];
//   for (let counter = 1; counter <= count; counter++) {
//     arrOfSquares.push(counter ** 2); //not ideal, use Math.pow(x, y)
//   }
//   let sum = arrOfSquares.reduce((a, b) => a + b);
//   return sum; // sum of squares
// }

// Their solution
// faster by using same loop to do the sum and sum of squares
function sumSquareDifference(count) {
  let sum = 0;
  let sumOfSquares = 0;
  for (let number = 1; number <= count; number++) {
    sum += number;
    sumOfSquares += Math.pow(number, 2);
  }
  return Math.pow(sum, 2) - sumOfSquares;
}