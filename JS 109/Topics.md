<u>declarations, initialization, assignment, and re-assignment</u>

##### **Declarations**: 

- Declarations define variables and functions. It defines identifiers for variables and functions. It's a statement that reserves space for a variable or function with a particular name, called identifier.  
- Initialization also occurs during declaration.
- The preferred way in JS is to use the `let` keyword to declare variables. 

**Initialization**: 

- During declaration, the variable is initialized to a provided value, or undefined if no explicit value is provided. 

- In a declaration, what is normally the assignment operator `=` is instead a token that indicates you are going to supply an initial value for the variable. 

  ```js
  let x = 1; // x is initialized to 1
  ```

- If you declare variable without an **initializer**, variable is initialized to undefined. 

  ```js
  let x; // x is initialized to undefined
  ```

**Assignment**: 

- Assigns a value to its left operand based on the value of its right operand. 
- `=` is the assignment operator. 

**Re-assignment**: 

- assigns a new a new value for a variable using the assignment `=` operator. 

<u>variable scope, especially how variables interact with function definitions and blocks</u>

- Variables have scope, which is where the variable is available in a program. A variable's scope is determined by where its declared. 

- **scope** means the part of the program that can access that variable by name. There are two different types of scope

  - **local scope**: Local scope has two forms: function scope & block scope. 

    - **function scope**: Functions define a new scope for local variables. 

      Rules

      1. Outer scope variables can be accessed by the inner scope.

      2. Inner scope variables cannot be accessed in the outer scope.

      3. Peer scopes do not conflict. (variables in different scopes don't conflict)

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

      4. Nested Functions have their own variable scope. 

         ​	- Nested Functions follow the same rules of inner and outer scoped variables. 

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

         ​	- This includes functions inside functions

         ```js
         function logElements(array) {
           array.forEach(function(element) {
             console.log(element);
           });
         }
         
         logElements([1, 2, 3]);
         ```

      5. Inner scope variables can **shadow** outer scope variables. 

          - **Variable shadowing** happens when you have a local variable with the same identifier name as the outer scope variable. Since inner scope can access the outer scope, there would be 2 local variables in the inner scope with the same name. The local variable **shadows** the outer scope variable and prevents access to the outer scope local variable, or making any changes to the outer scoped variable. 

            Most identifier names- variables, parameters, function names, or class names - can shadow names from the outer scope. The only names that do not shadow are property names for objects. 

          - Example

            ```js
            let number = 10;
            
            [1, 2, 3].forEach(number => {
              console.log(number);
            });
            // 	console.log(number) will use the parameter number and discard the outer scoped local variable. 
            ```

            ```js
            let a = 1;
            
            function doit(a) {
              console.log(a); // => 3
            }
            
            doit(3);
            console.log(a); // => 1
            
            // parameter a is shadowing global variable a. 
            ```

            

    - **block scope**:  Statements and expressions grouped by opening and closing curly braces `{}`.  `if / else` and `for` and `while` loops define new block scopes. 

      Rules

      1. Outer blocks cannot access variables from inner scopes. 
      2. Inner blocks can access variables from outer scopes. 
      3. Variables defined in an inner block can shadow variables from outer scopes. 

      - But not everything between curly braces is a block. Function bodies are not blocks, nor are braces that surround an object literal, but we can treat them like blocks. Blocks that aren't functions bodies are **non**-**function blocks**.

  - **global scope**:  global variables are available across your entire program. You can use them anywhere in the program, either globally or form inside a block. 

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

**primitive value**: is data that is not an object and has no methods. Primitive values are **immutable** which means that the value doesn't change. If you assign a primitive value to a variable, you can't change the primitive value, you can only reassign the variable to a different value, or use the value in an expression. When using primitive values in operations, they always evaluate to a new value. For example `0 + 0` evaluates to a new value `0`. 

Primitive types are simple and basic. 

There are 5 primitive data types. 

- string

  - Data enclosed in single, double quotation marks, or string literals.

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
  - **Double not (!!)** converts an object/variable to a boolean value. !!Bcondition === Bcondition

**Objects**: Objects are comprised of primitive values or other objects. Objects are **mutable:** If you change something about the the object, all variables that reference that object will also change. 

- simple objects
- arrays
- Dates
- Functions

**Neither an Object nor Primitive**

- Anything that isn't data or a function is neither a primitive value nor an object. This includes
  - variables and other identifiers such as function names
  - statements such as `if`, `return`, `try`, `while`, and `break`
  - keywords such as `new`, `function`, `let`, `const`, and `class`
  - comments
  - anything else that is neither data nor a function
- Note that variables and other identifiers have or reference objects or primitive values, but the names, by themselves, are not.

**Type Coercions** : Type coercion is converting a value from one type to another. There are two types of coercion. 

**Implicit type coercion**: is when values are converted between different types automatically by the JavaScript engine. It usually happens when you use operators on values of different types. The most common operations of implicit coercion are the non-strict equality operator  `==` and the binary plus operator `+`. [Reference](Lesson 2 ImplicitTypeCoercion.md)

- Whenever you use a string operand in numeric expression with these operators `-, *, /, %`, the operands will be converted to strings similar to calling the `Number` function on the value. 

- The **non-strict equality operator** `==` coerces one operand into the other operand's type, then compares the two. 

  This chart displays how `==` coerces different data types. 

  ```javascript
  number == string // true, string coerced to number
  object == primitive // true, == object ceorced to primitive
  undefined == null // true
  boolean == any data type //bolean ceorced to number, then compared again using == 
  object == object // false, same as ===, operator, objects are equal only when they're the same object. 
  ```

- When using **binary plus**`+` operator, the general rule is that if one operand is a String and the other operand isn't, then the non-String operand is coerced into a String and concatenated with the String operand.

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

- **relational operators**: `<`, `>`, `<=`, and `>=`  are used for numeric comparison and string comparison (lexicographic order), and perform implicit coercion. 

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

- The **unary plus** `+` operator coerces values to number. 

  ```
  > +""
  0
  > +'1'
  1
  > +'2.3'
  2.3
  > +[]
  0
  > +'abc'
  NaN
  ```

- Another example is  `if (value) {...}` ,  `value` is implicitly coerced to boolean. 

- **Template Literals** implicitly coerce the interpolation expressions to strings. 

  - Hence we don't write `${something.toString()}` or `${String(something)}`.

**Explicit type coercion**: is when you (programmer) intentionally use a function to convert one type of value to another. [Reference](Lesson 2 Explicit Type Coercion.md)

>  **Best practice is to always use explicit type coercion**
>
> The only exception is to not use  `String()` or `toString()` inside interpolation expressions of template literals. `${...}` because template literals implicitly coerce the interpolation expressions to strings. 
>
> Hence we don't write `${something.toString()}` or `${String(something)}`.

- For example the **`Number`** function coerces a string to a number. 

```terminal
> Number(undefined)
= NaN

> {}.toString();
= '[object object]'

```

- **`toString`** method converts all data types except `null` and `undefined` to string. 

  - you can use the **`toString`** method on all JavaScript data types except `null` and `undefined`. It returns a string representation of the value. 
  - We can't call the method on a number literal because the `.` is interpreted as being part of a floating point number, so we should wrap the number in parentheses. 

  ```terminal
  > 42.toString()
  SyntaxError: Invalid or unexpected token
  
  > (42).toString()
  '42'
  ```

  - You can also use two `.` characters instead, though it looks a bit strange:

  ```terminal
  > 42..toString()
  '42'
  ```

- **`String`** function is another way to coerce values to strings. This function works with `null` and `undefined`

  ```terminal
  > String(42)
  '42'
  > String([1, 2, 3])
  '1,2,3'
  > String({ a: 'foo', b: 'bar' })
  '[object Object]'
  ```

  ```terminal
  > String(null)
  'null'
  > String(undefined)
  'undefined'
  ```

**binary**: when operator works with 2 values, **ternary**: operator works with 3 values, **unary**: operator works with one value. 

<u>object properties</u> [reference](https://docs.google.com/document/d/1Vzp6mfGQQbp7gd8Y0Wfq5k5h704f_yH1Y7nJ4xpGJUI/edit?usp=sharing)

**Objects** are collections of **properties**. Properties are **key-value pairs**. You can also refer to the key name as "property". 

- Object keys are strings, but values can be of any type, even other objects. 
- This is the syntax for an object literal. 

```js
let person = {
  name:    'Jane',
  age:     37,
  hobbies: ['photography', 'genealogy'],
};
```

- We can access an object value using 1) dot notation and 2) bracket notation

