# More Array Methods

There are many useful methods that you get out-of-the-box with JavaScript, but they're only useful when you thoroughly understand how they work. In this assignment, we're going to take what we learned from the previous assignment to deconstruct how the common built-in array methods work.

Before we begin exploring these methods, be sure to refresh your memory by revisiting our coverage in [the book](https://launchschool.com/books/javascript/read/arrays#commonarraymethods).

One of the best ways to learn about a method is to consult the [JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference). If you're unfamiliar with this website, we've written a few exercise sets - [Reading Documentation](https://launchschool.com/exercise_sets/fc8034da) and [Reading Documentation 2](https://launchschool.com/exercise_sets/a63f2bbc).

Let's look at some common JavaScript array methods and explore how they work.

### `Array.prototype.some`

The first thing you should do when you're unsure of how a method works is to check the [JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some). Take a quick look at it to get an idea for what the method does, and then continue reading this section.

Let's see the method in action:

```node
> [1, 2, 3].some(num => num > 2)
true

> [1, 2, 3].some(num => num > 3)
false
```

There are two return values that we need to be aware of here: the return value of the method call to `some`, and the return value of the callback on each iteration. `some` looks at the truthiness of the callback's return value to determine its own return value. **If the callback function returns a truthy value for any element in the collection, then the `some` method will return true.** In effect, the method asks "Are there *some* values in the array for which the given callback returns a truthy value?".

The `Object.keys`, `Object.values`, and `Object.entries` methods will help you to use `some` with objects as well.

```js
let animals = { a: 'ant', b: 'bear', c: 'cat' };
Object.values(animals).some(animalName => animalName.length > 4);
// => false

Object.values(animals).some(animalName => animalName.length > 3);
// => true
```

The above code returns a boolean, signifying whether any value in the object has a length greater than 4 or 3. In the first case, none of the string values have more than 4 characters; hence the overall return value is `false`. In the second case, `bear` has more than 3 characters, so `some` returns `true`.

### `Array.prototype.every`

The `every` method works similarly to `some`. It also looks at the truthiness of the callback's return value, but the method only returns `true` if the callback's return value in every iteration is truthy (that is, not one of the falsy JavaScript values).

```node
> [1, 2, 3].every(num => num > 2)
false

> [3, 4, 5].every(num => num > 2)
true
```

`every` can also be used with objects by using the usual `Object` methods to extract the keys, values, or key-value pairs:

```js
let animals = { a: 'ant', b: 'bear', c: 'cat' };
Object.values(animals).every(animalName => animalName.length > 2);
//  => true
```

### `Array.prototype.find`

The `find` method also takes a callback function as an argument and returns the first element for which the callback function returns a truthy value:

```node
> [2, 1, 4, 3, 5].find(num => num > 2)
4
```

Here, we're asking for the first number in the array that's greater than 2. Since `num > 2` evaluates as true for the number `4`, we get a return value of `4`. Note that `3` and `5` also satisfy the condition, but `find` stops looking once it finds a matching element.

If the callback function doesn't return a truthy value for any of the elements, `find` returns `undefined`;

```node
> [2, 1, 4, 3, 5].find(num => num < 1)
undefined
```

### `Array.prototype.findIndex`

`findIndex` is similar to `find` except it returns the index of the element for which the callback returns a truthy value:

```node
> [2, 1, 4, 3, 5].findIndex(num => num > 2)
2
```

Since the number `4` satisfies the condition `num > 2`, and `4` is positioned at index 2, that's what gets returned.

`findIndex` works a little differently from `find` when the callback doesn't return a truthy value for any of the elements. In this case, it returns `-1` instead of `undefined`:

```node
> [2, 1, 4, 3, 5].findIndex(num => num < 1)
-1
```

### `Array.prototype.reverse`

The name of the `reverse` method is self-explanatory: it reverses the elements of the array it's called on. The first element becomes the last, and the last becomes the first.

```node
> [1, 2, 5, 7, 3].reverse()
[ 3, 7, 5, 2, 1 ]
```

A crucial point to note about `reverse` is that it does the reversal in place. In other words, it mutates the original array.

```js
let nums = [1, 2, 3];
nums.reverse(); // => [3, 2, 1]
nums;           // => [3, 2, 1]
```

You may not always want this behavior when reversing an array. In that case, you can use the `Array.prototype.slice` method to make a shallow copy of the array, then reverse the copy:

```js
let nums = [1, 2, 3];
let reversedNums = nums.slice().reverse();

reversedNums; // => [3, 2, 1]
nums;         // => [1, 2, 3]
```

### `Array.prototype.includes`

The `includes` method searches the array used to call it for an element whose value is strictly equal (`===`) to the single argument. It returns `true` when a matching element exists in the array and `false` when it doesn't.

```node
> [2, 1, 3].includes(1)
true

> [2, 1, 3].includes(5)
false
```

The `includes` method doesn't work when you want to check the existence of an object in an array, at least not in the way you'd expect.

```js
let arr = ['a', 'b', {c: 'foo'}];
arr.includes({c: 'foo'}); // => false

// Object Comparison: 
// only returns true if they are the same reference (same object).  
// {c: 'foo'} & {c:'foo'} are two different objects. 

```

```js
ar o1 = {a: "a"};
var o2 = o2;
Object.is(o1, o2);
// is true 
```

You might expect a return value of `true` from the `includes` call above, but it returns `false`. That's because `includes` uses the `===` operator to compare its argument with elements of the array. Since the comparison `{c: 'foo'} === {c: 'foo'}` returns `false`, `arr.includes({c: 'foo'})` also returns `false` in the above example.

The following `includes` call returns `true` since we're checking for the existence of the same object, and not an object with the same key-value pairs:

```js
let obj = {c: 'foo'};
let arr = ['a', 'b', obj];

arr.includes(obj); // => true
```

As with so many other array methods, `includes` is useful when working with objects as well. For example, you could use it in conjunction with `Object.keys` to determine whether a specific key exists in an object:

```js
let obj = {a: 'apple', b: 'banana', c: 'custard'};
Object.keys(obj).includes('c'); // => true
Object.keys(obj).includes('f'); // => false
```

Another method you can use to check if a key exists in an object is `Object.prototype.hasOwnProperty`.

- The **`hasOwnProperty()`** method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

```js
let obj = {a: 'apple', b: 'banana', c: 'custard'};
obj.hasOwnProperty('c'); // => true
obj.hasOwnProperty('f'); // => false
```

### Summary

JavaScript arrays supply more than 30 methods, many of which you will find useful in your future programs. We recommend that you memorize the basic details of the methods we've discussed in this assignment and the previous assignment, and become familiar with what else is available. Nobody expects you to memorize every last detail of all these methods, but, the more familiar you are with them, the easier it will be to solve problems.