# Working with Callback Functions

In the last two lessons, we've looked at a variety of fundamental concepts related to working with collections, such as iterating, selecting, transforming, sorting, nested collections, and using callbacks. In this assignment, we'll focus on combining all of these concepts, while taking the time to understand fully how each component works. Take your time to analyze each example in this assignment. An example may look very easy or hard, but it probably requires roughly the same effort to understand if you focus on the right details. The goal is to have a deep understanding of how each detail works, not to complete this assignment as fast as possible.

Before we look at some examples, let's talk about higher order functions.

## Functions as First-Class Values and Higher Order Functions

In most computer languages, the term **first-class value** or **first-class object** is used to describe values that can be passed to functions as arguments or returned by those functions. In JavaScript, functions themselves are first-class values (or first-class objects). Not only can you invoke functions, but you can also pass them around your program like any other value. If JavaScript is your first language, this might not be a big revelation. However, if you have prior experience with some other languages, it may come as a surprise. Since functions can be treated as values, we can create functions that can take other functions as arguments and return other functions. That, in turn, allows for a more declarative and expressive style of programming.

We'll sometimes refer to JavaScript functions as **first-class functions** to distinguish them from functions in other languages where functions are not first-class objects.

For example, let's compare a transformation operation that uses a `for` loop to a transformation performed that uses `map`. Our program will transform an array of numbers by squaring every number in the array. First, here it is with a `for` loop:

```js
// for loop transformation
let numbers = [1, 2, 3, 4, 5];
let transformedNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  let currentNum = numbers[index];
  let squaredNum = currentNum * currentNum;

  transformedNumbers.push(squaredNum);
}

transformedNumbers; // => [ 1, 4, 9, 16, 25 ]
```

Now, here's the same operation using `Array.prototype.map`:

```js
// map transformation
let numbers = [1, 2, 3, 4, 5];
let transformedNumbers = numbers.map(currentNum => currentNum * currentNum);

transformedNumbers; // => [ 1, 4, 9, 16, 25 ]
```

As you can see, there is a dramatic difference between the styles in these two snippets. The first one uses what we call an **imperative** approach. It's called imperative since you're telling the interpreter what to do each step of the way:

- Declare and initialize an empty `transformedNumbers` array.
- Declare a counter.
- Increment a counter.
- Assign the element at the `index`th index to `currentNum`.
- Compute the square of `currentNum` and assign it to `squaredNum`.
- Append the squared number to the end of the `transformedNumbers` array.

The second approach, on the other hand, uses what we call a `declarative` approach. We're declaring what we need to do with the `numbers` array by saying "We want to map each element of the array to the return value of passing that element to the given callback function."

This declarative style of programming is possible only because we can treat functions as values. The `map` method takes a function as an argument and calls it for each element of the array used to call `map`. Functions that take other functions as arguments are called **Higher Order Functions**, as are functions that return other functions. In this assignment, we'll focus on array methods that take functions as arguments. In the JavaScript world, functions that we pass to other functions are often called **callback functions** or, more simply, **callbacks**.

We'll now take a look at a few examples of methods that take callbacks and analyze each component in depth:

### Example 1

Take a moment to digest this example:

```js
[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
// 1
// 3
// => undefined
```

What's happening in this seemingly-simple piece of code? Take it apart and try to describe every interaction with precision.

First, notice that we're calling `Array.prototype.forEach` with a callback function:

```js
arr => console.log(arr[0])
```

That means that `Array.prototype.forEach` is a higher order function - we can pass another function (the callback) to `forEach` as an argument.

We use the multi-dimensional array `[[1, 2], [3, 4]]` to call `forEach`. Each inner array is passed to the callback, in turn, and assigned to the parameter `arr`. We then use the element reference operator, `[]`, to get the value at index `0` of the array. On the first invocation of the callback, `arr[0]` returns `1`, and on the second, it returns `3`. In each invocation, `console.log` outputs a string representation of the value returned by `arr[0]`. Since this is a single statement callback, the callback's return value is the return value of `console.log(arr[0])`, which is `undefined`. `forEach` doesn't do anything with that returned value though. Finally, no matter what the callback returns, `forEach` always returns `undefined`.

A lot is going on in just one line of code! It isn't easy to parse all of that in your head at once, and this is a relatively simple example. We'll examine some much more complex ones later. It can be helpful to map things out visually to keep track of what is happening. Let's try it.

