/*
P
  - input: year
  - output: the number of Friday the 13ths in that year
  - Rules:
    - assume that year is greater than 1752
  - Hint:
      Here is one possible algorithm for solving the problem:
    - Iterate over all the months of the given year.
    - For each month, get the day that falls on the 13th.
    - Count the 13ths that fall on a Friday.
    - Return the count.
*/
// Examples
console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

function fridayThe13ths(year) {
  let dates = [];
  for (let month = 0; month < 12; month += 1) {
    dates[month] = new Date(year, month, 13);
  }

  return dates.reduce((count, currentDate) => {
    return currentDate.getDay() === 5 ? count += 1 : count;
  }, 0);
}