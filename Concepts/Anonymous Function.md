```js
// anonymous function, usually used as call back functions
 arr => {
  arr.pop();
  return arr;
}
```



```js
// traditional function

function mutate (arr) {
  arr.pop();
  return arr;
}

// arrow function

let mutate = arr => {
  arr.pop();
  return arr;
}

```

