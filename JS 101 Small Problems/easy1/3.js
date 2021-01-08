// my solution
for (let number = 2; number <= 100; number +=2) {
  console.log(number);
}

// launch school solution
for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }

  console.log(number);
}