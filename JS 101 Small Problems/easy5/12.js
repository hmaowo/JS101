const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

function afterMidnight(timeStr) {
  let [hours, minutes] = timeStr.split(":").map(num => Number(num));
  //destructuring assignment
  return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  // smart to do minutes instead of subtracting hours & minutes separately
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
}


/*
function afterMidnight(time) {
  let hours = Number(time.slice(0, 2));
  let minutes = Number(time.slice(3, 5));
  if (hours < 24 && hours > 0) {
    let timeMin = (hours * 60) + minutes;
    return timeMin;
  } else {
    return 0;
  }
}

function beforeMidnight(time) {
  let hours = Number(time.slice(0, 2));
  let minutes = Number(time.slice(3, 5));
  if (hours < 24 && hours > 0) {
    let timeHours = 24 - hours - 1;
    let timeMin = 60 - minutes;
    let totalTime = (timeHours * 60) + timeMin;
    return totalTime;
  } else {
    return 0;
  }
}
*/