```terminal
> person.name                 // dot notation
= 'Jane'

> person['age']               // bracket notation
= 37
```

- Must use bracket notation for key names. 

```terminal
> let key = 'name'
> person[key]

> person['key']
```

- Use **`delete`** keyword to remove a property from an object. 

```terminal
> person = { name: 'Jane', age: 37, hobbies: ['photography', 'genealogy'], height: '5 ft', gender: 'female' }

> delete person.age
= true

> delete person['gender']
= true

> delete person['hobbies']
= true

> person
= { name: 'Jane', height: '5 ft' }
```

- If we use `const` to declare a variable and initialize it to an object, the variable can't be changed refer to any other object. But the object's properties and property values can still be modified. So `const` does not allow changing what `const` points to, but the content is still modifiable. 

```terminal
> const MyObj = { foo: "bar", qux: "xyz" }

> delete MyObj.foo
true
> MyObj
{ qux: 'xyz' }

> MyObj.qux = 'no'
'no'
> MyObj
{ qux: 'no' }


> MyObj = {} // Uncaught TypeError: Assignment to constant variable.
```

- We can use **`object.freeze`** to freeze the property values of an object, just like arrays. However, also like arrays, this function doesn't freeze nested arrays or objects. 

```terminal
> const MyObj = Object.freeze({ foo: "bar", qux: "xyz" })
> MyObj.qux = "hey there"
> MyObj
= { foo: 'bar', qux: 'xyz' }
```

