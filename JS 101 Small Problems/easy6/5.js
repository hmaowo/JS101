console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

/*
function negative(num) {
  return Math.abs(num) * -1;
}*/

function negative(num) {
  return num >= 0 ? num * -1 : num;
}

/*
further exploration
-0 is the signed zero.
-0 === +0
*/