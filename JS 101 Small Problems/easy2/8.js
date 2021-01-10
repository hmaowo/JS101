// returns every other element of the array.

function oddities(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i += 2) {
    newArray.push(array[i]);
  }
  return newArray;
}


console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

/* 
** Further exploration
** Try to solve this exercise in a different way. Using the array iteration methods. 
*/

/*
//using for each
function oddities (array) {
  let filteredArray = [];
  array.forEach(function (element, index) {
    if (index % 2 === 0) {
      filteredArray.push(element); // can also be written as filteredArray.push(array[index]);
    }
  });
  return filteredArray;
}

//using filter
function oddities(array) {
  return array.filter((element, index) => index % 2 === 0);
// need to put element, then index because that's the order of the syntax
}

//another way to write filter
function oddities(array) {
  return array.filter(function (element, index) {
    return index % 2 === 0;
  });
}

Don't use the function bellow which has array.map because it will return undefined when there
is no specified return for each iteration.

//using map
function oddities (array) {
  let newArray = array.map(function (element, index) {
    if (index % 2 === 0) {
      return element;
    };
  });
  return newArray;
}
*/ 
