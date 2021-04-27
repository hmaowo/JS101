function triangle(number) {

  let counter = 1;
  while (counter <= number) {
    console.log(`${' '.repeat(number - counter)}${'*'.repeat(counter)}`);
    counter++;
  }
}

triangle(5);
triangle(9);