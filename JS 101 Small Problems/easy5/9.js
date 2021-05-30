let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

/*
function countOccurrences(cars) {
  let count = 1;
  cars.sort().forEach((element, index) => {
    if (element === cars[index + 1]) {
      count++;
    } else {
      logOccurrences(element, count);
      count = 1;
    }
  });
}

function logOccurrences(car, num) {
  console.log(`${car} => ${num}`);
}
*/

function countOccurrences(elements) {
  let occurrences = {};

  for (let idx = 0; idx < elements.length; idx += 1) {
    occurrences[elements[idx]] = occurrences[elements[idx]] || 0; //logical Or assignment
    occurrences[elements[idx]] += 1;
  }
/*During each iteration of loop, it checks to see if a property, with a
key equal to the name of the current vehicle, exists in occurrences.
If it does not exist, the function initializes the property to 0. */

  logOccurrences(occurrences);
}

function logOccurrences(occurrences) {
  for (let item in occurrences) {
    console.log(item + ' => ' + String(occurrences[item]));
  }
}