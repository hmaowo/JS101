#            Array Methods

Writing loops with `while` and `for` that iterate over a collection is both repetitive and unnecessary. JavaScript provides an easier way to work with arrays through the use of built-in methods. In this assignment, we'll look specifically at the `forEach`, `filter`, and `map` methods.

Unfortunately, other collections and *collection-like* types like objects and strings don't have these methods. With objects, however, we can use the `Object.keys`, `Object.values`, and `Object.entries` methods to convert the object to an array and then take advantage of the built-in array methods.

### `Array.prototype.forEach`

So far, we've learned that the most effective option for iterating over a collection is to use a loop, like this:

```js
let numbers = [1, 2, 3];
let counter = 0;

while (counter < numbers.length) {
  console.log(numbers[counter]);
  counter += 1;
}
```

Iterating over an array is such a common task that JavaScript provides a method to do just that. The `Array.prototype.forEach` method is functionally equivalent to a `for` or `while` loop and represents a simpler way to accomplish the same task. Here's an example that produces the same result as the implementation above:

```js
[1, 2, 3].forEach(number => {
  console.log(number); // call back function 
});
```

In this example, we're working with the following array:

```js
[1, 2, 3]
```

`forEach` is a method that is called on the array. The method takes a function as an argument -- the `() => {...}` component. Here, we're using an arrow function for its simplicity. A function expression provided to another function/method as an argument is often called a **callback**.

```js
number => {
  console.log(number); // call back executes this each iteration
};
```

The code within the callback is executed for each iteration. In this case, the callback executes `console.log(number)`. The result is that the program displays the elements in the array.

How does the callback know what `number` is? For each iteration, `forEach` sends the value of the current element to the callback in the form of an argument. In this callback, the parameter is `number`; it represents the value of the current element in the array.

`Array.prototype.forEach` also passes a second argument, the index position of the element in the array, to the callback function. Thus far, we haven't accepted a second argument, but we can do that. Even though `forEach` provides more than one argument to our callback, our callback doesn't have to use those arguments if it doesn't need them. Let's see an example of how we can use the index argument in the callback function:

```js
[1, 2, 3].forEach((number, idx) => {
  console.log(`${idx}: ${number}`);
});

// logs
// 0: 1
// 1: 2
// 2: 3
```

#### `forEach` with Strings

JavaScript strings don't have a `forEach` method. However, we can leverage the `String.prototype.split` method to process every character in a string with `forEach`. Let's say that we want to iterate over all characters in a string and log them to the console using `forEach`; we can do so in the following manner:

```js
'abcd'.split('').forEach(char => {
  console.log(char);
});
// logs
// a
// b
// c
// d
```

This approach works with other array iteration methods as well. We'll see an example of that later on.

#### `forEach` with Objects

Objects in JavaScript don't have the `forEach` method. However, as we said earlier, the `Object.keys`, `Object.values`, and `Object.entries` methods readily convert objects into arrays for us, which we can then use with the `forEach` method. Let's say that we want to iterate over all values in an object and log them to the console using `forEach`; we can do so in the following manner:

```js
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceValues = Object.values(produce);

produceValues.forEach(value => {
  console.log(value);
});
// logs
// Fruit
// Vegetable
// Fruit
// Vegetable
```

Suppose you need the keys, instead of the values. You can use `Object.keys` instead:

```js
let produceKeys = Object.keys(produce);
produceKeys.forEach(key => {
  console.log(key);
});
// logs
// apple
// carrot
// pear
// broccoli
```

We can also get all of the key-value pairs of an object with `Object.entries`:

```js
let produceKeyValues = Object.entries(produce);
// produceKeyValues contains:
//   [['apple', 'Fruit'],
//    ['carrot', 'Vegetable'],
//    ['pear', 'Fruit'],
//    ['broccoli', 'Vegetable']]

produceKeyValues.forEach(keyValue => {
  let [ key, value ] = keyValue;

  console.log(`${key} is a ${value}`);
});
// logs:
// apple is a Fruit
// carrot is a Vegetable
// pear is a Fruit
// broccoli is a Vegetable
```

As we've seen before, `Object.entries` returns all the key-value pairs of an object in an array. Each key-value pair is represented by an array of two elements where the first element is the key and the second element is the value. The `forEach` method then iterates over the array, passing in each key-value pair as the argument to the callback. The `keyValue` parameter captures that argument.

What's happening on line 9, though?

```js
let [ key, value ] = keyValue;
```

This code demonstrates what we call **array destructuring assignment**. In an array destructuring assignment, we can assign elements of the array to multiple variables by wrapping the variable names in brackets. The first element gets assigned to the first variable, the second element gets assigned to the second variable, and so on. We can rewrite that line without array destructuring assignment as follows:

