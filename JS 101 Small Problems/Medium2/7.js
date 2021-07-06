/* eslint-disable max-len */
/*
Problem
  - Rule: write a function that sorts an array using the bubble sort
    algorithm
    - The sorting should be done "in-place" — that is, the function should mutate
      the array.
    - You may assume that the array contains at least two elements.
  - Info: how bubble sort works
    - A bubble sort works by making multiple passes (iterations) through an array.
    - On each pass, the two values of each pair of consecutive elements are compared.
    - If the first value is greater than the second, the two elements are swapped.
    - This process is repeated until a complete pass is made without performing any
      swaps. At that point, the array is completely sorted.


*/

// Data structure given, in the chart

/*
Edited algorithm
  - create a function called bubbleSort and intakes an array as argument
    - create an outer while (true) loop to track whether we need to keep sorting the array
    -  The loop terminates the first time it iterates through all the comparisons
        without making any swaps, which it keeps track of by using the swapped variable.
      - let swap = true;
      - we need to iterate over the array
      - use array.ForEach(current element, index)
        - during each iteration, compare current element with next by doing
        - if (cv > array[index + 1])
        - swap the two elements.
        - swap = false;
      - if (swap) break; //if (true) then break
  - return array
*/

function bubbleSort(arr) {
  while (true) {
    let swap = true;
    arr.forEach((cv, index) => {
      if (cv > arr[index + 1]) {
        [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
        swap = false;
      }
    });
    if (swap) break;
  }
  return arr;
}
// Examples
let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]