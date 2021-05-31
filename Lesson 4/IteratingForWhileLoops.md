- Loops

Give us your feedback

# Iterating with for and while Loops

When working with a collection, it's common to perform a single action on each element in the collection. Instead of writing the action over and over again, loops can be used to process many, if not all, of the elements in a collection.

In a previous assignment, we looked at manually incrementing all the numbers in an array by 1. Here's a reminder of what that looked like (slightly modified).

```js
let numbers = [1, 2, 3, 4];
numbers[0] += 1;
numbers[1] += 1;
numbers[2] += 1;
numbers[3] += 1;
numbers;               // => [ 2, 3, 4, 5 ]
```

You probably noticed that lines 2 - 5 of the above code are almost identical other than the array indices. This array is relatively small; imagine if we needed to increment each value in a much larger array - say, one containing 20 or 30 numbers or maybe even 1,000,000. That's a lot of repetitive code. Situations like this are where we can use a loop to do the hard work for us.

Let's see how we'd solve this problem with a `while` loop:

```js
let numbers = [1, 2, 3, 4];
let idx = 0;

while (idx < numbers.length) {
  numbers[idx] += 1;
  idx += 1;
}

console.log(numbers); // => [2, 3, 4, 5]
```

If you understand this code immediately, you can glance at the rest of this assignment. If you have a little bit of trouble with it, though, make sure you reread the [chapter on loops](https://launchschool.com/books/javascript/read/loops_iterating) in the book, then read the rest of this assignment. Take notes and pay attention -- it's extremely critical.

### Generic Loops

In JavaScript, the most basic kind of loop uses the `while` statement with a conditional expression that is always true:

```js
while (true) {
  // some code here
}
```

Any code within the block gets executed during each iteration. Since the condition never becomes false, the loop continues to repeat forever: it becomes an infinite loop. Try the following code in the node REPL:

```node
> while (true) {
>   console.log('Hello!')
> }
```

You should see thousands of lines of text output on the console, though they may occur so rapidly, it may look like the program isn't doing anything. Press `Ctrl + C` to cancel the program. You can safely ignore the error and stack trace caused by `Ctrl + C` -- that's normal behavior.

Let's add a `break` statement after the `console.log` call. When we do, the loop iterates just once since `break` causes JavaScript to exit the nearest loop:

```js
while (true) {
  console.log('Hello!');
  break;
}
```

If we want the loop to iterate more than once, we can use a conditional statement with `break` so it only breaks out of the loop when a specific condition occurs. For example, let's say we have a variable named `number` that represents a random number. We can exit the loop when `number` equals `5` by writing the `if` condition as `number === 5`:

```js
while (true) {
  let number = Math.floor(10 * Math.random());
  console.log(number);

  if (number === 5) {
    console.log('Exiting...');
    break;
  }
}
```

Try running this code a few times (either from a code file or in the node REPL) and make a note of what you notice.

Once you've done that, compare your notes with these: Show Notes

## Iterating Over Collections

Let's see how we can use our knowledge of loops to iterate over collections.

### Strings

Here's a loop that iterates over a string and prints each character.

```js
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let counter = 0;

while (counter < alphabet.length) {
  console.log(alphabet[counter]);
  counter += 1;
}
```

Here's the same iteration performed with a `for` loop:

```js
let alphabet = 'abcdefghijklmnopqrstuvwxyz';

for (let counter = 0; counter < alphabet.length; counter++) {
  console.log(alphabet[counter]);
}
```

The `for` loop is a little more succinct as it puts the `counter` declaration and initialization, the looping condition, and the counter incrementing statement on a single line. The `for` loop is the preferred approach of the two when it comes to iterating over collections.

To print each character in the string, we need to iterate over the entire string and use string references to retrieve each letter based on its index. Since our `counter` starts at `0`, we can use that. Our looping condition, `counter < alphabet.length` makes sure that the loop stops as soon as the value of `counter` becomes equal to the length of our string, which is 26.

To print a specific character in a string, we use the index value associated with that character. Since `counter` represents the current iteration number, we can use its value as the index value for each character. That results in every character being printed one at a time.

Note that our looping condition is not `counter <= alphabet.length`. In other words, we want the loop to continue only as long as the counter is less than 26 and not until its equal to 26. The reason for that is that strings and arrays have 0-based indices and our counter also starts at zero. By the time the counter reaches `26`, the loop has already performed 26 operations and accessing `alphabet[26]` would be an out of bounds access.

Suppose the string includes spaces. Since strings can only contain characters, we know that spaces are also characters. If the string were `'a b c'` for example, each character would be printed, including the spaces.

Copy Code

```plaintext
a

b

c
```

### Arrays

To iterate over an array, we can use the `for` loop in the same way we did with a string.

```js
let colors = ['green', 'blue', 'purple', 'orange'];

for (let counter = 0; counter < colors.length; counter += 1) {
  console.log(`I'm the color ${colors[counter]}!`);
}
```

What do you think will be output by the loop?

Show Solution

In the above example, the array only contains strings. However, arrays can contain any JavaScript values, regardless of type, and can contain different types at the same time. Let's modify the array so that it contains different data types. We also modify the call to `console.log` to print the type of each element. We can use the `typeof` operator to do that.

```js
let mixed = ['hello' , 10, undefined];

