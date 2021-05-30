function dms (angle) {
  // further exploration
  if (angle > 360) {
    angle %= 360;
  } else if (angle < 0 && angle > -360) {
    angle += 360;
  } else if (angle < -360) {
    angle = Math.abs(angle %= -360);
  }

  const MINUTES_IN_DEGREE = 60;
  const SECONDS_IN_MINUTE = 60;
  let degree = Math.floor(angle);
  let minutes = Math.floor((angle - degree) * MINUTES_IN_DEGREE);
  let seconds = Math.floor((((angle - degree) * MINUTES_IN_DEGREE)
              - minutes)
              * SECONDS_IN_MINUTE);
  return (`${degree}°${padZeroes(minutes)}'${padZeroes(seconds)}"`);
}

function padZeroes(number) {
  number = String(number);
  return number.length < 2 ? ('0' + number) : number;
}
console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 60°00'00"