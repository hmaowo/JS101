Question 4: Which of the following statements about **first-class functions** are true?

### Your Answer

**A**

First-class functions in JavaScript must accept another function as an argument or return a function.

**B**

All JavaScript functions are first-class functions.

**C**

Exactly one function can be passed to a JavaScript first-class function as an argument.

**D**

A first-class function can return a first-class function.

### Discussion

- While it's true that all functions in JavaScript are first-class functions, it isn't necessary for a first-class function to accept a function argument or return a function value.
- There is no limit to the number of functions that can be passed as arguments to a first-class function.
- First-class functions can be passed to or returned by any other first-class function.

Question 5: Which of the following statements about **higher-order functions** are true?

Toggle Answer Display

### Your Answer

**A**

Higher-order functions must accept another function as an argument or return a function.

**B**

JavaScript does not support higher-order functions.

**C**

Higher-order functions are functions that have function definitions nested within their body.

**D**

Higher-order functions can return higher-order functions.

### Discussion

- By definition, higher-order functions must accept a function as an argument or return a function. They can do both, of course, but they must do one of these.
- JavaScript does support higher-order functions.
- Functions that have nested function definitions are called nested functions.
- A higher-order function can return any function, including a function that is itself another higher-order function.

Question 7

[1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]

0 [1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]

1 [3, 4, 2, 4, 6, 5, 7, 9, 10, 12]

2 [4, 2, 4, 6, 5, 7, 9, 10, 12]

3 [2, 4, 6, 5, 7, 9, 10, 12]

4 [4, 6, 5, 7, 9, 10, 12]

5 [6, 5, 7, 9, 10, 12]

6 [ 5, 7, 9, 10, 12]

7 [7, 9, 10, 12]

8 [9, 10, 12]

9 [10, 12]

10 [12]

[4, 4, 12]



### Notes

**First class functions**

- when functions are treated like any other variable
- all javascript functions are first class functions 

**Higher order functions**

-  a function that accepts or returns another function 
-  a functions that take other functions as arguments and functions that return other functions

**Call back functions**

- are first class functions
- they are passed as arguments to higher-order functions 

