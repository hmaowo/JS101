- comparing arrays 

  - ```
    [] === [] // false
    ```

- scope of `return`, which function are you breaking out of? 

  - REMEMBER that `return` exits the "nearest" function. So a return statement inside an array iteration function such as `forEach` or `filter` does not exit the function, because it's ending the execution and returning to the **callback** function. 

- scope of `continue`, and `break`

- `continue` cannot be used in while loop, it will cause an infinite loop

  

  ### Strings

  Whenever you pass a string as an operand in a numeric expression involving either of these operators: `-, *, /, %`, the number's conversion process is similar to calling the in-built `Number` function on the value. 

