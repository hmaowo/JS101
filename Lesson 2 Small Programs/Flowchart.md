**imperative** / **procedural** way to solve a problem. 

- step by step logic 

- flowcharts is being imperative with our approach, visually showing how to loop manually rather than using a *declarative* way to solve a problem such as using `forEach` 
- being imperative forces you to understand logic better, which helps you debug logical errors in your code. 

<img src="https://d1b1wr57ag5rdp.cloudfront.net/images/flowchart_components.jpg" alt="Flowchart Components" style="zoom: 50%;" />

<img src="https://d1b1wr57ag5rdp.cloudfront.net/images/flowchart_largest.jpg" alt="Flowchart for determining the largest number in a collection" style="zoom: 67%;" />

A larger problem 

Problem: Suppose we need to ask the user to enter N collections of numbers that we want to find and display the largest number from each collection.

```
while the user wants to keep going
  - ask the user for a collection of numbers
  - iterate through the collection one by one.
    - save the first value as the starting value.
    - for each iteration, compare the saved value with the current value.
    - if the saved value is greater than or equal to the current number
      - move to the next value in the collection
    - otherwise, if the current value is greater than the saved value
      - reassign the saved value as the current value

  - after iterating through the collection, save the largest value into the list.
  - ask the user if they want to input another collection

return the saved list of numbers
```

- It's good to extract a logical grouping into a sub-process and tackle the various pieces separately. 

- Translate the shortened pseudocode from the beginning and translate into formal pseudocode. 

```
START

SET largeNumbers = []
SET keepGoing = true

WHILE keepGoing === true
  GET "enter a collection"
  SET collection
  SET largestNumber = SUBPROCESS "extract the largest one from that collection"
  largeNumbers.push(largestNumber)
  GET "enter another collection?"
  IF "yes"
    keepGoing = true
  ELSE
    keepGoing = false

PRINT largeNumbers

END
```

- `SUBPROCESS` keyword to show that some other thing will extract the largest number from collection. Including the entire formal pseudocode would have made it very long. Our confidence in a large block of pseudocode can't be very high. 
  - extracting logic into sub-processes lets us focus on a well-defined, narrowly - scoped set of pseudocode. 

<img src="https://dbdwvr6p7sskw.cloudfront.net/images/js101/flowchart_large_numbers.jpeg" alt="Flowchart for choosing the largest numbers from several user-entered collections" style="zoom:50%;" />

`num = findLargest(collection)` is our sub - process. 

- when we move logic to sub-processes, we use a *declarative* type of syntax, rather than *imperative*. 
- thinking about high - level logic flows lets you create sub-processes to narrow the scope of your application
  - from a high level, writing declarative code fragments our program into logical sections, letting us focus on one section at a time. 
  - From a high level, we can trust that sub-process will do its job. 
  - When we're ready to work on the logic in the sub-process we can focus on it and ignore the rest of the program. 
- start at a high level, using declarative syntax. 
- For example if you're working on a calculator, you can start with something like this. 

```
- Get the first number
  - Make sure it's valid, otherwise, ask for another
- Get the second number
  - Make sure it's valid, otherwise, ask for another
- Get the operator
  - Make sure it's valid, otherwise, ask again

- Perform the operation on the two numbers
- Display result
- Ask whether the user wants to do another calculation
```

![Flowchart for calculator](https://d1b1wr57ag5rdp.cloudfront.net/images/flowchart_calculator.jpg)

3 sub-processes here: `numberValid`, `operatorValid`, and `findResult`