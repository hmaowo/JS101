function runningTotal(array) {
  let newArray = [];
  array.reduce((accumulator, element) => {
    newArray.push(accumulator + element);
    return accumulator + element;
  }, 0);
  return newArray;
}

/* further exploration
function runningTotal(array) {
  let sum = 0;
  return array.map(currentValue => {
    sum += currentValue;
    return sum;
  });
}
*/

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []