/* eslint-disable max-len */
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

/*
function reverse(arr) {
  let copy = arr.slice();
  copy.forEach((_,index) => {
    arr[index] = copy[copy.length - index - 1];
  });
  return arr;
}*/

function reverse(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < array.length / 2) {
    [array[leftIndex], array[rightIndex]] =
      [array[rightIndex], array[leftIndex]];
    //syntax way to reassign multiple values
    leftIndex += 1;
    rightIndex -= 1;
  }
  return array;
}

/*This solution is straightforward; it sets one index to point to the beginning
of the array, another index to point to the end of the array, and then walks
through the Array exchanging elements at each step.Note that the while loop
terminates at the middle of the list. If we continued, we would end up rebuilding
the original array. */