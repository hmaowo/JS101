<u>declarations, initialization, assignment, and re-assignment</u>

- ##### **Declarations**: 

  - Declarations define variables and functions. It defines identifiers for variables and functions. It's a statement that reserves space for a variable or function with a particular name, called identifier.  
  - Initialization also occurs during declaration.
  - The preferred way in JS is to use the `let` keyword to declare variables. 

- **Initialization**: 

  - During declaration, the variable is initialized to a provided value, or undefined if no explicit value is provided. 

  - In a declaration, what is normally the assignment operator `=` is instead a token that indicates you are going to supply an initial value for the variable. 

    ```js
    let x = 1; // x is initialized to 1
    ```

  - If you declare variable without an **initializer**, variable is initialized to undefined. 

    ```js
    let x; // x is initialized to undefined
    ```

- **Assignment**: 

  - Assigns a value to its left operand based on the value of its right operand. 
  - `=` is the assignment operator. 

- **Re-assignment**: 

  - assigns a new a new value for a variable using the assignment `=` operator. 

<u>variable scope, especially how variables interact with function definitions and blocks</u>

- Variables have scope, which is where the variable is available in a program. The location where you declare a variable is the scope of the variable. 

- in Javascript, variables declared with `let` or `const` keywords have **block** scope. 

  - A **block** is the statements and expressions between a pair of opening and closing curly braces `{}`, usually. 

  - But not everything between curly braces is a block. Function bodies are not blocks, nor are braces that surround an object literal, but we can treat them like blocks. Blocks that aren't functions bodies are **non**-**function blocks**.

```js
{
  // this is a block
  let foo = 42;
  console.log(foo);
}

if (answer === 'yes') {
  // this is a block
  console.log('yes');
} else {
  // so is this
  console.log('nope');
}

while (answer !== 'no') {
  // this is a block
  doSomething();
}

function foo() {
  // not technically a block. However, we can treat it as a block.
  let foo = 42;               // foo has block scope
  console.log(foo);
}

let foo = {
  // this is not a block
  bar: 42,
};
```

- If you declare a variable outside a block, the variable is available within the block as well as after the block ends. 

  ```js
  if (1 === 1) {
    let a = 'foo';
  }
  
  console.log(a); // ReferenceError: a is not defined
  ```

  ```js
  let a = 'foo';
  if (1 === 1) {
    a = 'bar';
  }
  
  console.log(a);    // => 'bar'
  // a has a braoder scope here than the a variable in the previous example. 
  ```

<u>primitive values, objects, and type coercions</u>

- **primitive value**: is data that is not an object and has no methods. 
  
- There are 5 primitive data types. 
  
  - string
  
    - Must be enclosed in single, double quotation marks, or string literals.
  
  - number
  
    - can't use commas for grouping
  
    - **NaN** 
  
      - Is the result of an attempted math operation that is not valid number nor an infinite number. 
      - NaN is a number.
      - It's the only value in JavaScript that is not equal to itself
      -  You must use `Number.isNaN` or `Object.is` to determine whether a number is `NaN`. 
  
      ```js
      > let value = NaN;
      > Number.isNaN(value)
      = true
      
      > Object.is(value, NaN)
      = true
      ```
  
    - Infinity = 1/0
  
    - negative infinity - 1/0
  
  - undefined
    
    - Undefined is assigned to any object that has been declared but not yet initialized or defined.
    - It signifies an absence of value. 
    - It may arise implicitly. 
    
  - null
    - Null is a keyword that signifies an absence of value. 
    - It's similar to undefined but it never arises implicitly, you must use null explicitly if you want to use it. 
    - Null's type is 'object'.
    
  - boolean
  
    - Boolean is a datatype that returns either true or false.
    - **Double not (!!)** forces an object/variable to a boolean value. !!Bcondition === Bcondition
  
- **objects**: every type that is not a primitive type is an **object type**

- **Type Coercions**

  - Type coercion is converting a value from one type to another. 

  - There are two types of coercion. 

  - **Implicit type coercion**: is when values are converted between different types automatically by the JavaScript engine. It usually happens when you use operators on values of different types. The most common operations of implicit coercion are the non-strict equality operator  `==` and the binary plus operator `+`. 

    - The **non-strict equality operator** `==` coerces one operand into the other operand's type, then compares the two. 

      This chart displays how `==` coerces different data types. 

      ```javascript
      number == string // true, string coerced to number
      object == primitive // true, == object ceorced to primitive
      undefined == null // true
      boolean == any data type //bolean ceorced to number, then compared again using == 
      object == object // false, same as ===, operator, objects are equal only when they're the same object. 
      ```

    - When using **binary plus**`+` operator, if one operand is a String and the other is not, JavaScript coerces the non-String operand into a String and concatenates it with the String operand.

      ```terminal
      > '1' + 2
      = '12'
      
      ```

      If one operand is an object, both operands are converted to strings and concatenated together. 

      ```
      [1] + 2;        // "12"
      42 + {};        // "42[object Object]"
      [1, 2] + 3;     // "1,23"
      [] + 5;         // "5"
      ```

      If both operands are numbers, booleans, nulls, or undefined, they are converted to numbers and added together. 

      ```
      1 + true;       // 2
      1 + false;      // 1
      true + false;   // 1
      null + false;   // 0
      null + null;    // 0
      1 + undefined;  // NaN
      ```

    - **relational operators**: `<`, `>`, `<=`, and `>=`  are used for numeric comparison and string comparison (lexicographic order). 

    ```
    11 > '9';       // true -- '9' is coerced to 9
    '11' > 9;       // true -- '11' is coerced to 11
    123 > 'a';      // false -- 'a' is coerced to NaN; any comparison with NaN is false
    123 <= 'a';     // also false
    true > null;    // true -- becomes 1 > 0
    true > false;   // true -- also becomes 1 > 0
    null <= false;  // true -- becomes 0 <= 0
    undefined >= 1; // false -- becomes NaN >= 1
    ```

    

    - The **unary plus** `+` operator coerces strings to numbers
    - Another example is  `if (value) {...}` ,  `value` is implicitly coerced to boolean. 

  

  - **Explicit type coercion**: is when you decide to convert between types by using the appropriate code. 

    - For example the `Number` function coerces a string to a number. 

    ```terminal
    > Number(undefined)
    = NaN
    
    > {}.toString();
    = '[object object]'
    
    ```

<u>object properties</u>

<u>mutability vs. immutability vs. `const`</u>

<u>loose and strict equality</u>

<u>passing arguments into and return values out of functions</u>

<u>working with Strings</u>

<u>working with Arrays, especially the iteration methods (`forEach`, `map`, `filter`, and `find`)</u>

<u>working with Objects; accessing keys and values of an Object as arrays</u>

<u>arrays are objects</u>

<u>understand the concepts of *pass-by-reference* and *pass-by-value*</u>

<u>variables as pointers</u>

<u>console.log vs. return</u>

<u>truthiness vs. boolean</u>

<u>function definition and invocation</u>

<u>function declarations, function expressions, and arrow functions</u>

<u>implicit return value of function invocations</u>

<u>first-class functions</u>

<u>side-effects</u>

<u>naming conventions (legal vs idiomatic)</u>

<u>be able to explain what a function does without talking about its implementation; that is, document a function's use and purpose. (See below.)</u>

### 