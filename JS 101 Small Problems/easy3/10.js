function century(year) {
  let cent;
  if (year % 100 === 0 ) {
    cent = year / 100;
  } else {
    cent = Math.floor(year / 100) + 1;
  }

  if ((cent / 10 ) % 10 === 1) {
    cent += 'th';
  } else if (cent % 10 === 1) {
    cent += 'st';
  } else if (cent % 10 === 2) {
    cent += 'nd';
  } else if (cent % 10 === 3) {
    cent += 'rd';
  } else {
    cent += 'th';
  }

  return cent;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"