The technique we're about to show is designed to help you break down code in a way that makes it easier to understand. It can be very helpful when you're first learning to deal with iterative code and callbacks. As such, it's an informal process, much like pseudocode. We don't expect you produce the exact same results we do, but you should be able perform some sort of analysis that helps you understand the code.

What specific pieces of information should we track, then? When evaluating code like this, ask the following questions:

- What type of action is being performed? Method call? Callback? Conditional? Something else?
- On what value is that action performed?
- What is the side-effect of that action (e.g., output or destructive action)?
  - side effect means destructive action. 
- What is the return value of that action?
- Is the return value used by whatever instigated the action?

We can take these pieces of information and set them out in a tabular format:

| Action                      | Performed on                          | Side Effect                               | Return Value                    | Is Return Value Used?                          |
| :-------------------------- | :------------------------------------ | :---------------------------------------- | :------------------------------ | :--------------------------------------------- |
| method call (`forEach`)     | the outer array                       | None                                      | `undefined`                     | No, but shown on line 4                        |
| callback execution          | Each sub-array                        | None                                      | `undefined`                     | No                                             |
| element reference (`[0]`)   | Each sub-array                        | None                                      | Element at index 0 of sub-array | Yes, used by `console.log`                     |
| method call (`console.log`) | Element at index `0` of the sub-array | Outputs string representation of a Number | `undefined`                     | Yes, used to determine callback's return value |

### Example 2

```js
[[1, 2], [3, 4]].map(arr => console.log(arr[0]));
// 1
// 3
// => [undefined, undefined]
```

This example is similar to the previous one, but with one small variation: `forEach` is replaced with `map`. At first, this may seem insignificant, but when you take a closer look, you'll notice the return value of the `map` call is significantly different.

Let's break down this example to see if we can understand the difference:

| Action                      | Performed on                         | Side Effect                                   | Return Value                         | Is Return Value Used?                         |
| :-------------------------- | :----------------------------------- | :-------------------------------------------- | :----------------------------------- | :-------------------------------------------- |
| method call (`map`)         | The outer array                      | None                                          | New array (`[undefined, undefined]`) | No, but shown on line 4                       |
| callback execution          | Each sub-array                       | None                                          | `undefined`                          | Yes, used by `map` for transformation         |
| element access (`[0]`)      | Each sub-array                       | None                                          | Element at index 0 of sub-array      | Yes, used by `console.log`                    |
| method call (`console.log`) | Element at index 0 of each sub-array | Outputs a string representation of an Integer | `undefined`                          | Yes, used as the return value of the callback |

The new return value is a result of how `map` handles the return value of the callback. Unlike `forEach`, `map` uses the return value of the callback to perform a transformation. Thus, the return value of the callback is critical to understanding this code.

### Example 3

Let's mix it up a little and have you try taking apart an example on your own.

```js
[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});
```

Map out a detailed breakdown for this example using an approach similar to the previous two. What do you think will be returned and what will the side-effects be? You shouldn't have to guess. While there isn't a single right way to break this code down, you should be able to identify all of the different parts like we did above. You have all the knowledge you need. Take your time and analyze the code as completely as you can. Compare your solution to our solution.

```javascript
// 1
// 3
// => [1, 3]
```

| Action                 | Performed on                   | Side Effect | Return Value                   | Is Return Value Used?                           |
| :--------------------- | :----------------------------- | :---------- | :----------------------------- | :---------------------------------------------- |
| method call (map)      | outer array                    | none        | 0                              | no                                              |
| call back execution    | each sub array                 | none        | first element of each subarray | yes, it's used by map for transformation        |
| element access (`[0]`) | each sub-array                 | none        | element at index 0 of array    | yes, used by console.log                        |
| console.log            | first element of each subarray | none        | undefined                      | yes, used as return value of call back function |

Show Solution

This example outputs and returns the following:

```js
1
3
=> [1, 3]
```

When breaking down the example, pay close attention to:

- The return value of the callback
- The return value of the method
- Any side-effects

Use the following table to gauge the depth you should be thinking of when breaking down this code:

| Action                      | Performed on                      | Side Effect                               | Return Value                    | Is Return Value Used?                 |
| :-------------------------- | :-------------------------------- | :---------------------------------------- | :------------------------------ | :------------------------------------ |
| method call (`map`)         | the outer array                   | None                                      | New array: `[1, 3]`             | No                                    |
| callback execution          | Each sub-array                    | None                                      | Number at index 0 of sub-array  | Yes, used by `map` for transformation |
| element reference (`[0]`)   | Each sub-array                    | None                                      | Element at index 0 of sub-array | Yes, used by `console.log`            |
| method call (`console.log`) | Element at index `0` of sub-array | Outputs string representation of a Number | `undefined`                     | No                                    |
| element reference (`[0]`)   | Each sub-array                    | None                                      | Element at index 0 of sub-array | Yes, explicitly returned by callback  |

The main difference to understand here is the return value of the callback: we're explicitly returning the first element of each subarray with `return`. The callback's return value is then used by `map` to perform the transformation, replacing the inner array with a number. Finally, `map` returns a new array with two numbers in it.

Note that the following slight change to our callback again results in `map` returning `[undefined, undefined]`.

```js
[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  arr[0];
});

// 1
// 3
// => [undefined, undefined]
```

We removed the explicit `return` from the last line in the callback function. <u>As we know, when using callbacks with curly braces, we must explicitly return values.</u> Even though the `arr[0]` element reference returns a number, the callback returns `undefined` since the callback doesn't explicitly return the number.

Remember: your solution doesn't need to be precisely the same as ours. However, make sure that you fully understand the code, and that you didn't leave out any essential details.

### Example 4

Here's another example.

```js
let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => { // call back function is its own function ! c: 
    if (num > 5) {
      return console.log(num);
    }
  });
});
```

Can you take this code apart, just like before? What will it output and what will the value of `myArr` be? Check the solution below once you have tried this on your own.

| Action                              | Performed on                               | Side Effect                                 | Return Value           | Is Return Value Used?                                 |
| ----------------------------------- | ------------------------------------------ | ------------------------------------------- | ---------------------- | ----------------------------------------------------- |
| variable assignment and declaration | n/a                                        | none                                        | undefined              | no                                                    |
| method call (for each)              | [[18, 7], [3, 12]]                         | none                                        | undefined              | yes, used to assign to `myArr`                        |
| outer call back execution           | each sub array                             | none                                        | [undefined, undefined] | no                                                    |
| method call (map)                   | each sub array                             | none                                        | [undefined, undefined] | yes, returned by the outer callback                   |
| inner callback execution            | Element of the sub-array in that iteration | none                                        | undefined              | yes, used to transform array                          |
| comparison (>)                      | element of the sub-array in that iteration | none                                        | boolean                | yes, evaluated by if                                  |
| method call (console.log)           | element of the sub-array in that iteration | outputs a string representation of a Number | undefined              | Yes, used to determine return value of inner callback |

Show Solution

This example outputs and returns the following:

```js
18
7
12
=> undefined
```

Within this example, there are multiple return values as well as side-effects. Make sure that you understand, precisely, how the code works, line by line.

| Action                              | Performed on                               | Side Effect                                 | Return Value                                                 | Is Return Value Used?                                 |
| :---------------------------------- | :----------------------------------------- | :------------------------------------------ | :----------------------------------------------------------- | :---------------------------------------------------- |
| variable declaration and assignment | n/a                                        | None                                        | `undefined` (variable declaration always evaluates to `undefined`) | No                                                    |
| method call (forEach)               | `[[18, 7], [3, 12]]`                       | None                                        | `undefined`                                                  | Yes, used to assign to `myArr`                        |
| outer callback execution            | Each sub-array                             | None                                        | `[undefined, undefined]`                                     | No                                                    |
| method call (`map`)                 | Each sub-array                             | None                                        | `[undefined, undefined]` (map always returns a new array with values set to undefined) | Yes, returned by the outer callback                   |
| inner callback execution            | Element of the sub-array in that iteration | None                                        | `undefined`                                                  | Yes, used to transform the array                      |
| comparison (`>`)                    | Element of the sub-array in that iteration | None                                        | Boolean                                                      | Yes, evaluated by `if`                                |
| method call (`console.log`)         | Element of the sub-array in that iteration | Outputs a string representation of a Number | `undefined`                                                  | Yes, used to determine return value of inner callback |

There are 4 return values to pay attention to here: the return value of calls to `forEach` and `map` and the return value of both callbacks. When determining the return values, it's important to understand how the method used in the example works. In this case, we're using `forEach` on the outside, which ignores the return value of the callback. Thus, we can see that the value of `myArr` is `undefined`.

