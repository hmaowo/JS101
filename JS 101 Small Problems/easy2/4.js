function multiply(num1, num2) {
  return num1 * num2;
}

function square (num) {
  return multiply(num, num);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

/* 
** Further exploration: if we wanted generalize this function to a "power to the n" type function: cubed,
** to the 4th power, to the 5th, etc. How would we go about doing so while still using
** the multiply() function? 
*/

function powerToTheN (num, power) {
  if (power === 0) {
    return 1; 
  } else if (power === 1) {
    return num;
  } else {
    let counter = 2;
    let answer = num; 
    while (counter <= power) {
      answer = multiply(answer, num);
      counter += 1; 
    }
    return answer; 
  }
}
console.log(powerToTheN(5, 3));