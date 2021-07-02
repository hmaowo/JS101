function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).concat(arr[0]);
}
// my first attempt
// function rotateArray(arr) {
//   if (Array.isArray(arr)) {
//     if (arr.length === 0) {
//       return [];
//     }
//     let newArr = arr.slice();
//     let firstElem  = newArr.shift();
//     newArr.push(firstElem); // if use concat it would return new array
//     return newArr;
//   } else {
//     return undefined;
//   }
// }

// The push() adds elements to the end of an array and
// returns the new length of the array. The concat() method is
// used to merge arrays. Concat does not change the existing arrays,
// but instead returns a new array.

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

// To understand the problem better, let's take a closer look at the expected input and output.

// Input
// an array
// Output
// a new array, since we can't mutate the original array
// Rules
// if the input is not an array, return undefined
// if the input is an empty array, return []
// for a non - empty array, slice off the first element and append it to the end of the array