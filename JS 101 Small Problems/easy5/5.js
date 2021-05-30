console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

function interleave(array1, array2) {
  let newArray = [];
  for (let index = 0; index < array1.length; index++) {
    newArray.push(array1[index], array2[index]); // can push multiple items
  }
  return newArray;
}

// using forEach
function interleave(array1, array2) {
  let array = [];
  array1.forEach((element, index) => {
    array.push(element, array2[index]);
  });
  return array; 
}

// using map
function interleave(array1, array2) {
  return array = array1.map((element, index) => {
    return (element, array2[index]);
  });
}

// using reduce
function interleave(array1, array2) {
  return array1.reduce((acc, currentValue, index) => {
    acc.push(currentValue, array2[index]);
    return acc;
  }, []);
}