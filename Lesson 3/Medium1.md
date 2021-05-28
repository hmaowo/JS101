# Practice Problems: Medium 1

#### Question 1

Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

For this practice problem, write a program that outputs `The Flintstones Rock!` 10 times, with each line indented 1 space to the right of the line above it. The output should start out like this:

```plaintext
The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   ...
```

Solution 1

```js
let counter = 0;
while (counter < 10) {
  console.log(' '.repeat(counter) + 'The Flintstones Rock');
  counter++;
}
```

```js
for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
}
```

------

#### Question 2

Starting with the string:

```javascript
let munstersDescription = "The Munsters are creepy and spooky.";
```

Return a new string that swaps the case of all of the letters:

```javascript
`tHE mUNSTERS ARE CREEPY AND SPOOKY.`
```

Solution 2

```js
return munstersDescription.split('').map(element => {
	if (element === element.toUpperCase()) {
        return element.toLowerCase();
    } else {
        return element.toUpperCase();
    } 
}).join('');
```

------

#### Question 3

Alan wrote the following function, which was intended to return all of the factors of `number`:

```javascript
function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
```

Alyssa noticed that this code would fail when the input is `0` or a negative number, and asked Alan to change the loop. How can he make this work without using a `do/while loop`? Note that we're not looking to find the factors for `0` or negative numbers, but we want to handle it gracefully instead of raising an exception or going into an infinite loop.

**Bonus:** What is the purpose of `number % divisor === 0` in that code?

Solution 3

number % divisor determines whether divisor divides evenly into number, which would determine whether divisor is a factor of number. 

**Bonus Answer:**

It determines whether the result of the division is an integer -- if the number has no remainder, the result is an integer, so the number divided by the divisor is a factor.

```js
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
      divisor -= 1;
  }
  return factors;
}
```

------

#### Question 4

Alyssa was asked to write an implementation of a rolling buffer. You can add and remove elements from a rolling buffer. However, once the buffer becomes full, any new elements will displace the oldest elements in the buffer.

She wrote two implementations of the code for adding elements to the buffer. In presenting the code to her team leader, she said "Take your pick. Do you prefer `push()` or `concat()` for modifying the buffer?".

Is there a difference between these implementations, other than the method she used to add an element to the buffer?

```javascript
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
```

Solution 4
Yes, there is a difference. While both methods have the same return value, the first implementation mutates the argument represented by `buffer`. That is, the caller will see that the array is different when the function returns. The `rollingBuffer2` implementation doesn't mutate the argument specified by the value of `buffer`.

------

#### Question 5

What will the following two lines of code output?

```javascript
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);
```

Don't look at the solution before you answer.

Solution 5

```
0.9
true
```

WRONG

If you thought that the outputs would be `0.9` and `true`, respectively, you were wrong. JavaScript uses floating point numbers for all numeric operations. Most floating point representations used on computers lack a certain amount of precision, and that can yield unexpected results like these.

In this case, the output was:

```plaintext
0.8999999999999999
false
```

------

#### Question 6

What do you think the following code will output?

```javascript
let nanArray = [NaN];

console.log(nanArray[0] === NaN);
```

**Bonus:**

How can you reliably test if a value is `NaN`?

Solution 6

The output is `false`. `NaN` -- not a number -- is a special numeric value that indicates that an operation that was intended to return a number failed. JavaScript doesn't let you use `==` and `===` to determine whether a value is `NaN`.

**Bonus Answer:**

To test whether the value is `NaN`, we use the `Number.isNaN()` method:

Copy Code

```javascript
console.log(Number.isNaN(nanArray[0])); // true
```

------

#### Question 7

What is the output of the following code?

```javascript
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);
```

Solution 7

```js
34
```



------

#### Question 8

One day, Spot was playing with the Munster family's home computer, and he wrote a small program to mess with their demographic data:

```javascript
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}
```

After writing this function, he typed the following code:

```javascript
messWithDemographics(munsters);
```

Before Grandpa could stop him, Spot hit the Enter key with his tail. Did the family's data get ransacked? Why or why not?

Solution 8

Why? In JavaScript, objects are passed by reference. Thus, Spot's `demoObject` starts off pointing to the `munsters` object. His program could replace that with some other object, and the family's data would be safe. However, in this case, the program doesn't reassign `demoObject`; it just uses it, as-is. Thus, the object that gets changed by the function **is** the `munsters` object.

------

#### Question 9

Function and method calls can take expressions as arguments. Suppose we define a function named `rps` as follows, which follows the classic rules of the rock-paper-scissors game, but with a slight twist: in the event of a tie, it just returns the choice made by both players.

```javascript
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}
```

What does the following code output?

```javascript
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
```

Solution 9

```javascript
console.log(rps("paper", "rock")); // paper
```



------

#### Question 10

Consider these two simple functions:

```javascript
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") { 
// "no" is default function parameter, which initializes param to default value if no value or undefined is passed. 
  return param === "no" ? "yes" : "no";
}
```

What will the following function invocation return?

```javascript
bar(foo());
```

Solution 10

```
no
```

Function **parameters** are the names listed in the function's definition. Function **arguments** are the real values passed to the function. 