```js
let key = keyValue[0];
let value = keyValue[1];
```

We will discuss destructuring in more detail in a later course. For now, all you need to know is that you can assign the elements of an array to individual variables as shown above.

One thing to note about `forEach` is that it returns `undefined`.

```node
> let val = [1, 2, 3].forEach(num => console.log(num))
> val
undefined
```

`forEach` is just a method call, and methods in JavaScript always return something, even if it's `undefined`. The return value of `forEach` isn't important since the sole purpose of `forEach` is iteration. It just performs some action on each element. What the method returns isn't significant. However, we'll see some other array methods where the return value is significant.

### `Array.prototype.filter`

Frequently, we want to **select** or **filter** certain elements from an array so that we can work with them separately from the other elements. Doing so helps reduce code complexity, which in turn makes code easier to write and reduces the likelihood of bugs.

We can perform selection using a regular `for` or `while` loop:

```js
let numbers = [1, 2, 3];
let oddNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 1) {
    oddNumbers.push(numbers[index]);
  }
}

oddNumbers; // => [1, 3]
```

That works fine, and it's not hard, but it is tedious. There's a lot of "boilerplate" code involved, such as declaring and initializing the `oddNumbers` array for the result and setting up the `for` loop.

As it happens, arrays have a built-in method to filter elements from an array: the `filter` method. It makes selection significantly easier. For instance, here's how the above code looks when converted to use `filter`:

```js
let oddNumbers = [1, 2, 3].filter(num => {
  return num % 2 === 1;
});

oddNumbers; // => [1, 3]
```

Much simpler, isn't it?

To perform the selection, `filter` examines the return value of the callback on each iteration. It determines the **truthiness** of the return value. There's only one thing that `filter` cares about concerning the callback's return value: whether it is **truthy** or **falsy**. Note that truthy and falsy are not the same as `true` and `false`.

JavaScript treats six values as falsy: `undefined`, `null`, `NaN`, `0`, `''`, and `false`. All other values are truthy values. That's not the same as saying that everything that is truthy is also `true` or that everything that is falsy is also `false`. The values `true` and `false` are the two JavaScript values that make up its Boolean type; truthy and falsy aren't values that belong to a specific JavaScript type but are simply a classification of which values JavaScript recognizes as representing truth or falsity.

Note that the body of the callback function in the above example is a single expression. That means that we can eliminate the curly braces and the `return` keyword, and it'll still work:

```js
[1, 2, 3].filter(num => num % 2 === 1); // => [ 1, 3 ]
```

This code provides a much more succinct way to do things. It's the preferred approach if your callback has a simple one-line *selection criterion*.

If the return value of `filter`'s callback is truthy during a given iteration, then `filter` will select that element. If the return value is falsy, then the element won't be selected.

Consider this code:

```js
[1, 2, 3].filter(num => num + 1);
```

Here, the callback's return value is always truthy. How do we know that? If the value is anything other than the six falsy values mentioned above, it's truthy. In this case, the return value is always an integer greater than `0`, all of which are truthy.

The follow-up question is then, what is the return value of `filter` in the above example? Remember that `filter` performs selection based on the truthiness of the callback's return value. If the callback's return value is always truthy, then `filter` will select all of the elements. When an element is selected, it's placed in a new array. Since the selection criterion -- the callback's return value -- is truthy for all elements in this example, `filter` returns a new array that contains all of the elements from the original array:

```node
> [1, 2, 3].filter(num => num + 1)
[ 1, 2, 3 ]
```

When working with `filter`, you must pay attention to the callback's return value. For example, if we write a callback with the curly braces and forget to write an explicit `return`, how will that affect the return value of `filter`?

```node
> [1, 2, 3].filter(num => {
...   num + 1;
... })
[] // empty array when callback doesn't return a value 
```

`filter` now returns an empty array. Why is that? Since our callback doesn't explicitly return a value, its implicit return value is `undefined`. Since `undefined` is falsy, `filter` won't select any elements.

The question now is whether we can effectively use `filter` to select certain key-value pairs from an object. Let's say we want to select the key-value pairs from our `produce` object where the value is `Vegetable`. Let's give it a shot with `Array.prototype.filter`.

```js
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceKeyValues = Object.entries(produce);
let onlyVegetables = produceKeyValues.filter(keyValue => {
  let [ key, value ] = keyValue;
  return value === 'Vegetable';
});

onlyVegetables; // => [ [ 'carrot', 'Vegetable' ], [ 'broccoli', 'Vegetable' ] ]
```

That sort of works, but the return value isn't ideal: it returns an array, not an object as we want. Maybe we can convert the array to an object using `forEach`:

