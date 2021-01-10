function isLeapYear(year) {
  if (year % 4 === 0 ) {
    if (year % 100 === 0 && year % 400 === 0) {
      return true; 
    } else if (year % 100 === 0 && year % 400 !== 0) {
      return false; 
    } else {
      return true; 
    }
  } else {
    return false; 
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));      // true

/* 
** Launch School's solution
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}
 
** another solution
function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}
*/ 

/* 
** further exploration
** The order in which you perform tests for a leap year calculation is important.
** For what years will isLeapYear fail if you rewrite it as shown below?

function isLeapYear(year) {
  if (year % 100 === 0) {
    return false;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return year % 4 === 0;
  }
}

** If written as above, it will fail on the first if statement at line 52. Because years divisible
** by 400 are exceptions (divisible by 400 are considered leap years).

** Can you rewrite isLeapYear to perform its tests in the opposite order of the above solution?
** That is, test whether the year is divisible by 4 first, then, if necessary,
** test whether it is divisible by 100, and finally, if necessary, test whether it is divisible by
** 400. Is this solution simpler or more complex than the original solution?
 
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false; 
      }
    } else {
      return year % 4 ===0; 
    }
  } else {
    return false; 
  }
}

// This solution is more complex.
console.log(isLeapYear(2016));
console.log(isLeapYear(2015));
*/ 