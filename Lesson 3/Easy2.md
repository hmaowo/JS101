# Practice Problems: Easy 2

#### Question 1

Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

```javascript
let advice = "Few things in life are as important as house training your pet dinosaur.";
```

Solution 1

```js
advice.replace('important', 'urgent');
```

------

#### Question 2

The `Array.prototype.reverse` method reverses the order of elements in an array, and `Array.prototype.sort` can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use `reverse` for the first solution, and `sort` for the second.

------

#### Notes

The **sort()** method sorts the elements of an array *in place* and returns the sorted array. This mutates the original array. 

| Function        | Syntax                                                       |           |
| :-------------- | :----------------------------------------------------------- | :-------- |
| `sort()`        | `arr.sort([compareFunction])`                                |           |
| **Parameter**   | **Description**                                              | Necessity |
| compareFunction | Optional. The name of the function used to determine the order of the elements. If omitted, the elements are sorted in *ascending, Unicode character order*. It must return one of the following values. | Optional  |

Compare function must return one of the following values. 

- If `compareFunction(a, b)` returns less than 0, leave `a` and `b` unchanged.
- If `compareFunction(a, b)` returns 0, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements. 
- If `compareFunction(a, b)` returns greater than 0, sort `b` before `a`.
- `compareFunction(a, b)` must always return the same value when given a specific pair of elements `a` and `b` as its two arguments. If inconsistent results are returned, then the sort order is undefined.

**Spread Syntax (...)** 

- The spread operator is just 3 dots `...`
- It can be used on iterables like an array or a string.
- It expands an iterable to its individual elements
- It can provide a function call with an array (or any other iterable) where 0 or more arguments were expected

The below snippet contains a function called sum which expects 3 arguments x, y, and z. We have an array with 3 elements, and we want to pass the elements in the array as the arguments for the function.

```js
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
```

------

```js
// Examples
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
```

Solution 2

```js
let numbers = [1, 2, 3, 4, 5];
let reversedArray = numbers.slice().reverse(); //slice() returns a copy of array
console.log(reversed); //[5, 4, 3, 2, 1]

numbers = [1, 2, 3, 4, 5];
reversedArray = (...numbers).sort((num1, num2) => num2 - num1);
console.log(reversed); // // [5, 4, 3, 2, 1]
```

**Bonus Question:** Can you do it using the `Array.prototype.forEach()` method?

```js
numbers = [1, 2, 3, 4, 5];
let reversed = [];
numbers.forEach((element) => {
    reversed.unshift(element);
});
```

------

#### Question 3

Given a number and an array, determine whether the number is included in the array.

```javascript
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true
```

Solution 3

```js
numbers.includes(number1); //false
numbers.includes(number2); // true
```

------

#### Question 4

Starting with the string:

```javascript
let famousWords = "seven years ago...";
```

show two different ways to put the expected "Four score and " in front of it.

Solution 4

```js
//method 1
"Four score and " + famousWords; 

//method 2
"Four score and ".concat(famousWords);

```

------

#### Question 5

Given an array of numbers `[1, 2, 3, 4, 5]`, mutate the array by removing the number at index 2, so that the array becomes `[1, 2, 4, 5]`.

Hint

Solution 5

```js
[1, 2, 3, 4, 5].splice(2, 1);
```

------

#### Question 6

Suppose we build an array like this:

```javascript
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
```

This code will create a nested array that looks like this:

```javascript
["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
```

Nesting data structures like we do here is commonplace in JavaScript and programming in general. We'll explore this in much greater depth in a future Lesson.

Create a new array that contains all of the above values, but in an un-nested format:

```javascript
[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]
```

Hint 1 : use array.concat();

Hint 2 : use spread syntax 

Solution 6

```js
let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
flintstones = [].concat(...flintstones);

// solution with reduce
flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);

// solution with flat
let newFlintstones = flintstones.flat();

// solution with forEach
let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});
```

------

#### Question 7

Consider the following object:

```javascript
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
```

Create an array from this object that contains only two elements: Barney's name and Barney's number:

```javascript
[ 'Barney', 2 ]
```

Hint: Object.entries()

**Object.entries()** : returns an array containing all of the `[key, value]` pairs of a given object's **own** enumerable string properties.

Solution 7

```js
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let a = [];
for (const [key, value] of Object.entries(flintstones)) {
    if (key === 'Barney') {
       	a = [key, value];
    }
}

//their solution, shift() removes the outer array [] brackets 
Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();
```



------

#### Question 8

How would you check whether the objects assigned to variables `numbers` and `table` below are arrays?

```javascript
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
```

Hint:  `Array.isArray()` 

Solution 8

```js
Array.isArray(numbers);
Array.isArray(table);
```

------

#### Question 9

Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

```javascript
let title = "Flintstone Family Members";
```

Hint

The **`padStart()`** method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

```js
padStart(targetLength) // entire length 
padStart(targetLength, padString)
```

The **`Math.floor()`** function returns the largest integer less than or equal to a given number.

```js
Math.floor(x)
```

Solution 9

```js
let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2) + title.length;
console.log(title.padStart(padding));
```

------

#### Question 10

Write two one-line expressions to count the number of lower-case `t` characters in each of the following strings:

```javascript
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
```

Solution 10

```js
console.log(statement1.split('').filter(letter => letter === 't').length);
console.log(statement2.split('').filter(letter => letter === 't').length);
```