for (let counter = 0; counter < mixed.length; counter += 1) {
  console.log(typeof mixed[counter]);
}
```

Now our output looks a bit different.

```plaintext
string
number
undefined
```

### Objects

Using the `for` and `while` loops to iterate over an object is a bit harder — it requires a couple more steps. That's because objects use key-value pairs instead of a zero-based index. Each value in an object is associated with a specific key. Since object keys are strings, a simple counter variable won't allow us to fetch the values we want.

To remedy this, we have to create an array containing all of the keys in the object. We can do this by using `Object.keys`, which returns an array containing all of the keys in the object. We can then use the new array of keys to iterate over the object.

```js
let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

let pets = Object.keys(numberOfPets);
let counter = 0;

while (counter < pets.length)  {
  let currentPet = pets[counter];
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
  counter += 1;
}
```

The most important thing to realize here is that this is a two-step process. First, we're iterating over the array of keys, `pets`, and saving each key into the `currentPet` variable. We then use the `currentPet` key to retrieve the appropriate value from the `numberOfPets` object.

The `console.log` statement interpolates both the current object value, `currentPetNumber`, and the current object key, `currentPet`, into the "I have ... !" string.

```plaintext
I have 2 dogs!
I have 4 cats!
I have 1 fish!
```

Recall from the [Objects chapter](https://launchschool.com/books/javascript/read/objects#whatareobjects) of the book that you don't have to use `for` or `while` loops to iterate over an object. The [for/in](https://launchschool.com/books/javascript/read/objects#iteration) loop provides a simpler way to iterate over objects:

```js
let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

for (let currentPet in numberOfPets) {
  let currentPetNumber = numberOfPets[currentPet]; // must use bracket notation instead of dot notation because it's a variable that contains a property name
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
}
```

The book discusses why `for/in` may not produce the same results as the `while` loop shown above. 

### Memory Refresh

- The static method `Object.create` is a way to create a new object that inherits from an existing object

  - `Object.create` creates a new object and sets the prototype for that object to the object passed in as an argument

  - `Object.create` is one way to use inheritance in JavaScript.

  - inheritance lets one object use the properties defined by another object

    - The prototype object can access the parent object, but itself doesn't contain those values. 

    ```js
    let bob = { name: 'Bob', age: 22 };
    let studentBob = Object.create(bob);
    studentBob.year = 'Senior';
    
    console.log(studentBob.name); // => 'Bob'
    console.log(studentBob); // {year. 'Senior'}
    ```

    `studentBob` inherits from `bob`, we can use the `name` property even though `studentBob` doesn't explicitly define it. 

- One feature—or downside, depending on how you look at it—of `for/in` is that it iterates over the properties of an object's prototypes as well:

  ```js
  let obj1 = { a: 1, b: 2 }
  let obj2 = Object.create(obj1);
  obj2.c = 3;
  obj2.d = 4;
  
  for (let prop in obj2) {
    console.log(obj2[prop]);
  }         // => 3
            //    4
            //    1
            //    2
  ```

  

- This behavior is undesirable when you want to limit iteration to an object's **own properties**, i.e., properties it defined for itself, not properties it inherited.

- However we can use the `hasOwnProperty` method to get around that problem.

  ```js
  let obj1 = { a: 1, b: 2 }
  let obj2 = Object.create(obj1);
  obj2.c = 3;
  obj2.d = 4;
  
  for (let prop in obj2) {
    if (obj2.hasOwnProperty(prop)) {
      console.log(obj2[prop]);
    }
  } // => 3
    //    4
  ```

  

### Loop Controls: break and continue

#### Positioning break

Every loop in JavaScript, whether it uses `while`, `do/while`, or `for` can be rewritten as a generic `while (true)` loop. If you're not sure what type of loop you need, you can always start with a generic loop, then modify the finished code to use the appropriate non-generic loop.

In our earlier example with random numbers, we put the `break` at the end of the loop:

```js
while (true) {
  let number = Math.floor(10 * Math.random());
  console.log(number);

  if (number === 5) {
    console.log('Exiting...');
    break;
  }
}
```

That mimics the behavior of a `do/while` loop. For instance, here's the equivalent `do/while` code:

```js
let number;

do {
  number = Math.floor(10 * Math.random());
  console.log(number);
} while (number !== 5);

console.log('Exiting...');
```

```js
let str = '';

while (true) {
  if (str.length >= 10) {
    break;
  }

  str += '*';
  console.log(str);
}
```

```js
let str = '';

