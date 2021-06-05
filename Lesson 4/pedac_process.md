## P: Understanding the problem 

- Establish the rules/ define the boundaries of the problem
  - assess available information
  - restate **explicit** requirements: stated in the problem
  - identify **implicit** requirements. Implicit: not stated but extrapolated from our understanding of the problem. 
- spend enough time. Don't rush this step. 

**General Example**

Given a string, produce a new string with every other word removed. 

- Explicit requirements:
  - Input: string
  - Output: new string
  - remove every other word from input string
- Questions: 
  - what do we mean by every other word?
  - How do we define a word in this context?
    - words are delimited by spaces

## E:  Examples and test cases

- can confirm/ refute assumptions 
- help to answer questions about implicit requirements
- Act as assertions which help to codify the rules and boundaries

## D: Data Structures

- help reason with data logically
- help interact with data at implementation level
- thinking in terms of data structures is part of problem solving process
  - set of steps from input to output
    - Involves structuring data in a certain way

## A:  Algorithms

- a logical sequence of steps for accomplishing a task of objective 
  - closely linked to data structures 
  - series of steps structure data to produce the required output 
- stay abstract/ high-level 
  - avoid implementation detail 
  - don't worry about efficiency for now 

## C: Code - implementing a solution in code

- Translating solution algorithm to code
- Think about algorithm in context of the programming language
  - Language features/ constraints 
  - Built-in functions/ methods
  - Syntax/ coding patterns 
- Create test cases 
- Code with intent 
- 

## Sum Even Number Rows

Imagine a sequence of consecutive even integers beginning with 2. The integers are grouped in rows, with the first row containing one integer, the second row two integers, the third row three integers, and so on. Given an integer representing the number of a particular row, return an integer representing the sum of all the integers in that row. 

**Rules / Requirements**

- Sequence of even integers
- Sequence beings with two
- Integers are consecutive
- Sequence is grouped into rows 
- Each row is incrementally larger: 1, 2, 3 ...
- Row 'number' equals the number of elements in the row 
  - Row 1 has 1 element, row 2 has 2 elements, ..
- Input: a single integer
  - Identifies a 'row', which is a subset of a sequence of integers
- Output: a single integer
  - The sum of the integers in the row identified by the input integer 
- Sequence: 

2, 4, 6, 8, 10, 12, 14, 16, 18 ...



2

4, 6

8, 10

12, 14, 16

14, 16, 18, 20

...

- How do we create the structure?

**Examples**

row number: 1 --> sum of integers in row: 2

row number: 2 --> sum of integers in row: 10

row number: 4 --> sum of integers in row: 68



2 --> 2

4, 6 --> 10

14, 16, 18, 20 --> 68



**Data Structure**

2 --> 2

4, 6 --> 10

14, 16, 18, 20 --> 68

....



- Overall structure representing sequence as a whole
- individual rows within overall structure
- individual rows in a set order in context of sequence
- individual rows contain integers
- can assume that integers are in a set order in the context of the sequence

[

[2], 

[2, 6], 

[8, 10, 12], 

[14, 16, 18, 20],

....

]

**Algorithm**

1. create an empty 'rows' array to contain all of the rows
2. create a 'row' array and add it to the overall 'rows' array
3. repeat step 2 until all the necessary rows have been created
   - rows have been created when the length of the 'rows' array is equal to the input integer 
4. sum the final row
5. return the sum



*Mini Problem: create a row*

Rules:

- Row is an array
- arrays contain integers
- integers are consecutive even numbers
- integers in each row form part of an overall larger sequence 
- rows are of different lengths
- Input: the information needed to create the output
  - the starting integer
  - length of the row
- Output: the row itself: `[8, 10, 12]`

Eaxmples:

start: 2, length: 1--> [2]

start: 4, length: 2 --> [4, 6]

start: 8, length: 3 --> [8, 10, 12]

Data Structures:

- an array of integers

Algorithm: 

1. Create an empty 'row' array to contain the integers
2. Add the starting integer 
3. Increment the starting integer by 2 to get the next integer in the sequence
4. repeat steps 2 & 3 until the array has reached the correct length 
5. return the 'row array'

\## Final thoughts

- Not a completely linear process
- move back and forward between the steps 
- switch from implementation mode to abstract problem solving mode when necessary
- Don't try to problem solve at the code level 