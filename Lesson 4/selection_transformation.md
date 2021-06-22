# Selection and Transformation

Now that we know how to loop through a collection, it's time to do something more interesting. Besides *iteration*, the two most common actions to perform on a collection are **selection** and **transformation**.

**Selection** is picking some elements out of a collection depending on one or more criteria. 

- For example, you might want to pick out all the odd numbers from an array. 

**Transformation,** on the other hand, refers to manipulating every element in the collection. 

- For example, increment all elements of an array by 1. If there are *N* elements in a collection, selection results in *N* or fewer elements, while transformation always results in the same number, *N*, of elements. 

Using these two actions, we can do nearly anything you can imagine to a collection. Therefore, it's critical to not only understand how to perform these actions, but also to develop a high level of proficiency so you can quickly and fluently work with collections.

Selection and transformation both use the basics of looping: a loop, a counter, a way to retrieve the current value, and a way to exit the loop. Keep those four things in mind. Also, selection and transformation require *criteria* that determine the results. Selection needs criteria to determine which elements to select, while transformation uses criteria to determine the transformation.

At this point, you've already seen some examples of selection and transformation in previous assignments, but here, we'll analyze these topics in more depth.

### Using Loops to Select and Transform

Let's start by looking at an example of selection. There are many conditions that you can use to select elements, but a basic example involves the selection of a single value from an array.

In the example below, we want to select all the `1`s from an array of numbers. You'll notice that this is just a basic `for` loop with one main addition: the `if` statement.

```js
let numbers = [1, 3, 9, 11, 1, 4, 1];
let ones = [];

for (let counter = 0; counter < numbers.length; counter++) {
  let currentNum = numbers[counter];

  if (currentNum === 1) {
    ones.push(currentNum); // appends currentNum to the ones array
  }
}

ones; // => [1, 1, 1]
```

The `if` condition determines which values are selected and which are ignored; this is the *selection criterion*. The rest of the code is your typical iteration code.

We can apply these same concepts to transformation. Let's loop through an array of strings, but with one addition: we'll append an `s` to each string in the array. We'll use a `while` loop for this example:

```js
let fruits = ['apple', 'banana', 'pear'];
let transformedElements = [];
let counter = 0;

while (counter < fruits.length) {
  let currentElement = fruits[counter];

  transformedElements.push(currentElement + 's'); // appends transformed string into array
  counter += 1;
}

transformedElements; // => ['apples', 'bananas', 'pears']
```

Since we're applying the transformation to every element in the array, we don't need an `if` condition, but the entire line is the *transformation criterion*. Note that, in this example, we write the transformed values to a new array and leave the original array unchanged. **When performing a transformation, it's always important to pay attention to whether the original collection is mutated or if a new collection is returned.**

### Extracting to Functions

Most of the time, selecting or transforming a collection is a specific action, e.g., select all the odd numbers or turn all elements into strings. That naturally lends the specific action being extracted into convenience functions.

Say, for example, that we wanted to be able to select all of the vowels in a given string. We're going to use the helpful `String.prototype.includes` method here to help determine whether a character is a vowel:

```js
if ('aeiouAEIOU'.includes(currentChar)) {
  selectedChars += currentChar;
}
```

Let's put it all together with a `selectVowels` function so we can call this function on any string:

```js
function selectVowels(str) {
  let selectedChars = '';

  for (let counter = 0; counter < str.length; counter += 1) {
    let currentChar = str[counter];

    if ('aeiouAEIOU'.includes(currentChar)) {
      selectedChars += currentChar;
    }
  }

  return selectedChars;
}
```

An important thing to note here is that when our function finishes iterating over the string, it returns a new string that contains the selected characters.

```js
selectVowels('the quick brown fox');     // => 'euioo'

let sentence = 'I wandered lonely as a cloud';
selectVowels(sentence);                  // => 'Iaeeoeaaou'
sentence;                                // => 'I wandered lonely as a cloud'
```

We can, therefore, call other methods or access properties on the return value.

```js
let numberOfVowels = selectVowels('hello world').length;
numberOfVowels; // => 3
```

Let's look at an example with objects. In this example, we want to select the key-value pairs where the value is `'Fruit'`.

```js
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }
```

How would you implement this function?

Show Hint: 

1. Remember that you have to loop through the keys to access the values.
2. Notice that the return value of the function is an object.

Try coding a solution and check the answer:

```javascript
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

function selectFruit(produce) {
  let a = {};
  for (veggieFruit in produce) {
    if (produce[veggieFruit] === 'Fruit') {
      a[veggieFruit] = produce[veggieFruit];
    }
  }
}
```

Show Solution

```js
function selectFruit(produceList) {  let produceKeys = Object.keys(produceList);  let selectedFruits = {};  for (let counter = 0; counter < produceKeys.length; counter++) {    let currentKey = produceKeys[counter];    let currentValue = produceList[currentKey];    if (currentValue === 'Fruit') {      selectedFruits[currentKey] = currentValue;    }  }  return selectedFruits;}
```



We'll now move on to examples of some functions that perform transformations. The function below multiplies each element in an array by 2.

```js
function doubleNumbers(numbers) {  let doubledNums = [];  let counter = 0;  while (counter < numbers.length) {    let currentNum = numbers[counter];    doubledNums.push(currentNum * 2);    counter += 1;  }  return doubledNums;}
```

We can invoke it like this:

```js
let myNumbers = [1, 4, 3, 7, 2, 6];doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]myNumbers;                // => [1, 4, 3, 7, 2, 6]
```