Because `forEach` ignores the callback's return value, this was a relatively straight forward example.

Once again, your solution doesn't need to be precisely the same as ours.

### Example 5

Next, let's tackle a slightly more complex example.

```js
[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});
```

What will the return value be in this example? Use what you've learned so far to break it down on your own before checking the solution below.

| Action                    | Performed on     | Side Effect | Return Value          | Is Return Value Used?                      |
| ------------------------- | ---------------- | ----------- | --------------------- | ------------------------------------------ |
| method call (map)         | [[1, 2], [3, 4]] | none        | new transformed array | no                                         |
| outer call back execution | each sub array   | none        | new transformed array | used by top-level `map` for transformation |
|                           |                  |             |                       |                                            |
|                           |                  |             |                       |                                            |

Show Solution

```js
[ [ 2, 4 ], [ 6, 8 ] ]
```



| Action                   | Performed on                               | Side Effect | Return Value              | Is Return Value Used?                           |
| :----------------------- | :----------------------------------------- | :---------- | :------------------------ | :---------------------------------------------- |
| method call (`map`)      | Original array                             | None        | New transformed array     | No                                              |
| outer callback execution | Each sub-array                             | None        | New transformed sub-array | Yes, used by top-level `map` for transformation |
| method call (`map`)      | Each sub-array                             | None        | New transformed sub-array | Yes, returned by outer callback                 |
| inner callback execution | Element of the sub-array in that iteration | None        | A number                  | Yes, used by inner `map` for transformation     |
| `num * 2`                | Value of `num` parameter                   | None        | A number                  | Yes, returned by inner `callback`               |

If you look closely and try to understand every line of code, there are more than 4 return values that you need to examine: the `num * 2` expression has a return value. By now, you should be starting to realize that the return value of every expression is important. You can ignore an expression's return value when it isn't used in the code. More often than not, though, some implied return value is used in subtle ways that affect your code. Pay attention to the details.

- so basically every function and expression returns something! 

### Example 6

Let's mix things up even more. In the following example, we have an array of objects, and we want to select all of the elements where every key matches the first letter of the value.

```js
[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]
```

A lot is going on here, but you have the knowledge that you need to take it apart, line by line, letter by letter. We won't provide a table of steps as before, but see if you understand every line and every letter in the code. If you don't, take your time and study it; you should be able to deconstruct this code to its core.

Show Solution

The first thing to notice here is the use of the `every` method within the `filter` callback. Since `filter` specifically cares about the truthiness of the callback's return value, using a method that returns a boolean value works well. `every` will return `true` if the callback passed to it returns a truthy value for the array of keys. We're using `object[key][0] === key` to test whether all keys match the first letter of all their associated values. Note that the only object that meets this criterion is `{:c => 'cat', :d => 'dog'}`, and the return value is an array.

What would happen if, instead of using `every`, we used `some`? How would this affect the return value of `filter`?

​	- some would return true in both iterations, and map would return an array with both objects. 

### Example 7

It can be tricky working with different types of values in a nested array if you want to select nested elements based on some criterion. For example, take the 2-element array shown below where we want to select numbers greater than `13` and strings shorter than `6` characters. The trick here is that the elements are in a two-layer nested array data structure.

```js
[[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
  return arr.filter(item => {
    if (typeof item === 'number') {    // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});
// => [ [ 27 ], [ 'apple' ] ]
```

At first, you might think to reach for the `filter` method to perform the selection. However, since we're working with a nested array, that won't work. 

- filter returns the entire element, not nested element inside an element  

We first need to access the nested arrays before we can filter the value we want. To select the required values, we must first determine whether an element is a number; there are plenty of ways to do that, but we went with the straightforward `typeof item === 'number'` test.

One of the main reasons that we use `map` in this example is not only to iterate over the array and access the nested arrays but to return a new array that contains the selected values. If we used `forEach` instead, we wouldn't have a useful return value since `forEach` always returns `undefined`. We would need to collect the desired results to an extra variable.

### Example 8

This example contains a three-level nested array. Take your time and try to break down each component. Hint: the top-level array is a 2-element array.

```js
[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.forEach(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
});

// => [ undefined, undefined ]
```

My Solution

