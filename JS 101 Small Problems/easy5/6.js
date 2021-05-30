console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

function multiplicativeAverage(arr) {
  let product = arr.reduce((arr, cv) => arr * cv);
  let average = product / arr.length;
  return String(average.toFixed(3));
}