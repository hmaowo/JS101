<u>Steps to debugging</u>

1. **reproduce the error**
   - reproduce error in another environment 
   - isolate root cause
2. **determine the boundaries of the error** 
   - how does modifying data affect program behavior
   - modify the data or code to get an idea of the scope of the error and determine boundaries of the problem
3. **trace the code** 

Example : 

```javascript
function car(newCar) {
  let make = getMake(newCar);
  let model = getModel(newCar);
  return [make, model];
}

function getMake(newCar) {
  return newCar.split(' ')[0];
}

function getModel(newCar) {
  return newCar.split(' ')[2];
}

let [ make, model ] = car('Ford Mustang'); // line 15
console.log(make === 'Ford');   // => true
console.log(model[0] === 'M');  // => TypeError: Cannot read property '0' of undefined
```

- Line 15 is called array destructuring. 

  - When an array gets assigned to two or more variables wrapped in opening and closing brackets, the first element gets assigned to the first variable, the second element gets assigned to the second variable, and so on. 
  - on line 15, first array element is assigned to `make` and second element is assigned to `model` 

- on line 17 we get an error when we try to see whether the value `model`  begins with the character `'M'`. It looks like we have a bug. 

  - we can produce this bug consistently.

  ```javascript
  [make, model] = car('Mitsubishi Mirage');
  console.log(model[0] === 'M');  // => TypeError: Cannot read property '0' of undefined
  
  [make, model] = car('Chevy Malibu');
  console.log(model[0] === 'M');  // => TypeError: Cannot read property '0' of undefined
  
  [make, model] = car('Toyota Corolla');
  console.log(model[0] === 'M');  // => TypeError: Cannot read property '0' of undefined
  ```

4. **Understand the Problem Well**

- we need to use 1 to access desired array element. 

```js
function getModel(newCar) {
  return newCar.split(' ')[1]; // => "Mustang"
}
```

5. **Implementing a fix**

- there are multiple ways to make a fix. For example, we can suppress the error from being thrown with this code. 

```javascript
try {
  return model[0] === 'M';
} catch {
  return false;
}
```

6. **Test the Fix**

<u>Techniques for debugging</u>

1. **line by line**
2. **rubber duck**
3. **walking away**
4. **inspecting with a debugger**
   - node comes with a debugger that lets you pause the program during execution and perform various actions from that point in the program execution, such as inspecting values at runtime. 

```
$ node inspect debug.js // to use the debugger
```

```
< Debugger listening on ws://127.0.0.1:9229/5c08d9ea-1d25-4fa8-8ddb-3ab96ea3ac5b
< For help, see: https://nodejs.org/en/docs/inspector
< Debugger attached.
Break on start in debug.js:3 //means that program execution stopped on line 3
  1 // debug.js
  2
> 3 let counter = 1;
  4
  5 while (counter <= 5) {
debug>
```

- debugger will automatically pause program execution, usually at the first expression or function call that it encounters in your code. 
  - that's the line `let counter = 1; ` on line 3 . notice the `>` next to line 3, which indicates the line at which execution has been paused. 
- we can access the value of any variables that are in scope at that point in execution by using the `exec` command followed by the name of the variable, for example `exec counter`. 
  - if we try accessing `counter` at the current point in program execution, however, it will return `undefined` since the expression has not yet been evaluated and the assignment to `1` has not taken place. 
- let's continue execution to the next expression. we can do this with `next` / `n` command. 
  - It will continue execution and then pause at the start of the `while` loop on line 5. 
  - If we run `exec counter` now, we should get `1`.
- If your program contains quite a few lines of code, using `n`/ `next` to cycle through each expression or function call to get to a particular point in the program can be a bit of a pain. Here's where another command, `c` combined with a `debugger` statement, comes in useful.
  - What the `c` (or `cont`) command does is effectively 'un-pause' the program execution, and *continue* it to the end (or until you experience an error).
  - If we execute the `c` command from our current paused location, the program will just run as normal.

```node
< 1
< 2
< 3
< 4
< 5
< Waiting for the debugger to disconnect...
debug>
```

We get our expected output from each loop, and a `Waiting for the debugger to disconnect...` message followed by a `debug>` prompt. At this point, we can either start program execution again from the beginning using the `run` or `restart` commands, or exit the debugger using `.exit` (or hitting `CTRL+C` or `CTRL+SHIFT+C` twice, or `CTRL+D`; this can vary across systems/ environments).

- On its own, the `c` command may not seem that useful, but it becomes more useful when combined with a `debugger` statement. The [debugger statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger) is valid JavaScript syntax, that:

  > invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.

- We'll come back to that word, *breakpoint*, in a moment. Let's exit the debugger and edit our `debug.js` file. Add a `debugger;` statement inside the `while` loop, after `console.log(counter)` but before `counter += 1;`:

```javascript
// debug.js

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  debugger;
  counter += 1;
}
```

- If we run `node inspect debug.js` once more, the debugger runs and pauses at line 3 as before. If we now use the `c` command, the debugger pauses execution at the `debugger` statement. Another way to think about this is that there is a *break* at that *point* in the program's execution. Setting a `debugger` statement like this is often referred to as a *breakpoint*.

```
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

```
debug> exec counter
1
```

- We can keep using `c` to pause on the `debugger` statement for each iteration of the `while` loop. We can also `.exit` at any point. This approach is particularly useful when you need to debug a problem that occurs in a loop, and you want to check how certain values change on each iteration of that loop.
- The node debugger can be an extremely useful and powerful tool, and something that we recommend becoming familiar with. There's still a place for using `console.log()` for debugging though, for example when debugging a very simple piece of code. Also, you may be working with an IDE or environment where you can't run a debugger (CoderPad for example). It's good to be familiar with a number of different tools and approaches when debugging, but probably the most important thing is your temperament and mind-set.

5. **Advanced Debugging**

<u>Summary</u>

In summary, debugging is arguably the most vital skill you must learn as a programmer. Focus on developing a patient, systematic temperament; carefully read error messages; use all the resources at your disposal. You should approach debugging in sequential steps and use the techniques we covered above -- especially the debugger.