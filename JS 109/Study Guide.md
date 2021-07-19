20 questions, 180 minutes 

~ 8 minutes per problem = 160 minutes which leaves 20 minutes of extra time to review. 

#### Distinctions

- Truthiness vs Boolean
- Variables are not passed to or returned by functions: **Values** or **references** are passed. 
- **parameters** are the names assigned to a function's arguments; **arguments** are the values that get passed to the function

#### Variables

- variables declared with let or const
- Function parameters
- Function names

Object property names **are not** variables. 

#### Requirements

- test code in editor, not REPL
- use precise language
- don't answer clutter: listing a bunch of facts that aren't really pertinent to the question
- **Use your own words and examples.** Do not copy and paste text and code from the course materials and other sources. We're testing your ability to explain concepts and write code, not your ability to copy and paste answers. If we detect copy and paste answers, you may receive no credit for the answer.

#### How to answer code questions

- Explain what's happening here & identify underlying principal
  - Explain line by line, what code does implementation details)
- Describe what code does
  - use higher-level description / user - level description
  - Do not contain implementation details.
  - Others should be able to understand what code does without knowing behind the scenes.

#### Type of explain code questions

1. "Examine code example below. Explain what is happening here and identify the underlying principal that this demonstrates."

   ```js
   let greeting = 'Hello';
   
   while (true) {
     greeting = 'Hi';
     break;
   }
   
   console.log(greeting);
   
   ```

   Answer: 

   C) The global variable `greeting` is initialized to the string `'Hello'` on line 1. Within the loop, lines 3 to 6 define a block within which `greeting` is reassigned to the string `'Hi'` on line 4. On line 8, `console.log` is called with the variable `greeting` passed to it as an argument; since `greeting` is now assigned to `'Hi'`, this is what is output.

   - Answer **C**, as well as precisely describing the example, identifies an important JavaScript syntactical convention that is relevant to the example code: the fact that braces next to a `while` statement form a block in JavaScript. We also use more precise terminology by saying that `greeting` is initialized instead of assigned. For some assessment questions, this answer might be enough to receive full points, but many questions expect you to demonstrate a deeper understanding of the fundamental concept that this illustrates.

   D) The global variable `greeting` is declared and initialized to the string `'Hello'` on line 1. Lines 3 to 6 define a loop that will execute forever, unless something happens to end the loop. When the loop begins, it first reassigns the `greeting` global variable to `'Hi'` on line 4. The next line, `break`, causes the loop to end, with execution resuming after line 6. Finally, on line 8, `console.log` is called with the value of the variable `greeting` passed to it as an argument. Since `greeting` is now assigned to `'Hi'`, that is what gets output. This example demonstrates variable scoping rules in JavaScript; specifically the fact that a variable declared in the outer scope is accessible from a nested inner scope.

   - Answer **D** goes a step further than **C**' by explaining why this is important and the underlying principle that it demonstrates; i.e., the fact that JavaScript has particular scoping rules which affect whether or not a variable can be referenced or reassigned. It also talks about how the `break` statement influences the execution of the loop. Finally, we also mention that we're declaring a global variable. Based on the way that this question is phrased, answer **D** would be the only answer of the four to receive full points in an actual assessment.



1. Describe what code does: use a **user-level description**, which is a higher-level view of the function that doesn't mention implementation details. 

   There's just enough information that another developer can use it in their code without first having to understand what's going on behind the scenes.

   Example: 

   ```js
   let hello = "Hello, world!";
   function myFunc() {
     console.log(hello);
   }
   
   myFunc();
   ```

   Answer: The function outputs `Hello, world!`, which it obtains from the global variable `hello`, then returns `undefined`. The function can use `hello` since functions have access to variables defined in the outer scope.

   Example: 

   ```js
   function appendTo(str, otherStr) {
     return str + otherStr;
   }
   ```

   Answer: `appendTo` is a function that takes two string arguments and returns a new string. The returned string contains the result of appending the second string to the first.

