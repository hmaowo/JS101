/* 
 || and && work great until you want only one of two conditions to be truthy, 
 the so-called exclusive or.

 n this exercise, you will write a function named xor that takes two arguments, and 
 returns true if exactly one of its arguments is truthy, false otherwise. 
 Note that we are looking for a boolean result instead of a truthy/falsy value as returned by 
 || and &&. */

function xor(num1, num2) {
  if (num1) {
    if (!num2) {
      return true;
    } else {
      return false;
    }
  } else if (!num1) {
    if (num2) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(xor(5, 0) === true); //logs true
console.log(xor(false, true) === true); // logs true
console.log(xor(1, 1) === false); // logs true
console.log(xor(true, true) === false); // logs true

/* Launch School

Solution 1
function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}

Solution2
function xor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

Note that this solution requires a double not (!!) to force the return value to a boolean.

May be tempted to use the bitwise XOR operator (^) which returns a 1 in each bit position
for which the corresponding bits are either but not both operands are 1s. However, it only works
properly when both values are numeric or both are boolean. Anything else may lead to unexpected
results.

For example 'a' ^ false returns a falsy value (0).

Further Exploration
Can you think of a situation in which a boolean xor function would be useful?
Suppose you were modeling a light at the top of a flight of stairs wired in such a way that the
 light can be turned on or off using either the switch at the bottom of the stairs or the switch
 at the top of the stairs. This is an xor configuration, and it can be modeled in JavaScript
 using the xor function. Think of some additional examples.

 Examples:

 When given two options on your phone, tablet, or computer, such as to log in by either
 passcode/pin or password, you can only choose one option. If you choose both options or none,
 then nothing happens.

|| and && are so-called short circuit operators in that the second operand is not evaluated if
its value is not needed. Does the xor function perform short-circuit evaluation of its operands?
 Why or why not? Does short-circuit evaluation in xor operations even make sense?

 xor function does not perform short circuit evaluation. It has to evaluate the second operand to
 make sure that it is not the same as the first operand, to make sure that only one operand
 is truth/truthy.

 */