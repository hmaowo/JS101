# Practice Problems

We've now explored a handful of array methods and looked at how they work. Let's do some practice problems to help drive home those concepts.

The goal for these practice problems is to gain a deeper understanding of specific concepts, not to rush through them. Do your best to answer the questions without running the example code. You should be able to determine the answers just by looking at the code or by referring to the MDN docs.

As we've already seen, when working with collections, there are often multiple ways that you can use to solve a particular problem. The solutions to these practice problems provide a suggestion of how each might be solved. However, don't be afraid to explore each problem in more depth, perhaps coming up with more than one possible solution and thinking about the differences and trade-offs between each.

#### Practice Problem 1

What is the return value of the `filter` method call below? Why?

```js
[1, 2, 3].filter(num => 'hi');
```

```js
[1, 2, 3]
```

Solution

`filter` performs selection based on the *truthiness* of the callback's return value. In this case, the return value is always `'hi'`, which is truthy. Therefore `filter` will return a new array containing all of the elements in the original array.

#### Practice Problem 2

What is the return value of `map` in the following code? Why?

```js
[1, 2, 3].map(num => {
  num * num;
});
```

```js
undefined
```

Show Solution

```js
[ undefined, undefined, undefined ]
```

`map` looks at the return value of the callback function to decide the elements in the returned array. Each element in the original array is replaced by what the callback returns for that element. In this case, there's no explicit return statement in the callback function, which means that the callback returns `undefined` each time.

#### Practice Problem 3

The following code differs slightly from the above code. What is the return value of `map` in this case? Why?

```js
[1, 2, 3].map(num => num * num);
```

```js
[1, 4, 9]
```

Show Solution

Without braces surrounding the body of the arrow function, JavaScript uses the computed value as the return value. In this case, the callback returns `1`, `4`, and `9` on the 3 iterations.

#### Practice Problem 4

What is the return value of the following statement? Why?

```js
['ant', 'bear', 'caterpillar'].pop().length;
```

Show Solution

```js
11
```

There are a couple of things going on here. First, `pop` is being called on the array. `pop` destructively removes the last element from the calling array and returns it. Second, `length` is being accessed on the return value by `pop`. Once we realize that `length` is evaluating the return value of pop (`'caterpillar'`) then the final return value of 11 should make sense.

#### Practice Problem 5

What is the callback's return value in the following code? Also, what is the return value of `every` in this code?

```js
[1, 2, 3].every(num => {
  return num = num * 2; //assignment, not comparison operator 
});
```

Show Solution

```js
2
4
6
true
```

The return values of the callback will be `2`, `4`, and `6` on the respective iterations. The expression `num = num * 2` is an assignment expression and will evaluate as the expression on the right-hand side of the assignment and that is what gets returned in each iteration. Since all of those numbers are truthy values, `every` will return `true`.

#### Practice Problem 6

How does `Array.prototype.fill` work? Is it destructive? How can we find out?

```js
let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5); // (value, start (index), end (excluded))
```

```js
[1, 1, 1, 1, 1]
```

The `**fill()**` method changes all elements in an array to a static value, from a start index (default `0`) to an end index (default `array.length`). It returns the modified array.

Solution 

If you're unsure of how a method works the best thing to do is to read its [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill). Along with that, testing the method in node console can be very helpful. In this case, we can quickly check if `fill` is destructive or not by running the code in the console.

```node
> let arr = [1, 2, 3, 4, 5]
undefined
> arr.fill(1, 1, 5)
[ 1, 1, 1, 1, 1 ]
> arr
[ 1, 1, 1, 1, 1 ]
```

By reading the documentation and trying some code in the console, we can determine that `fill` takes a value and two indices and replaces the indices in between those two given indices with the given value. We can also verify that it's a destructive method.

#### Practice Problem 7

What is the return value of `map` in the following code? Why?

```js
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});
```

Show Solution

```js
[ undefined, 'bear' ]
```