| Action                 | Performed on                                  | Side Effect | Return Value                           | Is Return Value Used?          |
| ---------------------- | --------------------------------------------- | ----------- | -------------------------------------- | ------------------------------ |
| Method call (map)      | [[[1], [2], [3], [4]], [['a'], ['b'], ['c']]] | none        | undefined                              | yes, used in transformed array |
| call back execution    | the 2 sub-arrays                              | none        | undefined                              | no                             |
| method call (for each) | each element of sub- array                    | none        | undefined                              | no                             |
| method call (filter)   | each element of sub-array                     | none        | empty, or element that passes the test | no                             |

The key things to focus on with this example is understanding how `forEach` method works and the return value of the callback. There are a total of 6 return values since there are 3 method calls and 3 callbacks (that is, ignoring the return value of this expression: `element3.length > 0`). By looking at the example, you should notice that the first method call within `map` is `forEach`. If we understand `forEach`, we know that it doesn't care about the callback's return value and it always returns `undefined`. Therefore, just by looking at line 2, <u>we can already say that the *return value of **`map`*** will be a new array that contains `undefined` values.</u> In this example, that's all the interesting behavior there is as there are no side effects deeper in the code.

### Example 9

Consider the following code:

```js
[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});
```

My attempt: 

outer array.map() iterates over 3 sub-arrays: [1, 2], [3, 4]], [5, 6]]. It creates a new array. Its call back function  uses map() method to iterate over the sub-array. If the element isa number, then the number element + 1 is returned, otherwise it calls map() method on element to return element + 1 as an array. In the end, a transformed array is returned. 

This example is more complicated than the rest, but, at this point, you should be able to break it down effectively. Use the tools you've learned about in this lesson and take as much time as needed. Work on breaking down each component and understanding the return value of each expression. What will the final return value be? Check your answer only after you've tried this on your own.

Show Solution

