function union (array1, array2) {
  let numString = array1.concat(array2).sort().join('');
  numString = numString.replace(/(.)(?=.*\1)/g, '');
  return numString.split('');
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

/*
** Notes
** Spread Syntax ...args
*/
