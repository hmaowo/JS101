/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/* P
- information:
  - a stack is a list of values that grows and shrinks dynamically
  - stack implemented as an array that uses two array methods: array.push
    and array.pop
  - stack-and-register programming language uses a stack of values
    - each operation operates on register(current value)
    - register is not part of stack
    - operation that requires two values pops the topmost item from the stack
    - i.e, operation removes the most recently pushed value from the stack,
      operates on the popped value and register value, and stores result back
      in register
    - for example [3, 6, 4]: 4 is top most item in stack, register value of 7,
      the MULT operation mutates stack to [3, 6]. 4 is removed, result of
     multiplication, 28, is left in register.If we do another MULT, stack is
      mutated to [3] and register has value of 168.
- rules:
  - write a function that implements a minitature stack-and-register language
    that has the following commands(operations/tokens).
  - n : Place a value, n, in the register. Do not modify the stack.
  - PUSH : Push the register value onto the stack. Leave the value in the register.
  - ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
  - SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
  - MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
  - DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
  - REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
  - POP : Remove the topmost item from the stack and place it in the register.
  - PRINT : Print the register value.
- explicit requirements:
  - all operations are integer operations
  - all arguments are valid
  - Programs will be supplied to your language function via a string argument.
  - Initialize the stack to [] and register to 0
- implicit requirements:
- input: a string argument of commands
- output: register value
*/

// E: examples
minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
// D: data structure
// A: algorithm

function minilang(str) {
  // initialize stack to []
  // initiaize register to 0

  // split str (string) into an array
  // iterate over the str array using forEach
  // based on these commands, do what it says to do
  // - n : Place a value, n, in the register.Do not modify the stack.
  //  - if not a string, then do this (default)
  // - PUSH : Push the register value onto the stack.Leave the value in the register.
  // - ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
  // - SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
  // - MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
  // - DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
  // - REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
  // - POP : Remove the topmost item from the stack and place it in the register.
  // - PRINT : Print the register value.

  let stack = [];
  let register = 0;

  str.split(' ')
    .forEach(elem => {
      switch (elem) {
        case 'PUSH':
          stack.push(register);
          break;
        case 'ADD':
          register += stack.pop();
          break;
        case 'SUB':
          register -= stack.pop();
          break;
        case 'MULT':
          register *= stack.pop();
          break;
        case 'DIV':
          register = Math.floor(register / stack.pop());
          break;
        case 'REMAINDER':
          register = Math.floor(register % stack.pop());
          break;
        case 'POP':
          register = stack.pop();
          break;
        case 'PRINT':
          console.log(register);
          break;
        default:
          register = Number(elem); // remember to convert to number
      }
    });
}

