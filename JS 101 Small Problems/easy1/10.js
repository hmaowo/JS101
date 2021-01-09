function multisum (max) {
  let multiples = [];

  for (let i = 1; 3 * i <= max; i++) {
    multiples.push(3 * i);
  }

  for (let i = 1; 5 * i <= max; i++) {
    if (!(multiples.includes( 5 * i ))) {
      multiples.push(5 * i);
    }
  }

  let sum = 0; 
  multiples.forEach(function (num) {
    sum += num;   
  });
  
  return sum; 
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

/* launch school solution 

function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
} */ 