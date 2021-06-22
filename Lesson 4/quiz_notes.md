Question 1 

- Arrays, like strings, are also ordered, zero-indexed collections.

- -1 only works in string.slice() or array.slice(), normally an index of -1 means it doesn't exist in the array or string. 

Question 3

- JavaScript is very forgiving about using non-existent indices and keys to access strings, arrays, and objects. In all cases, it returns `undefined` if the string, array, or object exists, but the key does not.
- `obj.'This is'` throws a SyntaxError since dot notation syntax only works when the name of the property doesn't include illegal identifier characters such as punctuation and special characters. In particular, spaces in property names are not allowed.
- `obj[This is]` throws a SyntaxError because `This is` isn't a valid value in JavaScript, so it can't coerce the value to a string.
- `obj["This is"]` works fine since we've used quotes to identify the string value we want to use as a property name.

Question 4 

- `obj.x` and `obj['x']` both return `undefined` if property `x` is not present in `obj`. However, they also return `undefined` if the property is present but has the value `undefined`.
- You must use `Object.keys(obj)` to obtain a list of the property keys from the object `obj`, not `obj.keys()`.

Question 7

myarray[-7] (WRONG)

- Using a negative integer in square bracket notation causes JavaScript to try to find a property with that number as its name; it doesn't access an element of the array.

Question 8 

```js
function lessThan(upperLimit) {
  let numbers = [];
  let candidate = 1;

  while (candidate < upperLimit) {
    numbers.push(candidate);
  }

  return numbers;
}
//The function in answer B never finishes running; it's an infinite loop since we //never increment the candidate variable.
```

Question 10

**Javascript's implicit coercion** simply refers to **Javascript** attempting to **coerce** an unexpected value type to the expected type. So you can pass a string where it expects a number, an object where it expects a string etc, and it will try to convert it to the right type. 

So when using operators with arrays, Javascript DOES perform implicit ceorcion. 

Question 11

- `filter` and `map` return new arrays.
- `forEach` always returns `undefined`.
- `sort` returns a reference to the array that was used to invoke it. It also mutates that array, and the return value reflects that mutation, but it returns a reference to the array that was used to invoke it.

Question 15

Which of the following conditions let you break out of `Array.prototype.forEach`?

- Unless you throw an error, `forEach` always iterates through all elements in an array.

Question 17

- If the callback returns a falsy value for every element in the array, the return value of `filter` is an empty array. 
- If the callback returns a truthy value for every element, the return value of `filter` is a new array that contains the same elements as the original array. *However, this is not the same as returning the original array.*

- `filter` uses the truthiness of the callback's return value to determine which elements it selects from the original array.
- `filter`'s callback function can accept 1, 2, or 3 elements: the element value, the element index, and the array it is operating on.

Question 24: Which of the following can help you verify your assumptions when using the PEDAC process?

- Verifying your assumptions is a step that you should perform before writing pseudocode.
- You should write pseudocode before you write code, so you can't test your code until you have at least the start of an algorithm.
- Examining the test cases and asking questions are the best ways to verify your assumptions.