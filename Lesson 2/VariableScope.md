**Scope**: the part of the program that can access that variable by name. 

In JavaScript, we have two different types of scope: **global** and **local**.

Before we discuss variable scope in a bit more detail, refresh your memory by re-reading the [Variable Scope](https://launchschool.com/books/javascript/read/functions#variablescope) section from the book.

### The Global Scope

Very small JavaScript programs with no functions exist entirely within a single scope:

```js
let name = 'Julian';
console.log(name);

for (let counter = 0; counter < 3; counter += 1) {
  console.log(name);
}

console.log(name);
```

Here, we declare the name variable on the first line. After this line runs, `name` is available everywhere in the program.

The concept of global scope is a little more nuanced when you compare JavaScript in the browser to JavaScript in Node.js. In Node.js, a global variable is only available in the file/module you declare it in. If you want variables to be available in another module, you'll have to explicitly import and export them in modules. We'll talk more about this in another course when we discuss node modules. For now, you can think of global variables as variables that are available across your program. You can use them anywhere in the program, either globally or from inside a function or a block.

### Local Scope

Local Scope comes in two forms: **function scope** and **block scope**. Let's discuss each in turn:

#### Function Scope

Functions define a new scope for local variables. You can think of the scope defined by a function as an inner scope. Nested functions define nested scopes. A variable's scope is determined by where it is declared.

**Rule 1:** outer scope variables can be accessed by the inner scope

```js
let a = 1;         // outer scope variable

function logA() {
  console.log(a);  // => 1
  a += 1;          // a is reassigned to a new value
}

logA();
console.log(a);   // => 2  "a" was re-assigned in the inner scope
```

- This code demonstrates two things. The first is that inner scope can access outer scope variables. The second, and less intuitive, concept is that you can change variables from an inner scope and have that change affect the outer scope. For example, when we re-assigned the variable in the inner scope with `a += 1`, that reassignment was visible in the outer scope.

- This means that when we instantiate variables in an inner scope, we have to be very careful that we're not accidentally re-assigning an existing variable in an outer scope. That's a big reason to avoid single-letter variable names.

**Rule 2:** inner scope variables cannot be accessed in outer scope

```js
function aFunc() {
  let a = 1;
}

aFunc();
console.log(a); // ReferenceError: a is not defined
```

Here, the outer scope is the global scope, and it does not have an `a` variable. Remember that where a variable is declared determines its scope. In the above code, `a` is declared in an inner scope and thus cannot be accessed from an outer scope.

> Note that a local variable only comes into existence when you **call that function.** The mere act of defining a function doesn't create any variables. The function declaration does, however, *define* the scope of the variables. For example, in the `aFunc` function above, the function body defines where variable `a`, when created, will be accessible. However, the variable `a` doesn't get created and assigned a value unless we invoke the function. When we call the function on line 5, a variable `a` is created, assigned the value `1` and immediately discarded once the function finishes execution and control returns to the main flow of the program.
>
> Because of this, when we talk about the scope of a variable, it doesn't matter whether we ever execute the code. For instance, suppose we had the following complete program:

```js
function aFunc() {
  let foo = 1;
}
```

>  Though we never **invoke** `aFunc` and never create the `foo` variable, we still talk of it as in scope within `aFunc`.

**Rule 3:** peer scopes do not conflict

```js
function funcA() {
  let a = 'hello';
  console.log(a);
}

function funcB() {
  console.log(a); // ReferenceError: a is not defined
}

funcA();
funcB();
```

- Executing `console.log(a)` on line 7 throws an error since `a` is not in scope in `funcB`. The declaration on line 2 does declare a variable named `a`, but that variable's scope is confined to `funcA`. `funcB` can't see the variable at all since. That also means that we could declare a separate `a` variable in `funcB` if we wanted. The two `a` variables would have different local scopes and would also be independent of each other.

**Rule 4:** nested functions have their own variable scope

- Nested functions follow the same rules of inner and outer scoped variables. When dealing with nested functions, our usage of what's "outer" or "inner" is going to be relative. We'll switch vocabulary and talk about the "first level," "second level," and "third level."

```js
let a = 1;           // first level variable

function foo() {     // second level
  let b = 2;

  function bar() {   // third level
    let c = 3;
    console.log(a);  // => 1
    console.log(b);  // => 2
    console.log(c);  // => 3
  }

  bar();

  console.log(a);    // => 1
  console.log(b);    // => 2
  console.log(c);    // => ReferenceError
}

foo();
```

- One potentially surprising thing is that we can define functions within other functions in JavaScript. This is not true of all languages. It's likely that you've used this feature of JavaScript before. If you've used an array iteration method such as `forEach` inside a method, you've defined a function inside another function.

```js
function logElements(array) {
  array.forEach(function(element) {
    console.log(element);
  });
}

logElements([1, 2, 3]);
```

- Here, we're defining a new function and passing it to the `forEach` method. That's a function definition within another function. Thus far, we've only passed arrow functions into iteration methods like `forEach`. 
- This example uses the `function` syntax just to emphasize the point that you can define function inside other functions. We'll discuss this practice in detail in another course.

**Rule 5:** inner scope variables can shadow outer scope variables

```js
[1, 2, 3].forEach(number => {
  console.log(number);
});
```

Here, `number` is a parameter that represents a value that the callback function expects when it is invoked. It represents each element as the `forEach` method iterates through the array. Parameters are also local variables and the same scoping rules apply to them.

Suppose we had a variable named `number` in the outer scope, though. We know that the inner scope has access to the outer scope, so we'd essentially have two local variables in the inner scope with the same name. When that happens, it's called **variable shadowing**, and it prevents access to the outer scope local variable. See this example:

```js
let number = 10;

[1, 2, 3].forEach(number => {
  console.log(number);
});
```

The `console.log(number)` will use the parameter `number` and discard the outer scoped local variable. Variable shadowing also prevents us from making changes to the outer scoped `number`.

Variable shadowing isn't limited to callback functions. Whenever you have one scope nested within another, variables in the inner scope will shadow variables in the outer scope having the same name.

```js
let a = 1;

function doit(a) {
  console.log(a); // => 3
}

doit(3);
console.log(a); // => 1
```

Note that, in this case, it's the parameter `a` that is shadowing the global variable `a`. Most names -- variables, parameters, function names, or class names -- can shadow names from the outer scope. The only names that don't get involved in shadowing are property names for objects.

You want to avoid shadowing since it's almost never what you intended. Choosing long and descriptive variable names is one simple way to ensure that you don't run into any of these weird scoping issues. If you do run into these issues, you'll have a much better chance of debugging it if you have clear variable names.

#### Block Scope

In JavaScript, blocks are segments of one or more statements and expressions grouped by opening and closing curly braces (`{}`). Each pair of braces in the constructs like `if/else` and the `for` and `while` loops define new block scopes. The rules for block scopes are identical to those for function scopes.

1. Outer blocks cannot access variables from inner scopes.
2. Inner blocks can access variables from outer scopes.
3. Variables defined in an inner block can shadow variables from outer scopes.

>  Not all code between curly braces is a block. For instance, the code inside a function definition is not technically a block, but is, instead, called the function body. Although blocks and function bodies are very similar, there are subtle differences that you will encounter in a later course. There are also other types of things between curly braces that are not considered blocks: class definitions (introduced in a later course) and object literals are not blocks. The differences are more substantial with these constructs than with function bodies.

Let's see a few examples:

Copy Code

```js
if (true) {
  let a = 'foo';
}

console.log(a); // ReferenceError
```

Copy Code

```js
let a = 'foo';

if (true) {
  console.log(a); // => 'foo'
}
```

Copy Code

```js
function aFunc() {
  let a = 'foo';

  if (true) {
    let b = 'bar';
    console.log(a); // => 'foo'

    if (true) {
      let c = 'baz';
    }

    console.log(a); // => 'foo'
    console.log(b); // => 'bar'
    console.log(c); // => ReferenceError
  }

  console.log(a); // => 'foo'
  console.log(b); // ReferenceError
  console.log(c); // ReferenceError
}

aFunc();
```

> If you run the above example, you'll see that only one exception gets raised: `ReferenceError: c is not defined` even though we expect three exceptions. That's how exceptions work in JavaScript; they halt the execution of the program immediately. Once execution reaches line 14, it raises an error and immediately stops executing the rest of the code. The point of the example is to show that the variable `c` will not be accessible outside the inner `if` block and variables `b` and `c` will not be accessible outside the outer `if` block.

### Summary

Understanding variable scope is one of the most challenging and important aspects of learning to program. Make sure you know how variable scope works with regards to functions and blocks. Play around with various scenarios until you feel comfortable. It's likely you'll forget these rules, but the most important thing is to be able to quickly jump in the node REPL or open up your editor and refresh your memory.