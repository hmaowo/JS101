```javascript
var x = false;
if (x) {
  // this code is not executed
}
```

```js
if (false) {
  // will never execute
}

if (true) {
  // code is executed 
}

while (x = true) {
  // assignment, infinite loop unless you reassign x to false
}

while (x === false) { // evaluates to true
  // 
}

```

