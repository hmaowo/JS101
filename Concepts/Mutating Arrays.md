# Mutating arrays

When you pass an array into a function in JavaScript, it is passed as a reference. Anything you do **that alters the array** inside the function will also alter the original array. for example this code will log [1, 2, 3] to the console:

```js
var array = [1, 2, 3, 4];
const mutate = arr => {
 arr.pop();
 return arr;
}
mutate(array);
console.log(array); // result [1, 2, 3]
```

Above uses arrow notation

```js
// traditional function

function mutate (arr) {
  arr.pop();
  return arr;
}

// arrow notation

let mutate = arr => {
  arr.pop();
  return arr;
}

```