Note that `doubleNumbers` returned a new array with every element doubled, and that the original array was not mutated. In other words, `myNumbers` is still `[1, 4, 3, 7, 2, 6]`. The lack of mutation isn't a requirement, but it is a consequence of how we implemented the function.

If we wanted to, we could've decided that mutating the function argument is the right approach. Can you implement a `doubleNumbers` function that mutates its argument?

```javascript
let myNumbers = [1, 4, 3, 7, 2, 6];doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]myNumbers;                // => [1, 4, 3, 7, 2, 6]function doubleNumbers(numbers) {  let counter = 0;  while (counter < numbers.length) {    let currentNum = numbers[counter];    numbers[counter] = (currentNum * 2);    counter += 1;  }  return numbers;}
```

Show Solution

```js
function doubleNumbers(numbers) {
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    numbers[counter] = currentNum * 2;

    counter += 1;
  }

  return numbers;
}
```



We previously said that transformation is an operation that is performed on every element in the collection. In the next example, we'll study a function that only transforms a subset of the elements in the collection. Here, we only multiply by `2` if the value is odd. The `if` condition will only evaluate to true when `currentNumber` is odd. We check whether a number is odd by using the remainder (`%`) operator. We know from basic arithmetic that the remainder of a number divided by 2 is 0 when the number is even and 1 if it's odd.

```js
function doubleOddNumbers(numbers) {  let doubledNums = [];  for (let counter = 0; counter < numbers.length; counter += 1) {    let currentNumber = numbers[counter];    if (currentNumber % 2 === 1) {      doubledNums.push(currentNumber * 2);    } else {      doubledNums.push(currentNumber);    }  }  return doubledNums;}
```

Once again, note that we are working with a function that does not mutate its argument and instead returns a new array. We can call it like so:

```js
let myNumbers = [1, 4, 3, 7, 2, 6];doubleOddNumbers(myNumbers);  // => [2, 4, 6, 14, 2, 6]// not mutatedmyNumbers;                    // => [1, 4, 3, 7, 2, 6]
```

Though we didn't change all of the elements, we can reasonably say that we performed a transformation on the array, it's just that the transformation left some elements unchanged. Even if we don't change any elements because none met our criterion (being odd, in this case), it's still considered a transformation -- sometimes, that's called an **identity transformation**.

Here's an exercise for you: suppose we wanted to transform the numbers based on their position in the array rather than their value? Try coding a solution that doubles the numbers that have odd indices:

Show Solution

```js
function doubleNumsWithOddIndices(numbers) {
  let doubledNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];

    if (counter % 2 === 1) {
      doubledNums.push(currentNumber * 2);
    } else {
      doubledNums.push(currentNumber);
    }
  }

  return doubledNums;
}
```

### More Flexible Functions

The examples we've looked at so far have taken one argument (the collection) and performed one operation on that collection. By defining our functions in a way that we can pass in additional arguments to alter the logic of the iteration, we can create more flexible and generic functions.

Recall earlier we wrote a `selectFruit` function that selected fruits out of the `produceList` object of fruits and vegetables. Suppose we wish to select generic produce types; we want to be able to specify whether we're interested in selecting fruits or vegetables or some other kind of produce, entirely. Here's how we could build such a function:

```js
function selectType(produceList, selectionCriterion) {
  let produceKeys = Object.keys(produceList);
  let selectedItems = {};

  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    // used to be (currentValue === 'Fruit')
    if (currentValue === selectionCriterion) {
      selectedItems[currentKey] = currentValue;
    }
  }

  return selectedItems;
}
```

To use `selectType`, we have to pass in a collection and a selection criterion. In this case, the criterion is hardcoded to match with a value: if there's a match between the criterion and value, then the current key-value pair is selected into the `selectedItems` object. Here's how we can use this function:

```js
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectType(produce, 'Fruit');     // => {apple: 'Fruit', pear: 'Fruit'}
selectType(produce, 'Vegetable'); // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
selectType(produce, 'Meat');      // => {}
```

Continuing with the idea of building generic functions, let's replace our `doubleNumbers` function with a `multiply` function that can multiply the elements of the array by an arbitrary number. For instance:

```js
let myNumbers = [1, 4, 3, 7, 2, 6];
multiply(myNumbers, 3); // => [3, 12, 9, 21, 6, 18]
```

Try coding a function that lets you multiply every array item by a specified value. As with `doubleNumbers`, don't mutate the array, but return a new array instead.

Show Solution

```js
let myNumbers = [1, 4, 3, 7, 2, 6];
multiply(myNumbers, 3); // => [3, 12, 9, 21, 6, 18]

function multiply(arr, multiplier) {
  let newArr = [];
  for (let count = 0; arr < arr.length; arr++) {
    newArr.push(arr[count] * multiplier);
  }
  return newArr;
}
```



### Summary

We often want to perform iteration, selection or transformation operations on a collection. Using these 3 actions, we can manipulate a collection nearly any way we need to. Typically, these are generic actions that we can move into a function so that we can perform these operations on different collections.

Pay attention to when the original collection is mutated vs. when the function returns a new collection. That might seem trivial right now, but it's a source of much misunderstanding. Make sure you study this concept.

Understand how these functions can be made more generic by allowing for additional parameters to specify the criteria for selection or transformation.

Finally, it's common to chain actions on collections, but pay particular attention to the return value, especially if the return value is an empty collection or `undefined`. Trying to chain methods on empty collections or `undefined` is dangerous and results in a lot of broken programs.