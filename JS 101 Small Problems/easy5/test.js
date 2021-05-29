function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union(...args) {
  args.forEach(value => console.log(value));
}

union([1, 3, 5], [3, 6, 9]);