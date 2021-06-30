# Practice Problems

In the last three assignments, we've gone into some depth regarding sorting, working with nested collection objects, and passing callback functions to iterative methods to produce a specified output or return value. The best way to gain a thorough understanding of these programming concepts is by putting them into practice.

The purpose of these practice problems is to let you practice the specific concepts covered in the last three assignments. If any of the problems seem hard at first, take the time to break them down and remember to focus on the <u>structure of the collection object</u>, <u>the return value of callbacks</u> and methods and the <u>side effects of any methods.</u>

### Practice Problem 1

How would you order the following array of number strings by descending numeric value (largest number value to smallest)?

```js
let arr = ['10', '11', '9', '7', '8'];
```

Show Hint

Hide Hint

Use the `Number` function and pass a callback function to the `sort` method.

```javascript
// should print 
arr.sort ((a, b) => Number(a) - Number(b));
```

Show Solution

```js
arr.sort((a, b) => Number(b) - Number(a)); // [ '11', '10', '9', '8', '7' ]
```

The key here is understanding that strings are compared character by character, so `11` is less than `7`. To compare the strings as numbers, we need to convert them to numbers within the callback.

The second part of solving this problem is sorting the array in reverse order. To do this, we need the callback to return a positive number when `b` is greater than `a`, negative if it is less than `a`. Thus, we subtract the numeric value of `a` from the numeric value of `b`.

Note that the same solution *without* the use of `Number()` would produce the same result:

```js
arr.sort((a, b) => b - a); // [ '11', '10', '9', '8', '7' ]
```

This might seem strange. Didn't we just say we needed to convert the strings to numbers? Well in this case too the strings *are* being converted to numbers, except this time they're being *implictly* coerced through the use of the subtraction operator (`-`). Subtraction implicitly coerces both strings into a number and returns a number. However, it's better to be *explicit* in your code. Relying on implicit coercion can result in a lack of clarity and lead to subtle bugs.

### Practice Problem 2

How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?

```js
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];
```

```js
books.sort((a, b) => Number(a.published) - Number(b.published)); // order the objects, but sort by the published property value 
```

Show Solution

### Practice Problem 3

For each of these collection objects, demonstrate how you would access the letter `g`.

```js
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
arr[2][1][3];

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
arr2[1]['third'][0] // objects are made of key value pairs, but may have multiple pairs. To access an object in the array, use array index. 

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
arr3[2]['third'][0][0]

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
obj1.b[1] // when using brackets obj1['b'][1] make sure to put it in quotes. Since object keys are always strings. Only if b was a variable then no quotes. 
]
let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
Object.keys(obj2.third)[0]
```

Show Solution

```js
arr1[2][1][3];
arr2[1]['third'][0];
arr3[2]['third'][0][0];
obj1['b'][1];
Object.keys(obj2.third)[0];
```

### Practice Problem 4

For each of these collection objects, demonstrate how you would change the value `3` to `4`.

```js
let arr1 = [1, [2, 3], 4];

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

let obj1 = { first: [1, 2, [3]] };

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
```

```js
arr1[1][1]= 4; 

arr2[2] = 4;

obj1['first'][2][0] = 4;

obj2['a']['a'][2] = 4;
```

Show Solution

```js
arr1[1][1] = 4;
arr1; // => [ 1, [ 2, 4 ], 4 ]

arr2[2] = 4;
arr2; // => [ { a: 1 }, { b: 2, c: [ 7, 6, 5 ], d: 4 }, 4 ]

obj1['first'][2][0] = 4;
obj1; // => { first: [ 1, 2, [ 4 ] ] }

obj2.a.a[2] = 4;
obj2; // => { a: { a: [ '1', 'two', 4 ], b: 4 }, b: 5 }
```

### Practice Problem 5

Consider the following nested object:

```js
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};
```

Compute and display the total age of the male members of the family.

```js
let maleAge = 0;
for (const property in munsters) {
  if (munsters.property.gender === 'male') { // syntax error because property is a variable
    maleAge += property.age;
  }
}

console.log(maleAge);
```

