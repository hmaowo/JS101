Earlier in the course we introduced some debugging techniques, including the basics of using the built-in Node.js debugger. As programs get larger and grow in complexity, the likelihood of bugs occurring in your code increases. When dealing with larger programs it is even more important to know how to identify and eliminate bugs when they occur. Before continuing with this lesson we recommend that you review [this assignment](https://launchschool.com/lessons/64655364/assignments/3b953f14).

## Review

- Node.js comes with a debugger that lets you pause the program during execution and perform various actions from that point in the program execution, such as inspecting values at runtime. 

  ```js
  // debug.js
  
  let counter = 1;
  
  while (counter <= 5) {
    console.log(counter);
    counter += 1;
  }
  ```

  ```js
  > node inspect debug.js
  ```

  ```js
  < Debugger listening on ws://127.0.0.1:9229/5c08d9ea-1d25-4fa8-8ddb-3ab96ea3ac5b
  < For help, see: https://nodejs.org/en/docs/inspector
  < Debugger attached.
  Break on start in debug.js:3
    1 // debug.js
    2
  > 3 let counter = 1;
    4
    5 while (counter <= 5) {
  debug>
  ```

- The debugger will automatically pause program execution, usually at the first expression or function call that it encounters in your code. In our case that's the line `let counter = 1;` on line 3. Notice also the `>` next to line 3, which indicates the line at which execution has been paused.

- access the value of any variables that are in scope at that point in execution by using the **`exec`** command followed by the name of the variable, for example `exec counter`. If we try accessing `counter` at the current point in program execution, however, it will return `undefined` since the expression has not yet been evaluated and so the assignment to `1` has not taken place.

- Instead let's continue execution to the *next* expression. We can do this by using the `next` command, or its shorthand version `n`. Entering either `next` or `n` from the current point will continue execution and then pause at the start of the `while` loop on line 5. If we run `exec counter` now, we should get `1`.

  ```js
  debug> n
  break in app.js:5
    3 let counter = 1;
    4
  > 5 while (counter <= 5) {
    6   console.log(counter);
    7   counter += 1;
  debug> exec counter
  1
  debug>
  ```

- `c` (or `cont`) command does is effectively 'un-pause' the program execution, and *continue* it to the end (or until you experience an error).  If we execute the `c` command from our current paused location, the program will just run as normal.

- ```js
  < 1
  < 2
  < 3
  < 4
  < 5
  < Waiting for the debugger to disconnect...
  debug>
  ```

- we get our expected output from each loop, and a `Waiting for the debugger to disconnect...` message followed by a `debug>` prompt. 
- At this point, we can either start program execution again from the beginning using the `run` or `restart` commands, or exit the debugger using `.exit` (or hitting `CTRL+C`  twice).

On its own, the `c` command may not seem that useful, but it becomes more useful when combined with a `debugger` statement. The [debugger statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger) is valid JavaScript syntax, that:

> invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.

We'll come back to that word, *breakpoint*, in a moment. Let's exit the debugger and edit our `debug.js` file. Add a `debugger;` statement inside the `while` loop, after `console.log(counter)` but before `counter += 1;`:

```js
// debug.js

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  debugger; // break point
  counter += 1;
}
```

- If we run `node inspect debug.js` once more, the debugger runs and pauses at line 3 as before. If we now use the `c` command, the debugger pauses execution at the `debugger` statement. Another way to think about this is that there is a *break* at that *point* in the program's execution. Setting a `debugger` statement like this is often referred to as a *breakpoint*.

```js
debug> c
< 1
break in app.js:7
  5 while (counter <= 5) {
  6   console.log(counter);
> 7   debugger;
  8   counter += 1;
  9 }
debug>
```

- We can access variables as usual using the `exec` command

```node
debug> exec counter
1
```

- We can keep using `c` to pause on the `debugger` statement for each iteration of the `while` loop. We can also `.exit` at any point. This approach is particularly useful when you need to debug a problem that occurs in a loop, and you want to check how certain values change on each iteration of that loop.

- The node debugger can be an extremely useful and powerful tool, and something that we recommend becoming familiar with. There's still a place for using `console.log()` for debugging though, for example when debugging a very simple piece of code. Also, you may be working with an IDE or environment where you can't run a debugger (CoderPad for example). It's good to be familiar with a number of different tools and approaches when debugging, but probably the most important thing is your temperament and mind-set.


In that earlier assignment, we listed some of the debugger's commands and outlined their basic usage. The debugger provides some additional functionality, some of which can be especially useful when working with larger or more complex programs. This functionality is described in the [Node documentation](https://nodejs.org/api/debugger.html). In this assignment, we'll explain and demonstrate some of it.

### Executing Expressions or Functions

You should already be familiar with the `exec` command as a way of accessing in-scope variables within the debugger. Something you may not be aware of is that the `exec` command can also be used to evaluate expressions or execute functions.

```js
break in exec.js:8 
  6
  7 let a = 1;
> 8 let b = 2;
  9
debug> exec a + b
3
```

Note that to execute a function with `exec` you need to have an invocation for that function in your code, not just the function definition.

Another way to evaluate expressions or execute functions within the debugger is to access the built into REPL. You can access the REPL via the `repl` command. Within the REPL, you can access variables that are in scope at the point where program execution was paused, and you can evaluate expressions or execute functions. Within the REPL, all of this can be done without the need for the `exec` command.

```terminal
debug> repl
Press Ctrl + C to leave debug repl
> a
1
> a + b
3
```

To exit the REPL, you can use `Ctrl + C` (or `Ctrl + Shift + C` on some systems)



## Setting and Clearing Breakpoints

In the earlier assignment, we covered manually setting a breakpoint using the `debugger` keyword in the code file. This approach works fine, though it does mean that in order to set a breakpoint you have to exit the debugger, edit the file, and restart the debugger. This can be a pain if you want to add and then remove breakpoints at numerous points during the program execution.

Luckily there's a way to add and remove breakpoints within the debugger itself while it's running. Breakpoints can be set using the `setBreakpoint()` or `sb()` commands, and removed using the `clearBreakpoint()` or `cb()` commands.

- `setBreakpoint()`/ `sb()` can be used without an argument to set a breakpoint on the current line, or with a line number passed as an argument in order to set a breakpoint on the line specified.
- `clearBreakpoint()`/ `cb()` takes two arguments, the name of the file and the line number.

### Stepping Into Functions

You should hopefully already be familiar with stepping through code using `n`/ `next` command. This is sufficient for many situations, but if you have a function that calls another function (for example, a callback function), you may want to 'step into' the inner function at the appropriate point in the overall program execution in order to look at what's happening with the inner function execution. The Node debugger allows you to do this with the `s` or `step` command.

When you reach the inner function invocation, you can use `s`/ `step` to move *into* the execution of that function, rather than just moving *over* it to the next expression or function call. Once 'inside' the function, you can step out of it using `o` or `out`.

### Other Commands

There are a couple of other commands that might come in useful when using the debugger.

- The `help` command simply lists all of the commands that are available.

- The

   

  ```
  list()
  ```

   

  command can be used to reveal additional lines of code within the debugger UI.

  - Normally only five lines are visible (the current line, two above, and two below)
  - The `list()` command (called without arguments) will display five lines above and five below the current line
  - An argument can be passed in to the command to specify the number of lines to display above and below the current line. For example `list(8)` would show the current line, eight lines above it, and eight lines below it.

## debugger commands

```
node inspect file.js
```

- `exec` variable: access value of variable
  - can also evaluate expressions or execute functions
    - for functions, it needs to be invoked in code
    - can pass any argument to the function
- `n` : continue execution to next expression
- `c`: continue program execution til end or until error
- hard coding a `debugger` inside code -> a break point
  - used with c, to run a block of code to test it. 
- can use `repl` command
  - using repl will drop you into repl within the debugger at the point where execution of the program has been paused. 
  - so within the repl you can access the same local variables that are in scope but without having to pass them to exec
- `sb` : set breakpoint within debugger as opposed to hardcoding with a debugger statement. 
  - can pass in line number as argument like `sb(7)`
- `cb` : clear break point. Takes 2 arguments (file, line)
- `run` : reset / restart program execution
- `list()`: list additional lines of code
  - if used without argument: shows current line, 5 lines above, 5 lines below
  - can pass arguments in it like list(6)
- `s`/ step : move into execution of function
- `o` step out of function

