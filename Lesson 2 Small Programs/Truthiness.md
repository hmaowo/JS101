**Truth or False **

- helps build conditional logic
- understand the state of an object or expression
- typically we capture the notion of whether a value is true or false in a **boolean** data type: an object whose only purpose is to convey whether it is true or false. 
  - true and false primitive values as booleans
  - can print them, assign them to variables, pass them around and test them 
- in real code you want to evaluate an expression to a truthiness value instead of doing `value === true`

```js
function isSmall(number) {
  return number < 10;
}

let num = 15;

if (isSmall(num)) {
  console.log("small number");
} else {
  console.log("large number");
}
// logs large number since isSmall(num) evaluates as false when num is greater or equal to 10. 
```

**Logical Operators** : evaluate an expression that involves two subexpressions, then return a value that evaluates as true or false. 

`&&` is the **and** operator. It evaluates as true only when both sub-expressions evaluate as true. 

- note that `>` has greater precedence than `&&` so you don't need parentheses but it's better so you don't get confused. 
  - `> (num < 10) && (num > 3)`

- sub expressions are evaluated *left to right.* If any subexpression is false, the entire && chain evaluates as false. 

`||` is the **or** operator. It evaluates as true when either of the two sub-expressions evaluates as true; it evaluates as false when both sub-expressions evaluate as false. 

**Short-Circuit Operators**

- both `&&` and `||`exhibit a behavior called **short-circuiting**. This means that JavaScript stops evaluating sub-expressions once it can determine the final value. 

  - `&&` short -circuits when it encounters the first sub-expression (from left to right) that evaluates as false:

  ```node.js
  > false && undefined.length
  false
  // undefined.length does not raise TypeError because right side never executes. 
  ```

  ```node
  > true && undefined.length
  TypeError: Cannot read property 'length' of undefined
  ```

  - `||` short circuits when it encounters the first `true` sub-expression (from left to right)

  ```node.js
  > true || undefined.length
  true
  ```

- useful if you want to confirm something isn't null. 

```js
// before you can use string's length property, confirm that it isn't null. 
if (name && (name.length > 0)) {
  console.log(`Hi, ${name}.`);
} else {
  console.log("Hello, whoever you are.");
}
```

**Truthiness** 

- differs from boolean values in that JavaScript evaluates almost all values as true
- exceptions that count as false : 
  - `false`
  - `undefined`
  - `null`
  - `0`
  - `" "`(empty string) 
  - `NaN`

- **truthy**: evaluated as true, **falsy**: evaluated as false
  - saying that an expression returns `true` or `false` is not the same as saying that it returns a truthy/falsy value, nor that it evaluates as `true` or `false` 
  - the terms true and false refer to the Boolean values `true` and `false` ; the other phrases refer to truthiness, that is, a truthy or falsy value. 

```js
let num = 5; 
console.log(num === true);        // => false
// 5 != true
```

```js
let name;
if (name = getNameFromUser()) { // bad style
  console.log(`Hi ${name}`);
} else {
  console.log("you must enter your name!");
}
// this kind of code is discouraged 
```

```js
let name = getNameFromUser();
if (name) {
  console.log(`Hi ${name}`);
} else {
  console.log("you must enter your name!");
}
// good style

let name = getNameFromUser();
if (name === "") {
  console.log("you must enter your name!");
} else {
  console.log(`Hi ${name}`);
}

// another version making it clear we're testing for an empty name
```