```js
//attempt 2
let maleAge = 0;
for (const property in munsters) {
  if (munsters[property].gender === 'male') { 
    maleAge += property.age;
  }
}

console.log(maleAge);
```

Show Solution

```js
let totalMaleAge = 0;

for (let member in munsters) {
  if (munsters[member]['gender'] === 'male') {
    totalMaleAge += munsters[member].age;
  }
}

console.log(totalMaleAge); // => 444
```

### Practice Problem 6

One of the most frequently used real-world string operations is that of "string substitution," where we take a hard-coded string and modify it with various parameters from our program.

Given this previously seen family object, print the name, age, and gender of each family member:

```js
let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};
```

Each output line should follow this pattern:

```plaintext
(Name) is a (age)-year-old (male or female).
```

```js
for (let property in munsters) {
  console.log(`${property} is a ${munsters[property]['age']}-year-old ${munsters[property]['gender']}`);
}

```

Show Solution

```js
Object.entries(munsters).forEach(entry => {
  let name = entry[0];
  let age = entry[1]['age'];
  let gender = entry[1].gender;

  console.log(`${name} is a ${age}-year-old ${gender}.`);
}
```

Here, we need to access both the key (each family member's name) and the value (the inner objects containing the details), so we need to use `Object.entries`, which gives us each key-value pair as the first and second elements of a sub-array.

### Practice Problem 7

Given the following code, what will the final values of `a` and `b` be? Try to answer without running the code.

```js
let a = 2;
let b = [5, 8];
let arr = [a, b]; // [2, [5, 8]]

arr[0] += 2; 
arr[1][0] -= a; // reassigning specific element of b 
// arr is[4, [3, 8]]
// a is 2
// b is [3, 8]
```

Show Solution

```js
a // => 2
b // => [ 3, 8 ]
```

The value of `a` didn't change since we don't reference `a` at any point. The code `arr[0] += 2` modifies the array `arr`, but not `a`. In effect, we are assigning a new object to that index of the array so that instead of `arr[0]` containing `2`, the value obtained from `a`, it now contains `4`. (reassigning index 0 of the array). We can confirm that by examining the value of `arr`:

```js
arr; // => [ 4, [ 3, 8 ] ]
```

Since `b` is an array and we are modifying that array by assigning a new value to index `0`, the value of `b` does change.

### Practice Problem 8

Using the `forEach` method, write some code to output all vowels from the strings in the arrays. Don't use a `for` or `while` loop.

```js
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};
```

Show Hint: You can use the `String.prototype.split` method to convert the words to arrays of individual characters.

```js
for (let property in obj) {
  obj[property].forEach(word => { // remember that property is a variable need brackets
    word.split('').forEach(letter => {
    	if ((/[aeiou]/ig).test(letter)) {
        console.log(letter);
      }
    });
  });
}
  
```

Show Solution: 

```js
let vowels = 'aeiou';

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
});

// e
// u
// i
// o
// o
// u
// e
// o
// e
// e
// a
// o
```

### Practice Problem 9

Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.

```js
let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

arr.map((subArr) => {
  if (typeOf subArr[0] === 'string') {
    return subArr.sort(); //wrong because it has side effects, mutates array
  } else {
  	return subArr.sort((a, b) => a - b));
  }
});
```

```js
arr.map((subArr) => {
  if (typeOf subArr[0] === 'string') {
    return subArr.slice()sort(); //wrong because sort is destructive, mutates array
  } else {
  	return subArr.slice().sort((a, b) => a - b));
  }
});
```

Show Solution

```js
arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    // we have an array of strings
    return subArr.slice().sort();
  } else {
    // we have an array of numbers
    return subArr.slice().sort((a, b) => a - b);
  }
});

// [ [ 'a', 'b', 'c' ], [ 1, 2, 3 ], [ 'black', 'blue', 'green' ] ]
```

From the problem description, we know that we need to return a new array with its contents transformed in some way, so `map` is a fairly obvious choice for the initial method that we need to call on the array.

We also know that we want each subarray to be ordered, so `sort` is an obvious choice here. However, since we're dealing with two types of arrays, we'll have to use two versions of `sort`. For the string arrays, we can use `sort` without arguments to sort them alphabetically. For the numbers, we must use a callback; otherwise, the numbers will be sorted by their UTF-16 character values.

We're using `slice` to obtain a copy of the subarray since `sort` is a destructive operation, and we don't want to mutate the subarrays.

### Practice Problem 10

Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.

```js
let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
```

```js
arr.map(subArr => {
  if (typeOf subArr === 'string') {
    return subArr.slice().sort();
  } else {
    return subArr.slice().sort((a, b) => b - a);
  }
});
```

Show Solution

```js
arr.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a < b) {
      return 1
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});

// => [ [ 'c', 'b', 'a' ], [ 3, 2, 1 ], [ 'green', 'blue', 'black' ] ]
```

We use the first `if` to take care of the case where the subarray elements are numbers. The second `if/else` compares the strings with each other and returns `-1`, `1` or `0` based on the comparison.

### Practice Problem 11

Given the following data structure, use the `map` method to return a new array identical in structure to the original but, with each number incremented by `1`. Do not modify the original data structure.

```js
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
```

```js
return arr.map(subArr => {
  let incrementedObj = {};
  
  for (let property in subArr) {
    incrementedObj[property] = arr[property] + 1;
  }
  
  return incrementedObj;
});
```

Show Solution

```js
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

arr.map(obj => {
  let incrementedObj = {};

  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  }

  return incrementedObj;
}); // => [ { a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 } ]

arr; // => [ { a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 } ]
```

### Practice Problem 12

Given the following data structure, use a combination of methods, including `filter`, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

```js
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
```

Show Hint

The `%` operator, called the remainder operator, can be used to ascertain if a number is a multiple of another number. A number `x` is a multiple of a number `y` if `x % y === 0`.

```js
arr.map(sub => {
  return sub.filter(number => number % 3 == 0);
})
```

Show Solution

```js
arr.map(subArr => {
  return subArr.filter(num => num % 3 === 0);
});
// => [ [], [ 3 ], [ 9 ], [ 15, 18 ] ]
```

We know that we want to return a new array with the same structure, so `map` is an excellent choice to call on the original array. For each subarray, we then return a subset of the subarray that contains only multiples of the number 3

### Practice Problem 13

Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the *odd* numbers that they contain.

```js
let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
```

Since `1 + 3 < 1 + 7 < 1 + 5 + 3`, the sorted array should look like this:

```js
[ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]
```

```js
arr.sort((a, b) => {
  let aSum = 0;
  a.forEach(number => {
    if (number % 2 === 1) {
      aSum += number;
    }
  }
  let bSum = 0;
  b.forEach(number => {
    if (number % 2 === 1) {
      bSum += number;
    }
  }
	return aSum - bSum;   
})
```

```js
arr.sort((a, b) => {
  let aSum = a.filter(num => num %  2 ===1)
  						.reduce((acc, cv) => acc + cv);
  let bSum = a.filter(num => num %  2 ===1)
  						.reduce((acc, cv) => acc + cv);
  return aSum - bSum;
})
```

Show Solution

```js
arr.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);
  let oddSumB = b.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);

  return oddSumA - oddSumB;
});
```

We use `Array.prototype.filter` to filter each subarray down to its odd elements. We then use the `reduce` function to calculate the sum of the odd values in each array. The last line returns a positive, negative, or `0` value so `sort` can order the arrays appropriately.

### Practice Problem 14

Given the following data structure write some code to return an array containing the *colors* of the *fruits* and the *sizes* of the *vegetables*. The sizes should be uppercase, and the colors should be capitalized.

```js
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};
```

The return value should look like this:

```js
[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
```



```js
let arr = [];
for (let property in obj) {
  if (obj[property]['type'] === 'fruit') {
    arr.push(obj[property]['colors'].map(color => {
      return color.slice(0, 1).toUpperCase() + color.slice(1);
    });
  } else {
    arr.push(obj[property]['size'].toUpperCase());
  }
}
```

Show Solution

```js
let capitalize = word => word[0].toUpperCase() + word.slice(1);

Object.values(obj).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes['colors'].map(char => capitalize(char));
  } else {
    return attributes['size'].toUpperCase();
  }
});
```



### Practice Problem 15

Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.

```js
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];
```



```js
let newArr = arr.filter(obj => {
 return Object.values(obj).every(subArr => { //careful about nested arrays 
   return subArr.every(num => num % 2 === 0);
 });
});
```

Show Solution

```js
arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0);
  });
});

// => [ { e: [ 8 ], f: [ 6, 10 ] } ]
```

From the problem description, it is clear that we must return a subset of the objects in the outer array, so `filter` should hopefully be a fairly obvious method choice to call on that array. The key is then to figure out how to carry out the selection.

Since `filter` returns all the elements for which the callback returns a truthy value and we only want objects where **every** number is even, `every` combined with the remainder operator is a good choice here. The situation is complicated slightly by the fact that the numbers are further nested inside the inner arrays, so we need to iterate through these first.

If all of the numbers in an inner array are even, then the inner callback returns `true` to the innermost call to `every`. If all of the inner callbacks for a particular object return `true`, then the middle callback returns `true` to the outer call to `every`, which in turn causes the outer callback to return `true` to the `filter` method for that iteration

### Practice Problem 16

Given the following data structure, write some code that returns an object where the key is the first item in each subarray, and the value is the second.

```js
let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
```

```js
let obj = {};
arr.forEach(subArr => {
  obj[subArr[0]] = subArr[1];
})
console.log(obj);
```

Show Solution

```js
let obj = {};
arr.forEach(subarray => {
  let key = subarray[0];
  let value = subarray[1];

  obj[key] = value;
});

obj; // { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
```

This task may seem complicated, at first, since the collection contains different object types, some nested three levels deep. However, you only have to work at the initial sub-level to reach a solution.

In more recent versions of JavaScript, you can use `Object.fromEntries` in a much simpler solution:

```js
Object.fromEntries(arr);
```

The `**Object.fromEntries()**` method transforms a list of key-value pairs into an object.

```js
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }
```

### Practice Problem 17

A UUID is a type of identifier often used to uniquely identify items, even when some of those items were created on a different server or by a different application. That is, without any synchronization, two or more computer systems can create new items and label them with a UUID with no significant risk of stepping on each other's toes. It accomplishes this feat through massive randomization. The number of possible UUID values is approximately 3.4 X 10E38, which is a huge number. The chance of a conflict is vanishingly small with such a large number of possible values.

Each UUID consists of 32 hexadecimal characters (the digits `0`-`9` and the letters `a`-`f`) represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., `'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'`.

Write a function that takes no arguments and returns a string that contains a UUID.

```js
function generateUUID() {
  let characters =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';
  for (let section = 0; section < sections.length; section++) {
    for (let num = 0; num < sections[section]; num++) {
      uuid += characters[Math.floor(Math.random() * characters.length)]; //remember that Math.random returns a FLOATING point number between 0 and 1
    }
	
		if (section < sections.length - 1) {
   	 uuid += '-';
    }
  }

  return uuid;
}
```



Show Solution

```js
function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';
  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }

    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });

  return uuid;
}

generateUUID(); // => '02e51c2f-dacd-c319-53b5-e40e6e8c1f78'
generateUUID(); // => '39038ab9-3b95-43d8-6959-5d785ccb9b69'
generateUUID(); // => 'f7d56480-c5b2-8d4d-465f-01a4ea605729'
```



### Summary

Hopefully, by working through these practice problems, you have been able to develop a practical understanding of the concepts covered in the previous assignments. When faced with a coding problem that requires you to iterate through a complex nested collection, it is important to focus on:

- What is happening at each level of iteration?
- What does the method do with the return value of the callback?
- What does the method itself return?
- What is the ultimate return value of the initial method call?

By using a systematic approach to break down problems in this way you should be able to leverage these concepts and techniques when faced with complex nested collection objects.