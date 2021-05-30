/* eslint-disable max-len */
console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]

/*
// This one works
function sequence(num) {
  let arr = [];
  for (let count = 1; count <= num; count++) {
    arr.push(count);
  }
  return arr;
} */

/*
// This function doesn't work
function sequence(num) {
  let arr = [];
  arr.length = num; // this method doesn't work because arr is [<5 empty items>]
  arr.forEach((_, index) => {
    arr[index] = index + 1;
    console.log(index);
  });
  return arr;
} */

function sequence(num) {
  return [...Array(num)].map((_, index) => { // use _ for unused argument
    return index + 1;
  });
}
/*
...Array(num)] the Array constructor creates a new array with the number of values
 specified in its argument. These are initially empty values and the array appears 
 as: [ <5 empty items> ] if the input number is 5. Using the ... spread operator
makes an array that appears as: [undefined,undefined,undefined,undefined, undefined] 
*/