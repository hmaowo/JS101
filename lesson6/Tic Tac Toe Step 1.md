# Tic Tac Toe - Step 1 - Set up and display the board

We've divided our walkthrough of the Tic Tac Toe game into five assignments so that you can pause and reflect on each step of the program as you build it. In this assignment, we'll implement setting up and displaying a board. Don't worry if you can't write this code from scratch. Type along with the steps we outline below. Keep in mind that this isn't the only way to build this program: think of it as an implementation that you can refer to in case you get stuck. These walkthroughs can help you get started and may even help you figure out some edge cases that you may have missed in your implementation.

Regardless of whether you try to write your own solution, be sure to read the walkthroughs. If you write your own solution, use the walkthrough as a self-review to make sure you aren't missing anything or getting too complicated. If you don't write a solution yourself, be sure to type along as you read the walkthrough; don't just read the text and don't copy and paste the code.

The video walkthroughs are optional. They cover the same ground as the text walkthroughs, but visual learners may find them easier to follow. Regardless of whether you watch the videos, you should still read the text walkthroughs.

## Getting Started

All right. Let's move on to the implementation. We'll first take another look at the higher level breakdown that we came up with in the previous assignment:

1. Display the initial empty 3x3 board.
2. Ask the user to mark a square.
3. Computer marks a square.
4. Display the updated board state.
5. If it's a winning board, display the winner.
6. If the board is full, display tie.
7. If neither player won and the board is not full, go to #2
8. Play again?
9. If yes, go to #1
10. Goodbye!

Video Walkthrough, Part 1

Run through the steps. In your first reading, you may find step #5 to be a little weird since each player has only marked one square, but we're already concerned about the logic of winning. That can be explained by step #7 which suggests a looping construct based on whether we have a result to display. If we don't, we go back to step #2. Let's take a look at the flowchart diagram as well:



![TTT flowchart](https://d1b1wr57ag5rdp.cloudfront.net/images/ttt_flowchart.png)



Since it represents an output process, the "Display board" rectangle should actually be a parallelogram.

At this point, we're not concerned with *how* we'll implement a step like "Computer marks a square." Instead, we want to develop a high-level understanding of how the program will work. One thing that jumps out immediately is the notion of a board; it permeates nearly every step in the flowchart. For example, if we want to determine the winner of the game, we must inspect the state of the board; if we want to mark a square for the user, we need to alter the state of the board. Outlining the general flow of a program forces us to think about the high-level components of a program; that helps us when we begin coding.

### Display an Empty Board

Let's start by creating a JavaScript file named `tictactoe.js`. The first thing we'll do is display an empty board:

tictactoe.js

```js
console.log('');
console.log('     |     |');
console.log('     |     |');
console.log('     |     |');
console.log('-----+-----+-----');
console.log('     |     |');
console.log('     |     |');
console.log('     |     |');
console.log('-----+-----+-----');
console.log('     |     |');
console.log('     |     |');
console.log('     |     |');
console.log('');
```

These are simple `console.log` calls, each with five spaces followed by a vertical bar and five more spaces. That gives us a nice Tic Tac Toe board. Run the program to see how it looks. It should display the following board on the console:

Copy Code

```plaintext
     |     |
     |     |
     |     |
-----+-----+-----
     |     |
     |     |
     |     |
-----+-----+-----
     |     |
     |     |
     |     |
```

### Display Board for an In-Progress Game

What we'd like to do after each move is to replace the center space in the chosen square with an `X` or `O` to denote that the square has been chosen by one of the players. So, after 3 moves, for instance, the board may look like this:

```plaintext
     |     |
  X  |     |
     |     |
-----+-----+-----
     |     |
     |  O  |
     |     |
-----+-----+-----
     |     |
     |     |  X
     |     |
```

If we take a look at our high-level pseudocode, you'll see that displaying the board is something we'll do over and over. This operation seems like a good candidate to abstract away as a function:

tictactoe.js

```js
function displayBoard() {
  console.log('');
  console.log('     |     |');
  console.log('     |     |');
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log('     |     |');
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log('     |     |');
  console.log('     |     |');
  console.log('');
}
```

The `displayBoard` function isn't an interesting function at this point since it can only display the initial state where no squares are in use. This function probably needs a board as an argument and should display a grid based on that argument. However, how do we represent a board with a JavaScript data structure? This decision is crucial since the board is the main data structure of our program. Since we have nine squares on the board, one option could be to create a nine-element array that represents our board:

Copy Code

```js
['X', 'O', ' ', ' ', 'O', 'X', ' ', ' ', 'X']
```

That'll work, but there are other options. Another option is to create a nested array in which each subarray represents the state of each row of squares in the board. You can also use an object, which is what we'll use. There's no "right" or "best" choice here; we will choose to use an object instead, but either of the other two approaches will work.

In our board object, each key represents a specific square, numbered `1` through `9` (squares are numbered from left-to-right and top-to-bottom, so the top-left square is square `1`, and the bottom-right square is square `9`. Each value represents the symbol that goes into that square. For example, consider a board object that looks like this:

```js
let board = {
  1: 'X', // top left
  2: ' ', // top center
  3: ' ', // top right
  4: ' ', // middle left
  5: 'O', // center
  6: ' ', // middle right
  7: ' ', // bottom left
  8: ' ', // bottom center
  9: 'X', // bottom right
};
```

It should look like this when printed on the screen:

```plaintext
     |     |
  X  |     |
     |     |
-----+-----+-----
     |     |
     |  O  |
     |     |
-----+-----+-----
     |     |
     |     |  X
     |     |
```

Note that we use spaces (`' '`) instead of empty strings to represent the unmarked squares. We chose spaces so that we don't mess up the formatting.

Next, we need to change our `displayBoard` function to accept a board object and use that object to construct the visual board to display on the screen. We'll do that by replacing the middle space of each square with the appropriate value from the object using string interpolation with template strings:

tictactoe.js

```js
function displayBoard(board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}
```

Note that we're using string-based indices to access values from the `board` object. That's because object keys are always strings in JavaScript. Test the new `displayBoard` function by passing it the board we created earlier.

tictactoe.js

```js
let board = {
  1: 'X',
  2: ' ',
  3: ' ',
  4: ' ',
  5: 'O',
  6: ' ',
  7: ' ',
  8: ' ',
  9: 'X',
};

displayBoard(board);
```

You'll see that we get a board with the appropriate squares marked off. Play around with this code by changing the `board` object and seeing how it affects the output on the screen. The intention is to declare and initialize a board object with spaces for all keys and then replace those spaces with `X` or `O` as the game advances.

### Create a New Board

We've now decided on the data structure to represent the board as well as a function `displayBoard` that takes a board object and displays a grid that represents the object. Let's now create a function that returns an initial board object. The initial board object should contain only the string `' '` as values:

tictactoe.js

```js
function displayBoard(board) {
  // code omitted
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = ' ';
  }

  return board;
}

let board = initializeBoard();
displayBoard(board);
```

The `initializeBoard` function creates and initializes an empty object, uses a loop to populate the objects keys from `1` to `9` with the string `' '`, and then returns that object.

That completes this assignment. In the next assignment, we'll implement the workflow for the user and computer choosing a move.