### Naming Things

- use descriptive names that capture the intent of the variable. 

### Naming Conventions

- names that follow the naming conventions in the [Basics section of the JavaScript Book](https://launchschool.com/books/javascript/read/variables#variablesandvariablenames) are referred to as **idiomatic** names. 
- whether a name is idiomatic or not depends on what kind of name we're describing. 

#### Idiomatic Names

| Category                                     | Name              | Notes             |
| :------------------------------------------- | :---------------- | :---------------- |
| Non-constant variables and object properties | `employee`        |                   |
|                                              | `number`          |                   |
|                                              | `fizzBuzz`        |                   |
|                                              | `speedOfLight`    |                   |
|                                              | `destinationURL`  | URL is an acronym |
|                                              | `m00n`            |                   |
| Constructor functions and classes            | `Cat`             |                   |
|                                              | `BoxTurtle`       |                   |
|                                              | `FlightlessBird`  |                   |
| Other functions                              | `parseURL`        | URL is an acronym |
|                                              | `goFaster`        |                   |
| Configuration and magic constants            | `ABSOLUTE_PATH`   |                   |
|                                              | `TODAY`           |                   |
| Other `const` names                          | `employeeOfMonth` | Local style       |
|                                              | `HairyCat`        | Local style       |
|                                              | `ABSOLUTE_PATH`   | Local style       |

#### Valid but Non-Idiomatic Names

| Category                                     | Name           | Notes                        |
| :------------------------------------------- | :------------- | :--------------------------- |
| Universally non-idiomatic                    | `$number`      | Begins with $                |
|                                              | `fizz_buzz`    | snake_case not allowed       |
|                                              | `fizzBUZZ`     | BUZZ is not an acronym       |
|                                              | `_hello`       | Begins with `_`              |
|                                              | `goodbye_`     | Ends with `_`                |
|                                              | `milesperhour` | Undifferentiated words       |
|                                              | `MILESPERHOUR` | Undifferentiated words       |
| Non-constant variables and object properties | `Employee`     | Begins with capital letter   |
|                                              | `fizzBUZZ`     | BUZZ is not an acronym       |
|                                              | `FIZZ_BUZZ`    | SCREAMING_SNAKE_CASE         |
| Constructor functions and classes            | `cat`          | Begins with lowercase letter |
|                                              | `makeTurtle`   | Begins with lowercase letter |
|                                              | `FIZZ_BUZZ`    | SCREAMING_SNAKE_CASE         |
| Other functions                              | `ParseURL`     | Begins with capital letter   |
|                                              | `FIZZ_BUZZ`    | SCREAMING_SNAKE_CASE         |
| Configuration and magic constants            | `absolutePath` | Not SCREAMING_SNAKE_CASE     |
|                                              | `Today`        | Not SCREAMING_SNAKE_CASE     |

- Note that non-idiomatic names are not invalid names. 
  - Non-idiomatic names are commonly used by external libraries to provide names that are easy to type yet unlikely to conflict with names in other libraries.
  - For instance, the jQuery library uses a function named `$` as well as variables whose name begins with `$`, while the underscore.js library leans heavily on a variable named `_`.

#### Invalid Names

| Name       | Notes                         |
| :--------- | :---------------------------- |
| 42ndStreet | Begins with number            |
| fizz-buzz  | Hyphen not allowed            |
| fizz.buzz  | Looks like property reference |

### Avoid Magic Numbers

- A **magic number** is a number (or other simple value) that appears in your program without any information that describes what that number represents. 
- The way to avoid magic numbers is to use constants.
- Typically, magic number constants are set at the top level of a program as shown above, though you can also declare them inside a function.
- consider whether the meaning of the number is clear

```javascript
const FIRST_CHARACTER_CODE = 97;
const LAST_CHARACTER_CODE = 122;
```

```javascript
const FIRST_CHARACTER_CODE = 'a'.charCodeAt();
const LAST_CHARACTER_CODE = 'z'.charCodeAt();
```

- Can use more explicit code by calculating the values directly from the characters. 
- in the last code fragment `'a'.charCodeAt()` returns the Unicode code point of the character `a` while   `'z'.charCodeAt()` does the same thing for `z`. The resulting declaration is now much clearer and also less error-prone. 

### Formatting

- When indenting code, we will always use two space characters. We never use tab characters.
- When using curly braces, if your block is multiple lines, the opening brace is on the same line as the initial statement and the ending brace is on its own line. 
- If your block contains just a single-line statement or expression, you may condense it to one line. However, watch your line length when you do this; long lines are difficult to read. The longer the line, the more difficult it is to scan the code quickly.

```javascript
if (myObject.myNumber > 26) {
  console.log('Number is greater than 26');
} else {
  console.log('Number is less than or equal to 26');
}
```

- Semicolons should always terminate each statement or expression that is not a brace-delimited block.

```javascript
let someValue = firstValue + secondValue + thirdValue;
```

```javascript
function foo() {
  // ... some code here
  return
    42 // needs semicolon
} 
```

The code above returns `undefined` from `foo`. 

- the presence of the indented `42` suggests that we wanted to return `42`. Instead, JavaScript decided to assume that `return` is what we wanted, not `return 42`.
- With no semicolon to separate them, JavaScript sometimes sees the next statement or expression as part of the previous line, which leads to undesired behavior.

`if`, `for`, and `while` statements always use spaces between the keywords and following opening parenthesis, and between the closing parenthesis and opening brace. This prevents confusion between statements and function calls. You should also place space characters before and after operators and the equals symbol.

```javascript
// Bad
let counter=0;
while(counter<15){
  counter+=1;
}

// Good
let counter = 0;
while (counter < 15) {
  counter += 1;
}
```

Use one `let`, `const`, or `var` declaration per variable. It avoids thinking about whether to swap out a `;` for a `,`.

```javascript
// Bad
let firstName = 'Shane',
    lastName = 'Riley',
    dogs = ['Josie', 'Libby'];

// Good
let firstName = 'Shane';
let lastName = 'Riley';
let dogs = ['Josie', 'Libby'];
```

### Mutating Constants

Another common mistake that people make is to change the values of constants. For example:

```javascript
const CARDS = [1, 2, 3];
```

Since `CARDS` is a constant, you shouldn't add, remove, or modify its values. JavaScript lets you do that, but you should not. ESLint should help you avoid doing it accidentally.

### Function Guidelines

The instinct to extract code to a function is good. However, make sure that the function does one thing, and that its responsibility is limited. That implies that your functions should be short (say, 10 lines or less). If it's more than 15 lines long, consider splitting it into 2 or more functions.

A function is said to have **side effects** if it does any of the following:

1. It reassigns any non-local variable. Reassigning a variable in the outer scope would be a side effect.
2. It mutates the value of any object referenced by a non-local variable. Mutating an array or object argument, for instance, would be a side effect.
3. It reads from or writes to a file, network connection, browser, or the system hardware. **Side effects like this include writing to the console log and reading input from the terminal.**
4. It raises an exception without handling it.
5. It calls another function that has side effects.

The following functions have side effects:

```javascript
// side effect: logs output to the console
// returns: undefined

function displayTotal(num1, num2) {
  console.log(num1 + num2);
}

// side effect: mutates the passed-in array
// returns: updated array

function append(targetArr, valueToAppend) {
  targetArr.push(valueToAppend);
  return targetArr;
}
```

Here's an example of a function with no side effects:

```javascript
// side effect: none
// returns: a new number

function computeTotal(num1, num2) {
  return num1 + num2;
}
```

Most functions should return a *useful value* or they should have a side effect, but not both. 

- In the above examples, `append` both returns a useful value and has a side effect. 
- If you write functions that do both, you may have trouble remembering one of those -- either you'll forget about the side effect, or you'll forget that there's a return value that you need to examine.

- By "useful value," we mean that the function returns a value that has meaning to the calling code. For instance, a `computeTotal` function should probably return a number that contains the result of adding some numbers together. A function that returns an arbitrary value or that always returns the same value (such as `undefined`) is not usually returning a useful value.

There are exceptions to this rule about mixing side effects and useful return values. 

- For instance, if you read something from a database, you almost certainly have to return a value. If you read some input from the user's keyboard, you probably need to display a prompt, read the input from the terminal, then return a value. 
- Accessing a database and reading and writing from the terminal are side effects, but you may still need a return value.

Function names should reflect whether side effects may occur. 

- For instance, you can use a name like `displayTotal` as the name of a function that displays a total on the console. The term "display" implies that you're going to do some output -- a side effect -- rather than attempting to just calculate and return the total. 
- On the other hand, you would probably name the function that computes the total something like `computeTotal`. In this case, "compute" implies that you're going to return the value of a computation.

### Functions should be at the same level of abstraction

This guideline is a little hard in the beginning since you have to develop a feel for it over time.

Usually, functions take some input and return an output. We should be able to copy and paste the function into the REPL and test it. When working with a function, you should mentally extract the function from the program and work with it in isolation. You should be able to feed it inputs and expect it to produce some outputs. When you have a function like that, you can use it without thinking about the implementation. Working this way helps compartmentalize your focus, an important skill when working on large codebases.

If the functions in your program are correctly compartmentalized, it makes programming much simpler, especially on large programs. You can see this when you read good code; the functions are all at the same layer of abstraction.

For example, given the four functions below, which one stands out?

- `deal()`
- `hit()`
- `stay()`
- `iterateThroughCards()`

The last one, `iterateThroughCards`, is not at the same abstraction level as the other functions. The other functions are in the language of the game — verbs that are used only for this game. They all specify "what" to do, but leave the implementation details to the actual function. You shouldn't care about the implementation when you use the function. The last function is a programmer concern — iterating through cards. It's "how" you perform the task.

Again, this is going to be hard in the beginning, but pay attention to how you organize your functions, and whether you can look at a list of functions a week later and still understand how to use them without studying their implementations.

### Function Names Should Reflect What They Do

Function names should reflect whether side effects may occur:

```java
function updateTotal(total, cards) {
  // ... some code here
}
```

- When we see a function called `updateTotal`, we assume that it mutates something -- perhaps one of the arguments or something else in the program. We wouldn't expect the return value to have any significance. If it does, then you might have a problem. The less you have to remember, and the less other people have to remember while looking at your code, the better. Use naming conventions, even in your own code, to signify which types of functions mutate vs. which functions return values.

- The more you have to think about a function, the harder it is to use it. If it has side effects and returns a value, it makes debugging and using the function difficult.

One corollary of this rule is that **you should avoid functions that print things to the console and return a useful value.** 

- For instance, a `getAndDisplayTotal` function might display a total value and also return it. Those are two distinct actions that you may not always want to do together. However, if they're combined, then you probably need to repeat yourself somewhere.

> There are exceptions to the "don't print and return" guideline. One exception is a function that requests some input from the user and then returns that input. Logically, that's a single operation: "get input from the user." A simple example of such a function is the `question` function from `readline-sync`.

- Your goal should be to build small functions that are like LEGO blocks: they should be stand-alone pieces of functionality that you can use to piece together larger structures. You don't want these functions to be mentally taxing to use. Interesting structures comprise hundreds or thousands of individual LEGO pieces. Likewise, large programs combine hundreds or thousands of small functions. (Later, we'll talk about organizing functions into classes and objects).

