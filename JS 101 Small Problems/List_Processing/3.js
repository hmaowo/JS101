console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

function multiplyAllPairs(arr1, arr2) {
  let newArr = [];

  for (let counter = 0; counter < arr1.length; counter++) {
    for (let count = 0; count < arr2.length; count++) {
      newArr.push(arr1[counter] * arr2[count]);
    }
  }

  return newArr.sort(function (a, b) {
    return a - b;
  });
}

/*
function multiplyAllPairs(array1, array2) {
  const result = [];

  array1.forEach(number1 => {
    array2.forEach(number2 => {
      result.push(number1 * number2);
    });
  });

  return result.sort((a, b) => a - b);
} */