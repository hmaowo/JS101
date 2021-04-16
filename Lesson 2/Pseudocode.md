Example of pseudocode for a function that determines which number in a collection has the greatest value. 

```
Given a collection of numbers.

Iterate through the collection one by one.
  - save the first value as the starting value.
  - for each iteration, compare the saved value with the current value.
  - if the current number is greater
    - reassign the saved value as the current value
  - otherwise, if the current value smaller or equal
    - move to the next value in the collection

After iterating through the collection, return the saved value.
```



**Load problem into brain first. **

- There are two layers to solving any problem
  - The logical problem domain layer
  - The syntactical programming language layer. 
- Pseudocode allows us to focus on the logical problem domain layer without dragging us down to the programing language layer. 
- Problem with pseudocode is that we cannot verify its logic 
  - so translating pseudocode into programming code is where we can focus on programming language syntax issues

| Keyword         | Meaning                                  |
| --------------- | ---------------------------------------- |
| START           | start of the program                     |
| SET             | set a variable that we can use for later |
| GET             | retrieve input from user                 |
| PRINT           | display output to user                   |
| READ            | retrieve a value from a variable         |
| IF/ELSE IF/ELSE | show conditional branches in logic       |
| WHILE           | show looping logic                       |
| END             | end of the program                       |



```node.js
START

# Given a collection of integers called "numbers"

SET iterator = 1
SET savedNumber = value within numbers collection at space 1

WHILE iterator <= length of numbers
  SET currentNumber = value within numbers collection at space "iterator"
  IF currentNumber > savedNumber
    savedNumber = currentNumber
  ELSE
    skip to the next iteration

  iterator = iterator + 1

PRINT savedNumber

END
```

Translating Pseudocode to Program Code

- using `foreach` is a language specific choice - you can use a `for` loop if that's the style of programming you prefer
- for more sophisticated problems, we need to take a piecemeal approach when writing pseudocode, then translate that pseudocode to JavaScript. Once we verify that logic is correct, we can move to the next problem. 

Write out pseudocode that does this 

- a function that returns the sum of two numbers

  ```
  START
  # given a number 
  return number1 + number2
  
  END
  ```

  

- a function that takes an array of strings, and returns a string that is all those strings concatenated together

  ```
  START
  
  # Given an array of strings 
  
  SET empty string
  
  array.forEach
  	string = string + each value of the iteration
  	
  return string
  
   a function that takes an array of integers, and returns a new array with every other element
   
   END
  ```

- a function that takes an array of integers, and returns a new array with every other element

  ```
  # given an array of integers
  
  newArray = array.filter(value, index) 
  		index % 2 === 0
  return newArray
  
  END
  	
  ```

  