-  **`hasOwnProperty`** returns true if the name of the property is one of the calling object's own properties. 
- **`Object.keys`** returns an object's keys as an array. 
- **`Object.values`** returns an array of the values from every own property in an object.  

```js
let person = { name: 'Bob', age: 30, height: '6ft' };
let personValues = Object.values(person);
console.log(personValues); // => [ 'Bob', 30, '6ft' ]
```

- `Object.entries` returns an array of nested arrays of the properties. 
- `Object.assign` merges two or more objects into a single object. This mutates the first object. 

<u>mutability vs. immutability vs. `const`</u>

- **Immutable**: means that the data's structure or value cannot be altered. 
  - Primitive values are **immutable**. This means that the value can't be altered. You can only reassign the variable to a different value. When using primitive values in operations, they always evaluate to a new value. For example `0 + 0` evaluates to a new value `0`. 
- **Mutable**: means a type of variable that can be changed. 
  -  Objects and arrays (which are also objects) are **mutable** -  it has parts that can be altered. 
- Variables declared using `const` are not necessarily immutable. If you declare an object with `const`, the object's properties can still be changed. However, the variable identifier cannot be reassigned to a different value. 

<u>loose and strict equality</u>

**Equality operators**: always evaluates to a `boolean` type. 

- The difference between strict equality and loose equality operator is that loose equality operator `==` attempts to convert operands to the same type before comparing. 
- **Loose equality / non-strict equality operator**   is `==`
  - Loose equality operators perform implicit type coercion when comparing operands are of different types. 
- **Strict equality** operator is `===` and `!==` . Strict equality operator compares two operands and returns a Boolean result. It checks whether the operands are of different types. It adheres to the Strict Equality Comparison Algorithm. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)
  - If the operands are of different types, it returns `false`
  - If both operands are objects, only return `true` if they refer to the same object. 
  - If both operands are `null` or both operands are `undefined`, return `true` 
  - If either operand is NaN, return false. 
    - NaN is the only number that is not equal to itself. You must use `Number.isNaN(value)` or `Object.is(value, NaN)` to determine whether a number is `NaN`. 
  - Otherwise, compare the two operand's values. 
    - Numbers must have the same numeric values. `+0` and `-0` and considered to be the same value. 
    - Strings must have same characters in same order. 
    - Booleans must be both true or both false. 

