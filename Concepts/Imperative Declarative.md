**Declarative**

- using list processing abstractions

```js
function triangle(a, b, c) {
  let angles = [a, b, c];
  let sum = angles.reduce((a, b) => a + b);

  if (sum !== 180 || a <= 0 || b <= 0 || c <= 0) {
    return 'invalid';
  } else if (angles.some(angle => angle === 90)) {
    return 'right';
  } else if (angles.every(angle => angle < 90)) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

```

**Imperative**

- notice that the conditionals are not that long to type out

```js

function triangle(a, b, c) {
  [a, b, c] = [...arguments].sort((a, b) => a - b);

  if ((a <= 0) || (a + b < c)) {
    return 'invalid';
  } else if (a === b && a === c) {
    return 'equilateral';
  } else if (a === b || b === c || a === c) { //if just one side is equal to each other
    return 'isosceles';
  } else {
    return 'scalene';
  }
}
```

It's important to determine when one approach is better than the other. 

Their solution

```js
function triangle(angle1, angle2, angle3) {
  const angles = [angle1, angle2, angle3];
  if (isValid(angles)) {
    return getTriangleType(angles);
  } else {
    return "invalid";
  }
}

function isValid(angles) {
  const totalAngle = angles.reduce((total, angle) => total + angle);

  const allNonZero = angles.every(angle => angle > 0);

  return totalAngle === 180 && allNonZero;
}

function getTriangleType(angles) {
  if (angles.some(testRightTriangle)) {
    return "right";
  } else if (angles.every(testAcuteTriangle)) { // no parentheses here
    return "acute";
  } else {
    return "obtuse";
  }
}

function testRightTriangle(angle) {
  return angle === 90;
}

function testAcuteTriangle(angle) {
  return angle < 90;
}
```



Note that we use the functions `testRightTriangle` and `testAcuteTriangle` as arguments to `some` and `every` rather than entering them inline as a function expression or arrow function. All we have to do here is use the function name. Note, in particular, that we **do not** use parentheses when passing the functions as arguments -- the `some` and `every` function will take care of invoking the functions. We just want to pass the functions in to them.

Reference: https://launchschool.com/exercises/4a3e10a1