- This process is similar to writing. Your first draft is almost exploratory, dumping out ideas all over the place. As your narrative comes into focus, the structure of your piece becomes more organized and clean.

### Displaying Output

Some functions only display information. For example:

```javascript
function welcome() {
  console.log('welcome');
}
```

That's fine, but it's not clear whether a function named `welcome` returns a string or outputs a string. One way to resolve this is to help yourself remember and prefix functions that output values with something like `print`, `say` or `display`. That requires some discipline, and it's vital that you only output values in these functions. Don't mutate arguments or return values.

- Functions are like black boxes. It takes some stuff (input) and returns some value (output) to you. They should be self-contained; you should know what they do without looking at the implementation. Coding is much easier if you follow these general guidelines.

- Remember that code not only must work correctly, but must also be **easy to read,** both by others as well as your future self.

### Miscellaneous Tips

- Watch your indentation. Use 2 spaces, not tabs. This violation burns JavaScript programmers' eyes. Verify your indentation after you've pushed to Github. (Some JavaScript style guides recommend 4 spaces, but we use 2 spaces at Launch School.)
- Name your functions from the perspective of using them later. That is, think first about how you want to invoke them; think about the implementation later. For example, if you have an array of cards, and you want to write a function to find the ace, your function should be called `findAce`, and you can use it like this: `let ace = findAce(cards);`. You shouldn't name it `findAceFromCards`, because you'd be invoking it like this: `findAceFromCards(cards)`. When the reader sees a function like that, they think "What else can you find an ace from other than cards? Tiles?" The easier it is to read your code, the easier it is to debug and maintain.
- Know when to use a **regular** `while` loop vs a **generic** `while (true)` loop. Here's an example:

```javascript
while (answer.toLowerCase() !== 'n') {
  console.log('Continue? (y/n)');
  let answer = readline.question();
}
```

When running this code, JavaScript will throw an exception of "ReferenceError: answer is not defined". To correct it, we must declare and initialize `answer` before the `while` statement, like this:

```javascript
let answer = '';
while (answer.toLowerCase() !== 'n') {
  console.log('Continue? (y/n)');
  let answer = readline.question();
}
```

That would certainly work, but another implementation would be to use a **generic loop** with a `break` statement:

```javascript
while (true) {
  console.log('Continue? (y/n)');
  let answer = readline.question();
  if (answer.toLowerCase() === 'n') break;
}
```

Here, all the code is contained in the loop, and it's slightly easier to reason about it. You could even do without the answer variable and use the user's input (i.e. `readline.question`) in the `if` condition directly, but using `answer` is fine -- remember, clarity over terseness.