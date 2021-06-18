function sum(integer) {
  return String(integer)
    .split('')
    .reduce((acc, cv) => acc + Number(cv), 0); // note initial value here
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

// If no initialValue is supplied, the first element in the array will be
// used as the initial accumulator value and skipped as currentValue.
// First element is a string and will convert subsequent iterations to strings