while (str.length < 10) {
  str += '*';
  console.log(str);
}
```

These last few examples demonstrate that we can often replace `while (true)` loops with an equivalent `while` or `do/while` loop. In most cases, you can and should. However, that's not always the case. Sometimes, you have to exit from the middle of a loop rather than the beginning or end:

```js
while (true) {
  let number = Math.floor(10 * Math.random());
  if (number === 5) {
    console.log('Exiting...');
    break;
  }

  console.log(number);
}
```

This loop is similar to the `while (true)` loop we wrote at the beginning of this section. There, we exited after we displayed the number `5`. This one, though, never displays the number `5`. Instead, it tests the termination condition in the middle of the loop and exits before outputting the number.

Note that we can use the `break` statement in any `while`, `do/while`, or `for` loop; you aren't restricted to using it only in `while (true)` loops.

```js
let names = ['Pete', 'Naveed', 'Chris', 'Elizabeth', 'Wendy', 'Kim'];
let index = 0;

while (index < names.length) { 
  if (names[index][0] === 'E') {
    break;
  }

  console.log(names[index]);
  index += 1;
}
```

This loop iterates over the elements of the `names` array, but terminates the loop early if it encounters a name that begins with `'E'`.

#### continue and Guard Clauses

- The `break` statement lets us terminate a loop at any time. 
- The `continue` statement provides a similar service, but, instead of terminating the loop, it terminates the current iteration and returns to the top of the loop.

Suppose we want to display the squares of all the even numbers in an array. Our solution might look like this:

```js
let numbers = [ 1, 4, 3, 7, 6, 5, 2, 1 ];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 1) {
    let square = numbers[index] * numbers[index];
    console.log(square);
  }
}
```

That's simple enough. However, the nested logic is a little harder to understand than unnested logic would be. It also doesn't clearly show that the loop has no interest in the odd numbers. In a small loop like this, that's not significant, but in a larger loop, you have to scan down to find out whether the loop ever does something with the odd numbers. That decreases the readability of your code.

One way to deal with this issue is to use a **guard clause** to exclude the odd numbers from further consideration:

```js
let numbers = [ 1, 4, 3, 7, 6, 5, 2, 1 ];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 1) continue; // guard clause 

  let square = numbers[index] * numbers[index];
  console.log(square);
}
```

**A guard clause** is a conditional statement that protects the body of a loop or function from having to deal with values it doesn't need to handle. 

- In this case, we don't want the main body of our loop (lines 6 and 7) to handle odd numbers, so we use a guard clause at the top of the loop to end the current iteration of the loop and resume with the next.
- In this example, we use the `continue` statement to terminate the current iteration of the loop and perform the next. The guard clause also clearly shows that we have no further interest in odd numbers.

Note that `continue` doesn't restart the loop. Instead, it ends the current iteration and starts the next. In the above example, for instance, `continue` doesn't reset `index` to `0` as it would if it restarted the loop. However, since it starts the next iteration, it increments the `index` variable (`index += 1`) and tests the termination condition again.

### Q = Why is 'continue' statement ignoring the loop counter increment in 'while' loop, but not in 'for' loop?

### A = 

Because `continue` goes back to the start of the loop. With `for`, the post-operation `i++` is an *integral* part of the loop control and is executed before the loop body restarts.

With the `while`, the `i++` is just another statement in the body of the loop (no different to something like `a = b`), skipped if you `continue` before you reach it.

> ```js
> // continue in for loop, it increments x and retests termination condition. 
> for (let x = 1; x < 6; x++) {
>   if (x === 3) {
>     continue;
>   }
>   console.log(x);
> } 
> // logs 1 2 4 5
> 
> /* while loop is tricky. You have to do the incrementation before the continue. You also have to change the starting value of x, decrease it by 1. */
> let x = 1;
> while (x < 6) {
>   x++;
>   if (x === 3) {
>     continue;
>   }
>   console.log(x);
> } 
> // logs 2 4 5 6 => problem here because x increments before logging. 
> let x = 0;
> while (x < 6) {
>   x++;
>   if (x === 3) {
>     continue;
>   }
>   console.log(x);
> }
> // logs 1 2 4 5 6 => so we have to change the starting value of x in order to work with continue. 
>  
> ```
>
> 

Guard clauses always include a `continue`, `break`, or `return` statement in the body of the `if`, depending on need. Most shouldn't do anything else, but that's not a strict rule.

> Actually, there are some other statements you can use in a guard clause besides `continue`, `break`, and `return`, but we don't talk about them in this course.

Note that we used a single-line version of the `if` statement when writing our guard clause, contrary to the general rule that you should always use blocks with braces. It's common practice to use the single-line version of the `if` statement with guard clauses, but it isn't required. You could, for example, write:

```js
if (numbers[index] % 2 === 1) {
  continue;
}
```

However, the multi-line form makes for longer functions, especially if you have multiple guard clauses.

## Summary

Looping comprises four primary elements: a looping construct such as `for` or `while`, a counter (or control variable), a way to retrieve a current value, and a way to exit the loop. It's important to understand how to manually loop over collections with nothing more than these 4 tools. It's often tempting to go "method hunting" to search for a method to iterate over a collection, but, if you master the basics of looping, you'll find that you can perform nearly any operation you need with the simple techniques in this assignment. Methods can be useful, but they shouldn't be used as a crutch(?? ._.)

In later assignments, you'll see how to combine `for` and `while` with a few other tools to manipulate collections according to your will.