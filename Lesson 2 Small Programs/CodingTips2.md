### Using blank lines to organize code

Use some blank lines to separate the different concerns in the code.

```js
// better

const readline = require('readline-sync');

console.log('Enter your name');
let name = readline.question();

while (name.trim() === '') {
  console.log("That's an invalid name. Try again:");
  name = readline.question();
}

console.log(`Welcome ${name}!`);
console.log("What would you like to do?");
```

Visually, you can quickly see where the name variable is declared. You can also see that this small code snippet is roughly divided into 4 parts:

- constant and variable declaration and initialization
- initial user input
- input validation
- using the variable

### Name functions appropriately

- if you have some functions that output values, then preface those functions with `display` or `print`.
  - For example, if you see a function named `printTotal`, you can be sure it will output a total and not return anything.
- All this goes back to two bits of advice: a function should do one thing and be named appropriately. If you can treat a function as a "black box," then it's a well-designed function. You should be able to use a function named `total` and understand that it returns a value. Likewise, you should be able to use a function named `printTotal` and realize that it returns `undefined` without looking at either implementation.

Don't mix up those concerns. Don't write a function that does more than one of these things:

- mutate a value
- output something
- return a meaningful value

Make sure your function does one of those things. 

### Don't mutate the caller during iteration

```js
let words = ['scooby', 'do', 'on', 'channel', 'two'];

words.forEach(word => {
  console.log(word);
  words.shift();
});

console.log(words); // logs ['channel', 'two']
```

- Don't mutate a collection while iterating through it. 

- You can mutate the individual elements within that collection, just not the collection itself. 

```js
let pairs = [[6, 'scooby'], [2, 'do'], [2, 'on'], [7, 'channel'], [3, 'two']];

pairs.forEach(pair => {
  pair.shift();
});

console.log(pairs); // logs [['scooby'], ['do'], ['on'], ['channel'], ['two']];
```

### Variable shadowing

Variable shadowing occurs when you choose a local variable in an inner scope that shares the same name as a variable in an outer scope. It's incredibly easy to make this mistake; it essentially prevents you from accessing the outer scope variable from an inner scope.

```js
let name = 'johnson';

['kim', 'joe', 'sam'].forEach(name => {
  // uh-oh, we cannot access the outer scoped "name"!
  console.log(`${name} ${name}`);
});
```

If you pick a name that is identical to an outer scope variable, variable shadowing will prevent you from using the outer scope variable.

### Don't use assignment in a conditional

We recommend that you never use assignment in a conditional. It's not clear whether you meant to use `==` or `===` or if you indeed meant to do an assignment.

```js
// bad
let someVariable;

if (someVariable = getAValueFromSomewhere()) {
  console.log(someVariable);
}

// good

let someVariable = getAValueFromSomewhere();

if (someVariable) {
  console.log(someVariable);
}
```

The first `if` statement works, but it's incredibly confusing, and others reading your code won't be 100% confident whether it's a bug or intentional. Avoid this practice.

However, you will encounter this type of code in the wild. Some experienced programmers do it all the time, especially programmers that have been around for a long time. For example, here's a while loop that iterates through a collection:

```js
let numbers = [1, 2, 3, 4, 5];
let num;

while (num = numbers.shift()) {
  console.log(num);
}

console.log(numbers); // []
```

> Boolean object value: **Any** object of which the value is not [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) or [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null), including a `Boolean` object whose value is `false`, evaluates to `true` when passed to a conditional statement. 
>
> **Any** object of which the value is not [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) or [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null), including a `Boolean` object whose value is `false`, evaluates to `true` when passed to a conditional statement. For example, the condition in the following [`if`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement evaluates to `true`:
>
> ```
> var x = new Boolean(false);
> if (x) {
>   // this code is executed
> }
> ```
>
> This behavior does not apply to `Boolean` primitives. For example, the condition in the following [`if`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement evaluates to `false`:
>
> ```
> var x = false;
> if (x) {
>   // this code is not executed
> }
> ```

`Array.prototype.shift` removes and returns the first element in the array. When there's nothing left to remove, `shift` returns `undefined`. This loop takes advantage of that fact to serve as the loop termination condition.

As a convention, if you must do this, wrap the assignment in parentheses. This will signify to future programmers that you know what you're doing and this is done on purpose.



```js
let numbers = [1, 2, 3, 4, 5];
let num;

while ((num = numbers.shift())) {
  console.log(num);
}

console.log(numbers); // []
```

However, we still recommend that you don't do this.

### Use underscore for unused callback parameters

Suppose you have an array of names, and you want to print out a string for every name in the array, but you don't care about the actual names. In those situations, use an underscore to signify that we don't care about this particular callback parameter.

```js
let names = ['kim', 'joe', 'sam'];
names.forEach(_ => {
  console.log('Got a name!')
});
// _ underscore as the element
```

Another example is when you need the second parameter but don't need the first one. You can use `_` to indicate that the first parameter is not being used by the callback:

```js
let names = ['kim', 'joe', 'sam'];
names.forEach((_, index) => {
  console.log(`${index + 1}: got a name!`);
});

// logs
// => 1: Got a name!
// => 2: Got a name!
// => 3: Got a name!
```

### Gain experience through struggling

The final tip in this assignment is about dealing with struggling. There are two things that beginners feel at this stage:

- that they must know the "best" or "right" way to do something, so they feel they must learn "best practice."
- that they waste too much time debugging and not doing things correctly the first time

To the first point: it's less impactful to learn "best practices" without first learning why they are best practices. That leads to the second point, which is that you must learn to be ok with struggling through the "bad" or sub-optimal practices first. That's not wasting time, that's getting experience. Becoming a good developer means experiencing and solving a lot of weird issues.

In other words, don't memorize "best practices," but spend enough time programming to the point where you understand the context for those practices. If you do that, you'll be able to lean on your experience rather than try to retrieve a bullet list from something you read months or years ago.

Therefore, don't fear violating rules or be afraid to make mistakes. However, keep an eye out for improvements. Coding is like writing -- there are syntactical rules, but there are also creative ways of expression.

We can't say this enough: spend time programming. Learn to debug problems, struggle with them, search for the right terms, play around with the code, and you'll be able to transform into a professional developer. That's what professional developers do every day.