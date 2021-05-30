/* eslint-disable max-lines-per-function */
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

function timeOfDay(time) {
  const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

  time %= MINUTES_PER_DAY;
  let minutes;
  let hours;

  if (time >= 0) {
    minutes = String(time % MINUTES_PER_HOUR);
    hours = String(Math.floor(time / MINUTES_PER_HOUR));
  } else {
    time = Math.abs(time);
    minutes = String(MINUTES_PER_HOUR - (time % MINUTES_PER_HOUR)); // 29
    hours = String(HOURS_PER_DAY - Math.ceil(time / MINUTES_PER_HOUR));
    //round up since you are subtracting by 24 hours
  }

  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }
  if (hours.length < 2) {
    hours = "0" + hours;
  }

  return `${hours}:${minutes}`;
}