<u>passing arguments into and return values out of functions</u>

- A function has parameters. **parameters** are the names listed in a function's definition.  **Arguments** are the real values passed to and received by a function. 

  - if you pass fewer arguments than the declared arguments to the function,  then the missing values are set to undefined. 

    ```js
    function foo(x, y, z){
        //...
    }
    foo(1);
    ```

    ```js
    function foo(x, y, z){
        x === 1
        y === undefined
        z === undefined
    }
    ```

  - You can also pass more arguments like

    ```js
    foo(1,2,3,4,5,7); // Valid!
    ```

    Use `arguments.length` to know the amount of parameters supplied. 

    ```js
    function foo(x, y, z) {
    	return arguments.length; 
    }
    foo(1, 2, 3, 4);
    ```

- **Return values** are the values a function returns to the function caller when it finishes running, by a **return statement**. 

  - **`return`** statement ends function execution and returns a value to the *function* caller. 
  - Thus, REMEMBER that `return` exits the "nearest" function. So a return statement inside an array iteration function such as `forEach` or `filter` does not exit the function, because it's ending the execution and returning to the **callback** function. 

<u>working with Strings</u> [reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

- Strings are data enclosed in single, double quotation marks, or string literals.

- String use integer-based index that starts from 0 to represent each character. 

  - You can reference a character using the index. 

- These functions convert data type to string

  - `toString(value)` 
  - `String(value)` accepts null and undefined

- String literal syntax: string literals are enclosed by backticks (``)

  ```js
  console.log(`${text}`); // interpolation expression inside string
  ```

  ```js
  console.log('newline\n');
  ```

- String `+` any data type = string

  - When using **binary plus**`+` operator, the general rule is that if one operand is a String and the other operand isn't, then the non-String operand is coerced into a String and concatenated with the String operand.

- String objects, works on string literals. 

  - `String.charAt(index)`: returns a new string based on an index. 

  - `String.concat(str1, str2...)`: concatenates string arguments to the calling string and returns a new string. 

  - `String.endsWith()`: returns boolean (true  / false) on whether a string ends with characters of a specified string. 

    > `str.endsWith(searchString)``
    >
    > ``str.endsWith(searchString, length)` 

    ​     Parameters

    - `length` Optional

      If provided, it is used as the length of `str`. Defaults to `str.length`.

  - `String.includes(searchString, position)`: case insensitive search to determine whether a string is found, returns boolean. 

    - Optional parameter: `position`

    The position within the string at which to begin searching for `searchString`. (Defaults to `0`.)

  - `String.indexOf()`: returns the index of the first occurrence of the specified value. Returns -1 if value is not found.

    > `indexOf(searchValue)`
    > `indexOf(searchValue, fromIndex)`

    - Optional parameter`fromIndex` 

       The integer representing the index at which to start the search. 

       If `fromIndex` is greater than the string's `length`, the returned value IS THE STRING's `length

  - `String.charAt()`: returns new string of the single UTF-16 code at the specified offset into string. 

    > `charAt(index)`

  - `String.slice` 

    > `slice(beginIndex)`
    > `slice(beginIndex, endIndex)`

    1. If `start > stop`, `slice()` will return the empty string. (`""`)
    2. If `start` is negative: sets char from end of string. 
    3. if `stop` is negative: sets stop to `string.length - Math.abs(stop)` (original value), except bounded at 0. Thus, 

  - `String.substring` or `String.substr()`

    > substring(indexStart)
    > `substring(indexStart, indexEnd)`
    
    1. If `start > stop`, then `substring` will swap the 2 arguments.
    2. If either argument is negative or is `NaN`, it is treated like `0`. 
    
  - `String.concat()`: concatenates the string arguments to the calling string and returns a new string. 

    > `concat(str1)`
    > `concat(str1, str2)`
    > `concat(str1, str2, ... , strN)`

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