There are some interesting things to point out here. First, the return value of `map` is an array, which is the collection type that `map` always returns. Second, where did we get that `undefined` value? If we look at the if condition (`elem.length > 3`), we'll notice that it evaluates as true when the length of the element is greater than `3`. In this case, the only value with a length greater than `3` is `'bear'`. Thus, for the first element, `'ant'`, the condition evaluates as false and `elem` isn't returned.

When a function doesn't explicitly return something, it implicitly returns `undefined`. That's why we see `undefined` as the first element of the returned array.

#### Practice Problem 8

Take a look at the following array.

```js
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
```

Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:

```js
{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
```

```js
let obj = {};
flintstones.forEach((key, index)  => {
  Obj[key] = index;
});
obj; // // { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
```

Show Solution



#### Practice Problem 9

Add up all of the ages from the Munster family object:

```js
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
```

```js
let totalAge = 0; 
Object.values(ages).forEach(age => totalAge += age);
totalAges; // => 6174
```

```js
Object.values(ages).reduce((accumulator, currentValue) => accumulator + currentValue);
```

Show Solution

Another option would be to use `Array.prototype.reduce` method:

```js
Object.values(ages).reduce((agesSum, currAge) => agesSum + currAge, 0); // 6174
```

One slight advantage of the `reduce` method is that we don't have to declare and initialize a variable and then reassign to that value from inside the callback. Be sure to read the documentation on [`Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) to see how it works.

When faced with a problem such as this one, however, don't get tempted to go 'method hunting' to reach a solution. As demonstrated, even if you don't know the `reduce` method, the problem can be solved equally well by using `forEach` to iterate through the object values; you could even use a basic loop (`while`, `for`, or `do/while`) to achieve the same result.

#### Practice Problem 10

Pick out the minimum age from our current Munster family object:

```js
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
```

Show Hint

```js
let ageNumbers = Objects.values(ages);
Math.min(...ageNumbers); // => 10
```

Show Solution

```js
let agesArr = Object.values(ages);
Math.min(...agesArr); // => 10
```

Recall that the `Math.min` function takes multiple numbers as arguments and returns the minimum of those numbers:

```node
> Math.min(1, 2, 3)
1
```

In the above example, though, we have the numbers in the `agesArr` array. We use the `...` operator, called the **spread operator**, to convert the array to a list of arguments.

#### Practice Problem 11

Create an object that expresses the frequency with which each letter occurs in this string:

```js
let statement = "The Flintstones Rock";
```

The output will look something like the following:

```js
{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }
```

```js
let noSpaces = statement.split('').filter(letter => !== ' ');
let result = {};

noSpaces.forEach(letter => {
  result[letter] = result[letter] || 0; // short circuiting is an important way of assigning that doesn't exist
  result[letter] += 1; 
})

```

Show Solution

There are a couple of interesting things to note about this solution. First with the expression `statement.split('').filter(char => char !== ' ')`, we convert the string into an array of characters but we make sure to exclude the space characters by using the `filter` method.

Note the following line:

```js
result[char] = result[char] || 0;
```

We're taking advantage of something called **short-circuiting** here. What this means is that JavaScript first evaluates the left operand (`result[char]`) of the `||` operator. If it is truthy, JavaScript doesn't evaluate the right operand; it only evaluates the right operand when the left is falsy. Thus, if a character doesn't exist as a key in our `results` object, `result[char]` will return `undefined` — a falsy value — resulting in the assignment of `result[char]` to `0`. If `result[char]` instead evaluates to a truthy value such as `1`, it'll simply reassign the current value to `result[char]`.

We can also code up the same logic without using the `||` operator:

```js
let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  if (Object.keys(result).includes(char)) {
    result[char] += 1;
  } else {
    result[char] = 1;
  }
});
```

Note that we don't have to convert the string to an array to solve the problem. We're doing so here only so that we can use the `forEach` method. We could've used a simple `for` loop to iterate over the string directly:

```js
let result = {};

for (let counter = 0; counter < statement.length; counter += 1) {
  let char = statement[counter];
  if (char === ' ') continue;

  result[char] = result[char] || 0;
  result[char] += 1;
}
```