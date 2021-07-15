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
  - can pass arguments in it like list(6) shows 6 lines above current line, 6 lines below
- `s`/ step : move into execution of function
- `o` step out of function

