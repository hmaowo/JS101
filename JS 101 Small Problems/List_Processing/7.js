console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

function sumOfSums(arr) {
  return arr
    .map((_, idx) =>
      arr.slice(0, idx + 1).reduce((sum, value) => sum + value)
    )
    .reduce((sum, value) => sum + value);
}

/* example1
function sumOfSums(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr.slice(0, index).reduce((accum, cv) => accum + cv);
  }
  return sum;
}*/

/* attempt 1
function sumOfSums(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    for (let count = 0; count <= index; count++ ) {
      sum += arr[count];
    }
  }
  console.log(sum);
}*/