- [
  Courses](https://launchschool.com/course_catalog)
- [JS101 Programming Foundations with JavaScript](https://launchschool.com/courses/804d1cae)
- [Lesson 5: Advanced JavaScript Collections](https://launchschool.com/lessons/778acada)
- \4. Working with Callback Functions

# Working with Callback Functions

In the last two lessons, we've looked at a variety of fundamental concepts related to working with collections, such as iterating, selecting, transforming, sorting, nested collections, and using callbacks. In this assignment, we'll focus on combining all of these concepts, while taking the time to understand fully how each component works. Take your time to analyze each example in this assignment. An example may look very easy or hard, but it probably requires roughly the same effort to understand if you focus on the right details. The goal is to have a deep understanding of how each detail works, not to complete this assignment as fast as possible.

Before we look at some examples, let's talk about higher order functions.

## Functions as First-Class Values and Higher Order Functions

In most computer languages, the term **first-class value** or **first-class object** is used to describe values that can be passed to functions as arguments or returned by those functions. In JavaScript, functions themselves are first-class values (or first-class objects). Not only can you invoke functions, but you can also pass them around your program like any other value. If JavaScript is your first language, this might not be a big revelation. However, if you have prior experience with some other languages, it may come as a surprise. Since functions can be treated as values, we can create functions that can take other functions as arguments and return other functions. That, in turn, allows for a more declarative and expressive style of programming.

We'll sometimes refer to JavaScript functions as **first-class functions** to distinguish them from functions in other languages where functions are not first-class objects.

For example, let's compare a transformation operation that uses a `for` loop to a transformation performed that uses `map`. Our program will transform an array of numbers by squaring every number in the array. First, here it is with a `for` loop:

Copy Code

```js
// for loop transformation
let numbers = [1, 2, 3, 4, 5];
let transformedNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  let currentNum = numbers[index];
  let squaredNum = currentNum * currentNum;

  transformedNumbers.push(squaredNum);
}

transformedNumbers; // => [ 1, 4, 9, 16, 25 ]
```

Now, here's the same operation using `Array.prototype.map`:

Copy Code

```js
// map transformation
let numbers = [1, 2, 3, 4, 5];
let transformedNumbers = numbers.map(currentNum => currentNum * currentNum);

transformedNumbers; // => [ 1, 4, 9, 16, 25 ]
```

As you can see, there is a dramatic difference between the styles in these two snippets. The first one uses what we call an **imperative** approach. It's called imperative since you're telling the interpreter what to do each step of the way:

- Declare and initialize an empty `transformedNumbers` array.
- Declare a counter.
- Increment a counter.
- Assign the element at the `index`th index to `currentNum`.
- Compute the square of `currentNum` and assign it to `squaredNum`.
- Append the squared number to the end of the `transformedNumbers` array.

The second approach, on the other hand, uses what we call a `declarative` approach. We're declaring what we need to do with the `numbers` array by saying "We want to map each element of the array to the return value of passing that element to the given callback function."

This declarative style of programming is possible only because we can treat functions as values. The `map` method takes a function as an argument and calls it for each element of the array used to call `map`. Functions that take other functions as arguments are called **Higher Order Functions**, as are functions that return other functions. In this assignment, we'll focus on array methods that take functions as arguments. In the JavaScript world, functions that we pass to other functions are often called **callback functions** or, more simply, **callbacks**.

We'll now take a look at a few examples of methods that take callbacks and analyze each component in depth:

### Example 1

Take a moment to digest this example:

Copy Code

```js
[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
// 1
// 3
// => undefined
```

What's happening in this seemingly-simple piece of code? Take it apart and try to describe every interaction with precision.

First, notice that we're calling `Array.prototype.forEach` with a callback function:

Copy Code

```js
arr => console.log(arr[0])
```

That means that `Array.prototype.forEach` is a higher order function - we can pass another function (the callback) to `forEach` as an argument.

We use the multi-dimensional array `[[1, 2], [3, 4]]` to call `forEach`. Each inner array is passed to the callback, in turn, and assigned to the parameter `arr`. We then use the element reference operator, `[]`, to get the value at index `0` of the array. On the first invocation of the callback, `arr[0]` returns `1`, and on the second, it returns `3`. In each invocation, `console.log` outputs a string representation of the value returned by `arr[0]`. Since this is a single statement callback, the callback's return value is the return value of `console.log(arr[0])`, which is `undefined`. `forEach` doesn't do anything with that returned value though. Finally, no matter what the callback returns, `forEach` always returns `undefined`.

A lot is going on in just one line of code! It isn't easy to parse all of that in your head at once, and this is a relatively simple example. We'll examine some much more complex ones later. It can be helpful to map things out visually to keep track of what is happening. Let's try it.

The technique we're about to show is designed to help you break down code in a way that makes it easier to understand. It can be very helpful when you're first learning to deal with iterative code and callbacks. As such, it's an informal process, much like pseudocode. We don't expect you produce the exact same results we do, but you should be able perform some sort of analysis that helps you understand the code.

What specific pieces of information should we track, then? When evaluating code like this, ask the following questions:

- What type of action is being performed? Method call? Callback? Conditional? Something else?
- On what value is that action performed?
- What is the side-effect of that action (e.g., output or destructive action)?
- What is the return value of that action?
- Is the return value used by whatever instigated the action?

We can take these pieces of information and set them out in a tabular format:

| Action                      | Performed on                          | Side Effect                               | Return Value                    | Is Return Value Used?                          |
| :-------------------------- | :------------------------------------ | :---------------------------------------- | :------------------------------ | :--------------------------------------------- |
| method call (`forEach`)     | the outer array                       | None                                      | `undefined`                     | No, but shown on line 4                        |
| callback execution          | Each sub-array                        | None                                      | `undefined`                     | No                                             |
| element reference (`[0]`)   | Each sub-array                        | None                                      | Element at index 0 of sub-array | Yes, used by `console.log`                     |
| method call (`console.log`) | Element at index `0` of the sub-array | Outputs string representation of a Number | `undefined`                     | Yes, used to determine callback's return value |

### Example 2

Copy Code

```js
[[1, 2], [3, 4]].map(arr => console.log(arr[0]));
// 1
// 3
// => [undefined, undefined]
```

This example is similar to the previous one, but with one small variation: `forEach` is replaced with `map`. At first, this may seem insignificant, but when you take a closer look, you'll notice the return value of the `map` call is significantly different.

Let's break down this example to see if we can understand the difference:

| Action                      | Performed on                         | Side Effect                                   | Return Value                         | Is Return Value Used?                         |
| :-------------------------- | :----------------------------------- | :-------------------------------------------- | :----------------------------------- | :-------------------------------------------- |
| method call (`map`)         | The outer array                      | None                                          | New array (`[undefined, undefined]`) | No, but shown on line 4                       |
| callback execution          | Each sub-array                       | None                                          | `undefined`                          | Yes, used by `map` for transformation         |
| element access (`[0]`)      | Each sub-array                       | None                                          | Element at index 0 of sub-array      | Yes, used by `console.log`                    |
| method call (`console.log`) | Element at index 0 of each sub-array | Outputs a string representation of an Integer | `undefined`                          | Yes, used as the return value of the callback |

The new return value is a result of how `map` handles the return value of the callback. Unlike `forEach`, `map` uses the return value of the callback to perform a transformation. Thus, the return value of the callback is critical to understanding this code.

### Example 3

Let's mix it up a little and have you try taking apart an example on your own.

Copy Code

```js
[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});
```

Map out a detailed breakdown for this example using an approach similar to the previous two. What do you think will be returned and what will the side-effects be? You shouldn't have to guess. While there isn't a single right way to break this code down, you should be able to identify all of the different parts like we did above. You have all the knowledge you need.Take your time and analyze the code as completely as you can. Compare your solution to our solution.

Show Solution

### Example 4

Here's another example.

Copy Code

```js
let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});
```

Can you take this code apart, just like before? What will it output and what will the value of `myArr` be? Check the solution below once you have tried this on your own.

Show Solution

### Example 5

Next, let's tackle a slightly more complex example.

Copy Code

```js
[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});
```

What will the return value be in this example? Use what you've learned so far to break it down on your own before checking the solution below.

Show Solution

### Example 6

Let's mix things up even more. In the following example, we have an array of objects, and we want to select all of the elements where every key matches the first letter of the value.

Copy Code

```js
[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]
```

A lot is going on here, but you have the knowledge that you need to take it apart, line by line, letter by letter. We won't provide a table of steps as before, but see if you understand every line and every letter in the code. If you don't, take your time and study it; you should be able to deconstruct this code to its core.

Show Solution

### Example 7

It can be tricky working with different types of values in a nested array if you want to select nested elements based on some criterion. For example, take the 2-element array shown below where we want to select numbers greater than `13` and strings shorter than `6` characters. The trick here is that the elements are in a two-layer nested array data structure.

Copy Code

```js
[[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
  return arr.filter(item => {
    if (typeof item === 'number') {    // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});
// => [ [ 27 ], [ 'apple' ] ]
```

At first, you might think to reach for the `filter` method to perform the selection. However, since we're working with a nested array, that won't work. We first need to access the nested arrays before we can filter the value we want. To select the required values, we must first determine whether an element is a number; there are plenty of ways to do that, but we went with the straightforward `typeof item === 'number'` test.

One of the main reasons that we use `map` in this example is not only to iterate over the array and access the nested arrays but to return a new array that contains the selected values. If we used `forEach` instead, we wouldn't have a useful return value since `forEach` always returns `undefined`. We would need to collect the desired results to an extra variable.

### Example 8

This example contains a three-level nested array. Take your time and try to break down each component. Hint: the top-level array is a 2-element array.

Copy Code

```js
[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.forEach(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
});

// => [ undefined, undefined ]
```

The key things to focus on with this example is understanding how `forEach` method works and the return value of the callback. There are a total of 6 return values since there are 3 method calls and 3 callbacks (that is, ignoring the return value of this expression: `element3.length > 0`). By looking at the example, you should notice that the first method call within `map` is `forEach`. If we understand `forEach`, we know that it doesn't care about the callback's return value and it always returns `undefined`. Therefore, just by looking at line 2, we can already say that the return value of `map` will be a new array that contains `undefined` values. In this example, that's all the interesting behavior there is as there are no side effects deeper in the code.

### Example 9

Consider the following code:

```js
[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});
```

My answer: 

Map() method is called on outer array to iterate over its elements. There are two elements of "arr"  is subarrays [[1, 2], [3, 4]] and  [5, 6]. Then the call back function calls on map() method to iterate over each element of the sub-arrays. During the first iteration, the sub array is [[1, 2], [3, 4]. 

The first iteration of the inner map () method , elem is [1, 2]. The call back function checks whether that element is a number. If it's not a number, then map is called again on that array and returns a new array of [2, 3]. The second iteration of this level is [3,4] which returns [4 5]. At the end of this method, the array behind returned is [[2, 3], [4,5]]. 

The second iteration of the outer map method, arr is [5, 6]. The first iteration of the inner map method(), elem is 5. 6 is returned. In ther second iteration, elem is 6 and 7 is returned. At the end of this map method, the array being returned is [6, 7]. 

The end result is an array of [[[2, 3], [4, 5]], [6, 7]]. 

This example is more complicated than the rest, but, at this point, you should be able to break it down effectively. Use the tools you've learned about in this lesson and take as much time as needed. Work on breaking down each component and understanding the return value of each expression. What will the final return value be? Check your answer only after you've tried this on your own.

Hide Solution

This example will return the following:

```js
// => [ [ [ 2, 3 ], [ 4, 5 ] ], [ 6, 7 ] ]
```

The tricky part about this example is that the original array has uneven nested levels. There are two main subarrays, the first of which contains two additional nested subarrays. If we want to do something with all of the numbers in this structure, we first need to find a way to access those number, regardless of how deeply nested they are. To do this, we determine whether the current element is an array or a number, then execute the appropriate code.

`map` is an excellent choice for this task since it returns a new array that contains transformed values. This way we can ultimately return a new array with the same nesting structure as the original.

In practice, this type of nested data processing is typically a sign of bad design. However, if you ever find yourself in that situation, you should be confident in your ability to work through it.

One last thing before ending this assignment: **don't mutate the collection that you're iterating through**; that includes selection and transformation, as well as any other iterative method provided by JavaScript arrays.

Here's an example of what not to do:

```js
let arr = [1, 2];

arr.map(subArr => arr.pop()); // => [ 2, <1 empty item> ]
```

That's a strange result. You might have expected to get the return value of `[2, 1]` but we get the array `[ 2, <1 empty item> ]`. If you log the result, you'll see that the returned array now has one element. 

- arr [1, 2] pop() removes 2, and arr is now [1]
- second iteration of map wants to iterate over index of 1, not 0, so its an empty item i guess

Mutating the array while in the middle of the `map` operation —an iterative operation— has jeopardized the operation. `Array.prototype.map` is always supposed to return an array with as many elements as the array it's called on. Here though, it doesn't do that because we mutate the array during the `map` call.

Let's see another example; one where we mutate the inner elements in an array:

```js
let arr = [[[1], [2], [3], [4]], [['a'], ['b'], ['c']]];

arr.map(subArr => subArr.pop()); // [ [ 4 ], [ 'c' ] ]

arr; // [ [ [ 1 ], [ 2 ], [ 3 ] ], [ [ 'a' ], [ 'b' ] ] ]
```

`Array.prototype.pop` is destructive and mutates each `subArr` (therefore changing the contents of `arr`) in the middle of a transformation action. The return value in this example makes a lot more sense, but we've mutated the original array in the process as well, which is potentially confusing as the reader is very likely to miss the side-effect caused by the `map` call. There's almost always a much clearer way of achieving the desired result without having to resort to mutating the collection while iterating through it.

Mutation during iteration can get confusing even if you're mutating nested sub-arrays, so pay extreme attention to destructive method calls and avoid using them during iteration. Notice that all our previous examples in this assignment didn't have any mutating methods in them, and the code already became quite difficult to analyze. Don't make life more difficult by introducing mutating method calls in the middle of an iteration.

### Summary

The goal of this assignment is to give you the tools to deconstruct and analyze code dealing with collections. Working with collections is a core task of most problems, so it's common to come across code that's iterating, selecting and transforming nested data structures. To the untrained eye, it can seem like a jumbled mess, and there's no way anyone can understand it without running the code to "see if it works." The trained practitioner, however, can adopt an engineering mindset and take the code apart, line by line, letter by letter.

At this point, you should be very comfortable with loops and iterative methods, and using them to work with collections. You should also be comfortable with data structures and manipulating them to fit your needs. Combine that knowledge with practice, and you'll be able to understand more complex problems like the ones in this assignment.

Some important things to remember:

- If, at first, the code appears opaque or complex, take the time to break it down step by step.
- If necessary, use a systematic approach, such as the tabular method outlined in this assignment.
- Figure out what is happening at each step, paying particular attention to:
  - The return value
  - Side effects
- Pay attention to the return values of all expressions in your code, especially where implicit return values are used.
- Make sure you have a clear understanding of the underlying concepts such as data structures, loops, iterative methods, and the callback functions passed to them.
- Be clear about the implementation of the iterative method(s) being used, particularly:
  - What values are passed to the callback?
  - What does the method do with the return value of the callback?
- If you're unclear about how a method works, a good first step is to refer to the MDN Docs.