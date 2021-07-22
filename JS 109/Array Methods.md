#### Iteration Methods

Iteration methods - Array methods. 

- `Array.forEach()`:  loops through each element in an array and executes an anonymous callback function on that array element. 
  - We pass a **callback** function to forEach as an argument. When forEach() runs, it invokes the call back once for each element, passing the *element's value* as the argument. 
  - forEach() always returns undefined. 
  - forEach() does not mutate the array. 

```js
array.forEach(function(element)) {
	...        
}

array.forEach(element => {
  
})
```

```javascript
// Arrow function
forEach((element) => { ... } )
forEach((element, index) => { ... } )
forEach((element, index, array) => { ... } ) // array is the array forEach() was called upon. 

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function callbackFn(element) { ... })
forEach(function callbackFn(element, index) { ... })
forEach(function callbackFn(element, index, array){ ... })
forEach(function callbackFn(element, index, array) { ... }, thisArg)

```

- `Array.map()`: creates a new array by using the results of executing a callback function on each element of an array. 
  - Transforms an array's elements that returns a new array with the transformed values. If you don't have a return value, then that iteration will return undefined and the element will be undefined. 
  - Use `Array.map()` when you want to build a new array. 
  - `Array.map()` does not mutate the original array. 

```js
// Arrow function
map((element) => { ... } )
map((element, index) => { ... } )
map((element, index, array) => { ... } )

// Callback function
map(callbackFn)
map(callbackFn, thisArg)

// Inline callback function
map(function callbackFn(element) { ... })
map(function callbackFn(element, index) { ... })
map(function callbackFn(element, index, array){ ... })
map(function callbackFn(element, index, array) { ... }, thisArg)

```

- `Array.filter()`:  returns a new array that includes all the elements that were returned as truthy through a testing (callback) function. Returns an empty array if no elements passed the testing function. 
  - Definition 2`Array.filter()`:  iterates over each element in an array and invokes & executes a callback function on that element. If the callback function returns a truthy value, then that element's value is appended to the new array. If the callback function doesn't return a truthy value, the function does nothing. At the end of this function, the new array is returned. So if none of the elements return truthy, then `Array.filter()` returns an empty array`[]`. 

```terminal
> [1, 2, 3].filter(element => element > 4)
[]
# Array.filter()` does not mutate the original array. 
```

- `Array.find()`: executes a testing / callback function for each index in an array until a truthy value is returned. `find` returns the value of that element. If no truthy value is returned, `find` returns `undefined`. 
  - returns the **value of the first element** in an array that passes(textbook word: satisfies) the testing (callback) function. If no element satisfies the testing function, `undefined` is returned. 

```js
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

```

- `Array.some()`: returns a Boolean value of whether at least one element in an array passes the testing callback function. Returns true as soon as it finds an element that satisfies the testing function.
- `Array.every()`: returns a Boolean value of whether all elements in an array satisfies the testing callback function. 

- `Array.reduce()`: executes a **reducer** function on each element of an array, resulting in a single output value. It takes two arguments 1) a callback function 2) value that initializes the **accumulator**.
  - If no initial value is given, index starts at 1, and the first element in the array(which is at index 0) is used as the initial `accumulator` value and skipped as `currentValue`. 
  - Index of reducer function starts from 0 if initial value is provided. Otherwise it starts from index 1. 

#### Non-Mutating Methods

- use `Array.findIndex()` to get the *index* of the found element. Returns - 1 if no element passed the test. 

- use `Array.indexOf(search element, fromIndex)` to get the first index at which the element is found. Returns - 1 if no element is found. 

- use `Array.includes()` to see if a value exists in an array. Returns Boolean true/ false. 

- `Array.concat`: merge two or more arrays. Returns a new array. Doesn't change existing arrays.

  ```js
  let array = [1, 5, 7, 3].slice(0, 3);
  arr.reduce((accum, cv) => accum + cv)
  ```

  ```js
  // Arrow function
  reduce((accumulator, currentValue) => { ... } )
  reduce((accumulator, currentValue, index) => { ... } )
  reduce((accumulator, currentValue, index, array) => { ... } )
  reduce((accumulator, currentValue, index, array) => { ... }, initialValue)
  
  // Callback function
  reduce(callbackFn)
  reduce(callbackFn, initialValue)
  
  // Inline callback function
  reduce(function callbackFn(accumulator, currentValue) { ... })
  reduce(function callbackFn(accumulator, currentValue, index) { ... })
  reduce(function callbackFn(accumulator, currentValue, index, array){ ... })
  reduce(function callbackFn(accumulator, currentValue, index, array) { ... }, initialValue)
  ```

- `Array.join()`: returns a new string that has concatenated all the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

  ```js
  join()
  join(separator)
  ```

- `Array.slice()` returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (`end` not included) where `start` and `end` represent the index of items in that array. The original array will not be modified.

  ```js
  slice()
  slice(start)
  slice(start, end) // end is exclusive
  ```

#### Mutating Methods

Modifying arrays: methods that **mutate the array**

- `Array.push`: adds one or more elements to the end of an array and returns the new length of the array. 

- `Array.splice()` removes or replaces existing elements and/or adds new elements in place. Returns an array containing the deleted elements. Original array is mutated. 

  ```js
  splice(start)
  splice(start, deleteCount)
  splice(start, deleteCount, item1)
  splice(start, deleteCount, item1, item2, itemN)
  ```

- `Array.sort()`: [Reference](Lesson 5 Sorting) sorts elements of an array in place and returns the sorted array. 

  - The `sort` method iterates over the array and passes two elements as argument to the callback function during each iteration. It follows these rules

    - If the callback returns a number less than `0`, place `a` before `b`.
    - If the callback returns a number greater than `0` place `b` before `a`.
    - If the callback returns `0`, leave the relative positions of `a` and `b` unchanged.

  - If no compare function is specified, the array elements are converted to strings then sorted based on Unicode code point value. 

    ```js
    // Functionless
    sort()
    
    // Arrow function
    sort((firstEl, secondEl) => { ... } )
    
    // Compare function
    sort(compareFn)
    
    // Inline compare function
    sort(function compareFn(firstEl, secondEl) { ... })
    ```

    ```js
    array.sort((a, b) => a - b) // sort in ascending order
    
    array.sort((a, b) => b - a) // sort in descending order
    ```

    ```js
    array.sort((a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    }); // sorts in ascending order
    ```

- `Array.reverse()`: reverses an array *in place* and returns a reference to the mutated array. The first element becomes the last and the last element becomes the first. 



