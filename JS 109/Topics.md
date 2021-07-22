**Method**: Methods are invoked when you prepend a variable name or value followed by period (`.`) to a function invocation. 

```js
'xyzzy'.toUpperCase()
```

#### declarations, initialization, assignment, and re-assignment

##### **Declarations**: 

- Declarations define variables and functions. It binds a variable or function to an identifier. It's a statement that reserves space for a variable or function with a particular name, called identifier.  
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

#### variable scope, especially how variables interact with function definitions and blocks

- Variables have scope, which is where the variable is available in a program. A variable's scope is determined by where its declared. 

- **scope** means the part of the program that can access that variable by name. There are two different types of scope

  - **local scope**:  Local scope has two forms: function scope & block scope.  **Local Variables** exist within function scope and block scope.

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

  - **global scope**: variables declared outside of blocks. 
  
    -  global variables are available across your entire program. You can use them anywhere in the program, either globally or from inside a block. 
    - **Global variables**: are variables not inside functions or blocks. 

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

#### primitive values, objects, and type coercions

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
- **arrays**: 
  - an indexed based list of elements, each element has a value of any type. You can define an array by placing a list of values between brackets  (`[]`). 
  - Uses zero-based indexing system.
  - Replace and add elements with brackets `[]` and assignment operator
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

#### mutability vs. immutability vs. `const`

- **Immutable**: means that the data's structure or value cannot be altered. 
  - Primitive values are **immutable**. This means that the value can't be altered. You can only reassign the variable to a different value. When using primitive values in operations, they always evaluate to a new value. For example `0 + 0` evaluates to a new value `0`. 
- **Mutable**: means a type of variable that can be changed. 
  -  Objects and arrays (which are also objects) are **mutable** -  it has parts that can be altered. 
- Variables declared using `const` are not necessarily immutable. If you declare an object with `const`, the object's properties can still be changed. However, the variable identifier cannot be reassigned to a different value. 
  - `Const` prohibits changing what `const` points to, but does not prohibit changing the `const` object properties.
  - we can't reassign an object declared with `const`, but we can still mutate it (add and change the properties of the object). 

#### loose and strict equality

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

#### working with Strings 

[reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

- Strings are data enclosed in single, double quotation marks, or string literals.

- STRINGS CANNOT BE MUTATED. 

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

- String methods [reference](Lesson 4 String methods)


#### working with Arrays, especially the iteration methods (`forEach`, `map`, `filter`, and `find`)

Iteration methods - Array methods. 

- `Array.forEach()`:  loops through each element in an array and executes an anonymous callback function on that array element. 

  - We pass a **callback** function to forEach as an argument. When forEach() runs, it invokes the call back once for each element, passing the *element's value* as the argument. 
  - forEach() always returns undefined. 
  - forEach() does not mutate the array. 

  ```js
  array.forEach(function(element)) { // anonymous function 
  	...        
  });
  
  array.forEach(element => { // anonymous arrow function
    
  });
  ```

  ```javascript
  // Arrow function
  forEach((element) => { ... } )
  forEach((element, index) => { ... } )
  forEach((element, index, array) => { ... } ) // array is the array forEach() was called upon. 
  
  // Callback function
  forEach(callbackFn)
  forEach(callbackFn, thisArg)
  
  // Inline callback function
  forEach(function callbackFn(element) { ... })
  forEach(function callbackFn(element, index) { ... })
  forEach(function callbackFn(element, index, array){ ... })
  forEach(function callbackFn(element, index, array) { ... }, thisArg)
  
  ```

- `Array.map()`: creates a new array by using the results of executing a callback function on each element of an array. 

  -  Transforms an array's elements that returns a new array with the transformed values. If you don't have a return value, then that iteration will return undefined and the element will be undefined. 
  - Use `Array.map()` when you want to build a new array. 
  - `Array.map()` does not mutate the original array. 

  ```js
  // Arrow function
  map((element) => { ... } )
  map((element, index) => { ... } )
  map((element, index, array) => { ... } )
  
  // Callback function
  map(callbackFn)
  map(callbackFn, thisArg)
  
  // Inline callback function
  map(function callbackFn(element) { ... })
  map(function callbackFn(element, index) { ... })
  map(function callbackFn(element, index, array){ ... })
  map(function callbackFn(element, index, array) { ... }, thisArg)
  
  ```

- `Array.filter()`:  returns a new array that includes all the elements that were returned as truthy through a testing (callback) function. Returns an empty array if no elements passed the testing function. 

  - Definition 2`Array.filter()`:  iterates over each element in an array and invokes & executes a callback function on that element. If the callback function returns a truthy value, then that element's value is appended to the new array. If the callback function doesn't return a truthy value, the function does nothing. At the end of this function, the new array is returned. So if none of the elements return truthy, then `Array.filter()` returns an empty array`[]`. 

  ```terminal
  > [1, 2, 3].filter(element => element > 4)
  []
  ```

  - `Array.filter()` does not mutate the original array. 

- `Array.find()`: executes a testing / callback function for each index in an array until a truthy value is returned. `find` returns the value of that element. If no truthy value is returned, `find` returns `undefined`. 

  - returns the **value of the first element** in an array that passes(textbook word: satisfies) the testing (callback) function. If no element satisfies the testing function, `undefined` is returned. 

  ```js
  const array1 = [5, 12, 8, 130, 44];
  
  const found = array1.find(element => element > 10);
  
  console.log(found);
  // expected output: 12
  
  ```


#### object properties 

[reference](https://docs.google.com/document/d/1Vzp6mfGQQbp7gd8Y0Wfq5k5h704f_yH1Y7nJ4xpGJUI/edit?usp=sharing) [another reference](https://docs.google.com/document/d/17dKDbqq2XgUw4fErXA0iZiUiROTj50loBjYx4quwYYg/edit)

**Objects** are collections of **properties**. Properties are **key-value pairs**. You can also refer to the key name as "property". 

- Object keys are strings, but values can be of any type, even other objects. Key names must be unique. 
- Objects are passed by reference— when we make changes to an object passed into a function, those changes are permanent.
- We can navigate complex, nested objects by chaining operators.
- We can iterate through objects using the For...in syntax.

- Objects are mutable, we can change their properties even when they're declared with `const`'. Just that the variable can't be changed to refer to any other object. If we use `const` to declare a variable and initialize it to an object, the variable can't be changed refer to any other object. 

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

```js
let person = {
  name:    'Jane',
  age:     37,
  hobbies: ['photography', 'genealogy'],
};
```

- An object literal is composed of comma-separated key-value pairs surrounded by curly braces.

#### working with Objects; accessing keys and values of an Object as arrays

 [reference](https://launchschool.com/books/javascript/read/objects#whatareobjects)

Access key and values of an Object as an array

- Referencing an out of bounds index, or using a key to access a property that doesn't exist returns `undefined`
  - **`hasOwnProperty`** returns true if the name of the property is one of the calling object's own properties. This would differentiate between a property with `undefined` as its value and one that doesn't exist. 
  - Another way is to use `Object.keys(obj).includes('c')`

- Can access nested objects by chaining operators.

  <img src="https://lh6.googleusercontent.com/aCCqfxI9_EWcw5f6pZonYtVdpff8LYi0daGCHT5tSV1nadKIFQoP7TWUfT4h0cJx1CuGPpDUlu_Rvcbun-kBtn1mkDdum60qKVFiCwzPgNSAtSgtiJS4HCjgcCQUJZttxeQxxdDH" alt="img" style="zoom:50%;" />

  ```js
  spaceship.nanoelectronics['back-up'].battery 
  // returns Lithium
  ```

- We can access an object value using 1) dot notation and 2) bracket notation. 

```terminal
> person.name                 // dot notation
= 'Jane'

> person['age']               // bracket notation
= 37
```

- Use chain reference to access nested values. 
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

- **`Object.keys()`** returns an object's keys as an array. 

  ```js
  let obj = { ''};
  let array = Object.keys(obj);
  ```

- **`Object.values`** returns an array of the values from every own property in an object.  

#### Working with Objects

- iterate over object with for...in loop

```js
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

for (let prop in person) {
  console.log(person[prop]);
}                             // => Bob
                              //    30
                              //    6 ft
```

- `Object.values(obj)` returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. 

```js
let person = { name: 'Bob', age: 30, height: '6ft' };
let personValues = Object.values(person);
console.log(personValues); // => [ 'Bob', 30, '6ft' ]
```

- `Object.entries` returns an array of nested arrays of the properties. (nested `[key, value]` pairs). 
- We can use **`object.freeze`** to freeze the property values of an object, just like arrays. However, also like arrays, this function doesn't freeze nested arrays or objects. 
  - `Object.freeze` only freezes the object that is passed to it. So nested objects can still be modified. 

```terminal
> const MyObj = Object.freeze({ foo: "bar", qux: "xyz" })
> MyObj.qux = "hey there"
> MyObj
= { foo: 'bar', qux: 'xyz' }
```

- `Object.assign` [reference](Lesson 5 nested_data_structures) merges two or more objects into a single object. This mutates the first object. 

  - Can be used to create a shallow copy of the object. 

    ```js
    let copyOfObj = Object.assign({}, obj);
    ```

#### arrays are objects     

[reference][Lesson 5 nested_data_structures]

- When arrays declared and initialized with `const`, the contents of the array are still modifiable. `Const` merely prohibits the identifier from referencing any other array. 

- In order to make the elements of an array constant, use `Object.freeze` method. However `Object.freeze` only works one level deep in a nested array. The nested arrays can still be modified. 

  ```js
  let arr = Object.freeze([[1], [2], [3]]);
  arr[2].push(4);
  arr; // =>  [ [ 1 ], [ 2 ], [ 3, 4 ] ]
  ```

- `Array.slice()` creates a shallow copy of the array. Only the top level array is copied. When the array contains other objects, those objects are shared, not copied. When you mutate a shared object in an array or other collection, it is the shared object you are affecting rather than the collection. 

#### passing arguments into and return values out of functions

- **Parameters** are the names assigned to a function's arguments; **arguments** are the values that are passed to and received by a function. 

- Variables are not passed to or returned by functions: **values **or **references** are passed. 

- if you pass fewer arguments than the declared arguments to the function,  then the missing values are set to undefined. 

  - **Default parameters** allow parameters to have predetermined value in case there is no argument passed into the function or the argument is `undefined` when called. 

  ```js
  function foo(x, y, z = 2){
      //...
  }
  foo(1);
  ```

  ```js
  function foo(x, y, z){
      x === 1
      y === undefined
      z === 2 // default parameter value. 
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

- **Return values** are the values a function returns to the call location when it finishes running. All JavaScript function calls evaluate to a value. By default, the value is `undefined` --> the **implicit return value**. 

  - **`return`** statement ends function execution and returns a specific value to the *function* caller. This is an **explicit return value**. 
  - Thus, REMEMBER that `return` exits the "nearest" function. So a return statement inside an array iteration function such as `forEach` or `filter` does not exit the function, because it's ending the execution and returning to the **callback** function. 

#### understand the concepts of *pass-by-reference* and *pass-by-value* 

[Lesson 2](Pass by Reference vs Pass by Value)

- **Pass-by-reference** and **pass-by-value** refer to how *function arguments* are passed and returned. 

  - **Pass by value** means passing a copy of the original variable's value. The original variable retains the same value. 

    - When you return the value, you can returning a new value. 
    - <u>*A copy of the actual parameter's value*</u> is made in the memory: so the caller and caller have two independent variables with the same value. 
    - Primitive values are always pass-by-value. Primitive values cannot be permanently altered by any function or operation. 
    - Passing by value creates new **instances** of the 

  - **Pass by reference** means passing a reference (pointer) of an object, rather than the actual value.

    - So if the original object is mutated, any variables that reference the original object also changes. If an object is not mutated, it's not pass-by-value. 
    - Function is able to change the original object. 
    - Passing the **pointer**/ reference of an argument to the called function so *<u>a copy of the address of the actual parameter</u>* is made in the memory. 

  - Pass-by-sharing

    - Objects exhibit both pass-by-reference and pass-by-value (*pass- by-sharing*). 

    - Rule: If an operation in a function mutates its object argument, the original object is also mutated. 

    - Methods that mutate callers are called **destructive functions**. 

    - Rules

      - **Reassignment is never destructive**: original array not changed. 

      ```js
      function addName(arr, name) {
        arr = arr.concat([name]);
      }
      
      let names = ["bob", "kim"];
      addName(names, "jim");
      console.log(names); // => [ 'bob', 'kim', ]
      // reassignment itself is not destructive. 
      ```

      - `array.push()` is destructive

      ```js
      function addNames(arr, name) {
        arr = arr.push(name); // push returns lengt of new array. 
        console.log(arr); // arr is now 3, the length of new array. 
      }
      
      let names = ["bob", "kim"];
      addNames(names, "jim");
      console.log(names); // => [ 'bob', 'kim', 'jim' ] but names was mutated. 
      // 
      ```

- `Array.slice()` uses pass-by-sharing because it creates a shallow copy.  It performs pass-by-value on the first level by creating a copy of the values of the original array. But if that array contains nested objects, some nested objects may still be connected to its own original variables and hence  `Array.slice` performs pass-by-reference for those sub-objects. 

  - slice() is a **shallow copy** because **<u>certain</u>** sub values are still connected to *their* original variable*s*. If you alter the sub-values, that change will be reflected in the original array. 

  ```js
  let a = ['hi'];
  let b = [a, 'bye']
  let c = b.slice(); // c is a shallow copy of b. 
  
  console.log(c) 
  c.push('random');
  console.log(c) // [ [ 'hi' ], 'bye', 'random' ]
  console.log(b) // [ [ 'hi' ], 'bye' 
  // changes made to c's outer array doesn't change original variable (b). The outer aray is pass-by-value. 
  
  c = b.slice(); // let's reassign c back to b. 
  
  c[0].push(1) // This mutates all the arrays. 
  console.log(a) // [ 'hi', 1 ]
  console.log(b) // [ [ 'hi', 1 ], 'bye' ]
  console.log(c) // [ [ 'hi', 1 ], 'bye' ]
  
  c[0] = 'hello';
  console.log(a) // [ 'hi', 1 ]
  console.log(b) // [ [ 'hi', 1 ], 'bye' ]
  console.log(c) // [ 'hello', 'bye' ]
  
  // b is not mutated here because c[0] reassigns it's 0th index to 1 instead of a. So a doesn't get changed. Reassignment is never a mutating change.  You must mutate sub-value's original variable (a) in order to mutate b.  Whether you mutate a directly, or mutate a by accessing it through b or c, the change will be reflected in all of the arrays.
  ```

  > - **Deep copy**: makes a duplicate of every item in an existing array or object.  
  >   - It creates **completely new instances** of any subarrays or subobjects in the source object. 
  >   - All values are copied and disconnected from the original variable.
  >
  > - **Shallow copy**: only makes a duplicate of the outermost values in an array or object. Shallow copy stores the copy of the original object and references to objects. 
  >   - **<u>Certain</u>** sub-values are still connected to the original variable. (Not all sub-values in nested array are connected to original variable. ) If you alter the sub-values, that change will be reflected in the original array, and all variables that reference that original array

  

#### Variables as pointers 

[lesson 5](variables as pointers) [Book More Stuff Variables as Pointers](Intro to Javascript) [lesson 4](Collection basics) [lesson 3](easy3)

**Variable** is a name for a specific place in memory. Variables hold data value and must have a unique identifier name. Variables are declared using `let` or `const` and are initialized to `undefined` unless specified to be initialized to a specific value. 

- Variables as **pointer** means that variables point  to / **references** an address place in memory. 
- **Variables always have unique memory addresses**. Each time you create a **<u>new</u>** variable, JavaScript allocates memory to hold its value. Once the variable is created, it is permanently bound to that  memory location until the variable is discarded. 

Primitive values

- For most **primitive** values, the actual value of the variable is stored the allocated memory address.  

```js
let count = 1;
count = 2; // reassigning count means count points to/references same address in the memory but now has a different value.
```

<img src="https://d186loudes4jlv.cloudfront.net/javascript/images/vars-with-primitive-values.png" alt="Primitive values and variables" style="zoom: 80%;" />

- Variables are independent when they contain primitive values because they point to different memory locations. 
- if you assign a primitive value to a variable, the value is stored in its own memory location, which is independent of the other memory location.

```js
> let a = 5
> let b = a // if you assign a primitive value to a variable, the value is stored in its own memory location, which is independent of the other memory location. 
> a = 8
> a
= 8

> b
= 5
// variables that have primitive values store those values at the memory location associated with the variable. 
```

Object & non-mutating operations

- For **objects, ** variables point to the memory address of the actual object.

  ```js
  let obj = { a: 1 };
  obj = { b: 2 };
  obj.c = 3; // this line mutates the actual object by a new property to the object. 
  ```

  

<img src="https://d186loudes4jlv.cloudfront.net/javascript/images/vars-with-objects.png" alt="Objects and variables" style="zoom: 80%;" />

- Varibale`Obj` is always at address 0x1248. The value at this address is a pointer to the actual object. 

  - Even when reassigning `obj` to a different object, `obj` still has same memory address. When reassigning, its the value that changes. And the value is the pointer to the actual object. 

- Two object variables have different memory addresses. But if the two variables reference the same memory location where an object is actually stored, then changing the original object will change the value of the two variables. 

  - ```js
    let a = {1};
    let b = a;
    // a & b have different memory addresses but same "value": same pointer/reference to the object. 
    ```

- Two object variables may happen to have the "same value", but they are still independent 

  - ```js
    let a = {1}; 
    let b = {1}
    
    // a & b have separate memory addresses and different values. The values are separate objects that happen to have the same values. 
    ```

#### console.log vs. return

[reference](Intro to JS: Input/ Output section)

- `console.log` is a built-in function that takes any JavaScript value, regardless of type and logs it to the console. (Command line output). 
  - It works in `node` and most browsers.
  - It's a function used to print information to the console.  
- `Return` value is the value that a function returns to the function invocation / calling place  when it finishes executing. The default / implicit return value of most functions is `undefined`. An explicit return value would be what a `return` statement specifies to return. 

#### truthiness vs. boolean

- **true** & **false**  are primitive Boolean values.  

- **truthy**/**falsy**: means an expression or variable evaluated *as* true or false. Non-boolean variables that count as true are truthy. 

  - **truthy**: almost all values evaluate as truthy. 
  - **falsy** values: 
    - `false`
    - `undefined`
    - `null`
    - `0`
    - `" "`(empty string) 
    - `NaN`

  Truthy or Boolean?

  - **logical operators**: logical operators evaluate an expression that involves 2 subexpressions, then returns what that sub-expression(operand) evaluates to, which is a truthy or falsy value. Unless the operand is Boolean, then logical operator returns a Boolean value. 
  - **Short-circuit** **operators** are a type of **logical operators**
    - `&&` stop evaluating when a sub-expression evaluates *as* `false`(falsey)
    -   `||` stop evaluating when one sub-expression evaluates *as*  `true`(truthy)

#### Function definition and invocation

- **Function**: a reusable block of code that groups together a sequence of statements to perform a specific task. 
  - **Function definition: ** are **defined** with the `function` keyword. 
    - The 3 ways to define a function are function declaration, function expression, and arrow functions. 
  - functions are only executed when they are **invoked**, called upon. 


#### Function declarations, function expressions, and arrow functions

3 ways to <u>**define**</u> a function

1. **Function declaration** 

   - Function declaration binds a function to an identifier, declares the existence of the function. 

   - Function declarations can't be anonymous.
   - Function declarations are **hoisted**: can be called before function is defined. 

   ```js
   functionName(); // can invoke function before function is defined.   
   
   function functionName() {
     ...
   }
   ```

2. **Function expression** 

   - `Function` keyword can be used to define a function inside an expression, or omitted to create anonymous function expressions. 
   - Are not **hoisted** : can't use function expressions before you define them. 

   - Any function definition that doesn't have the word `function` at the **<u>beginning</u>** of a statement is a function expression. . 

     ```js
     let functionName = function () { // Anonymous function expression
       ...
     }; // note the semi colon here! It's an expression so it needs semicolon. 
     ```

   - Wrapping what looks like a function declaration in parentheses creates a function expression

     ```js
     // Function expression, not declaration
     (function greetPeople() {
       console.log("Good Morning!");
     }); 
     ```

     ```js
     function makeGreeter(name) {
       return function greeter() {
         console.log(`Hello ${name}`); 
       }
     }
     // Greeter is a function expression because it starts with return. 
     ```

3. **Arrow function**

   - Arrow functions are always anonymous. 

   ```js
   let greetPeople = () => console.log("Good Morning!"); // 0 parameters
   let greetPeople = paramOne => console.log("Good Morning!"); // 1 parameter,
   let greetPeople = (paramOne, paramTwo) => console.log("Good Morning!") // 2 parameters
   
   greetPeople(); // Must invoke after defining the function. 
   ```

   - Arrow functions have an interesting feature: **implicit returns**: can omit return statement when function body contains a single expression, on a <u>**single line**</u>. 

   ```js
   [1, 2].map(element => return 1 );
   ```


**Anonymous Function**: a function with no name. They are invoked by the variable name. Arrow functions are always anonymous.  

```js
let name = function (x) { // function expression
  
});
```

#### Implicit return value of function invocations

- **Return values** are the values a function returns to the call location when it finishes running. All JavaScript function calls evaluate to a value. The **implicit return value** of most JavaScript functions is `undefined`. 
  - Implicit return value is what gets returned if a function invocation doesn't execute a `return` statement. 
  - Using a `return` statement to return a specific value from a function - the value is the **explicit return value.**
- Outside of functions, there's no distinction between implicit and explicit return values, but all functions return something unless they raise an exception, even if there is no `return` statement. 

#### First-class functions

- **First-class value** or **First-class object** meet these conditions
  - Can be assigned to a variable or element of a data structure (such as an array or object)
  - Can be passed as an argument to a function. 
  - Can be return as the return value of a function. 
  - All JavaScript functions are **First-class functions**. First-class function  means the functions are treated like any other variable, and meet the criteria above. 

- **Call back functions**
  - are first class functions
  - they are passed as arguments to higher-order functions 

- **Higher order functions**
  - a function that accepts or returns another function 
  - a functions that take other functions as arguments and functions that return other functions

#### Side-effects

[reference](Lesson 2 Coding Tips)

A function is said to have **side effects** if it does any of the following:

1. It reassigns any non-local variable. Reassigning a variable in the outer scope would be a side effect.
2. It mutates the value of any object referenced by a non-local variable. Mutating an array or object argument, for instance, would be a side effect.
3. It reads from or writes to a file, network connection, browser, or the system hardware. **Side effects like this include writing to the console log and reading input from the terminal.**
4. It raises an exception without handling it.
5. It calls another function that has side effects.

The following functions have side effects

```js
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

```js
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

#### Naming conventions (legal vs idiomatic)

- **Idiomatic names**: are names that follow the name conventions in [Book: Preparations: Naming Conventions](reference)
- Naming Conventions
  - use **camelCase** for variable and function names. 
  - use **SCREAMING_SNAKE_CASE** to represent constants, which serve as unchanging configuration values in the program. Usually those constants are *magic numbers*. 

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

- **Legal names**: are names that are syntactically valid, but non-idiomatic (don't follow naming convention). 

##### Valid but Non-Idiomatic Names

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
| Other functions                              | `ParseURL`     | Begings with capital letter  |
|                                              | `FIZZ_BUZZ`    | SCREAMING_SNAKE_CASE         |
| Configuration and magic constants            | `absolutePath` | Not SCREAMING_SNAKE_CASE     |
|                                              | `Today`        | Not SCREAMING_SNAKE_CASE     |

##### Invalid Names

| Name       | Notes                         |
| :--------- | :---------------------------- |
| 42ndStreet | Begins with number            |
| fizz-buzz  | Hyphen not allowed            |
| fizz.buzz  | Looks like property reference |

#### <u>be able to explain what a function does without talking about its implementation; that is, document a function's use and purpose. (See below.)</u>

### 