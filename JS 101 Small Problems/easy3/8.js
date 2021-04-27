function getGrade(first, second, third) {
  let mean = (first + second + third) / 3;

  if (mean >= 90 && mean <= 100) {
    return 'A';
  } else if (80 <= mean && mean < 90) {
    return 'B';
  } else if (70 <= mean && mean < 80) {
    return 'C';
  } else if (60 <= mean && mean < 70) {
    return 'D';
  } else {
    return 'F';
  }

}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"