```js
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceKeyValues = Object.entries(produce);
let onlyVegetablesArr = produceKeyValues.filter(keyValue => {
  let [ key, value ] = keyValue;
  return value === 'Vegetable';
});

let onlyVegetables = {};

onlyVegetablesArr.forEach(keyValue => {
  let [ key, value ] = keyValue;
  onlyVegetables[key] = value;
});

onlyVegetables; // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
```

Okay, that works, but it's complicated logic. Can we simplify it? Let's try using `forEach` by itself without using `filter` at all:

```js
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceKeyValues = Object.entries(produce);
let onlyVegetables = {};

produceKeyValues.forEach(keyValue => {
  let [ key, value ] = keyValue;
  if (value === 'Vegetable') {
    onlyVegetables[key] = value;
  }
});

onlyVegetables; // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
```

Oh, that's better. This code is much more succinct than the previous code. It seems like `forEach` is better suited to filtering an object than using a combination of `forEach` and `filter`.

### `Array.prototype.map`

As with `filter`, `map` also considers the return value of the callback. The main difference between these two methods is that `map` uses the return value of the callback to perform transformation instead of selection.

```js
[1, 2, 3].map(num => num * 2);
```

In this example, the return value of the callback function is the product of `num` and `2`. `map` then takes this value and places it in a new array. This process repeats for each element in the original array. We can see what the return value of `map` looks like in the console.

```node
> [1, 2, 3].map(num => num * 2)
[ 2, 4, 6 ]
```

What happens if we write some code in the callback that doesn't appear to be a transformation? For instance, in the following code, it seems like we're looking for odd numbers:

```js
[1, 2, 3].map(num => num % 2 === 1);
```

The key here is to remember that `map` always performs transformation based on the return value of the callback. In this case, the return value of the callback is boolean. Thus, `map` returns an array of booleans.

```node
> [1, 2, 3].map(num => num % 2 === 1)
[ true, false, true ]
```

What will `map` return in this example?

```js
[1, 2, 3].map(num => {
  num * 2;
});
```

It's a little tricky, but you should now have all the necessary information to evaluate this code. Take a few minutes to deconstruct the above example and try to determine the return value of the code above.

By looking at the last expression within the callback, we know that the return value of the callback will always be `undefined` since it's a callback with curly braces and without an explicit return value. `map` doesn't care about truthiness, and takes this return value as the transformation criterion. Therefore, the array returned by `map` is a new array of `undefined` values.

```node
> [1, 2, 3].map(num => {
...   num * 2;
... })
[ undefined, undefined, undefined ]
```

#### `filter` and `map` with Strings

As with `forEach`, JavaScript strings don't have `filter` or `map` methods. However, we can use the `String.prototype.split` technique that we showed earlier together with `Array.prototype.join` to use `filter` and `map` on the characters in a string.

For instance, suppose we want to select all of the vowels in a string and get a new string that contains all of those vowels, and nothing else. We can use `split`, `filter`, and `join` like so:

```js
let str = "What's up, Doc?";
str.split('')
   .filter(char => 'aeiou'.includes(char.toLowerCase())) // putting criteria into a string. Criteria string.includes (single letter);
   .join('');
// => 'auo'
```

Here, we split the string into an array of characters, then filter the resulting array. The callback defines the selection criterion as any vowel (assuming the US alphabet), so `filter` returns an array of vowels. Finally, we join those vowels together as a new string.

We can also use this technique with `map`. Let's duplicate every character in a string and return the result:

```js
let str = "What's up, Doc?";
str.split('')
   .map(char => char + char)
   .join('');
// => "WWhhaatt''ss  uupp,,  DDoocc??"
```

In this program, we again split the string into an array of characters, but this time we use `map` to double every letter using a concatenation transformation. Once again, we use `join` to put the resulting string together.

This technique of converting strings to arrays and then back again to use array methods works well. Even though it's not the case, thinking of strings as an array of characters can help when you need to iterate over the characters in the string.

### Summary

Methods like `forEach`, `filter`, and `map` are provided by JavaScript to allow for simpler implementations of common collection manipulation tasks. Using these methods to iterate, select, and transform a collection is preferred over manually looping.

To further clarify your understanding of these methods and how they work, use the following table as a reference:

| Method    | Action              | Considers the return value of the callback? | Returns a new array from the method? | Length of the returned array |
| :-------- | :------------------ | :------------------------------------------ | :----------------------------------- | :--------------------------- |
| `forEach` | Iteration           | No                                          | No, it returns `undefined`           | N/A                          |
| `filter`  | Selection/Filtering | Yes, its truthiness                         | Yes                                  | Length of original or less   |
| `map`     | Transformation      | Yes                                         | Yes                                  | Length of original           |

These methods each use the callback's return value in different ways. In the case of `forEach`, the return value of the callback is simply ignored. Before moving forward, it is crucial to understand how these methods use the callback's return value to perform their intended task.