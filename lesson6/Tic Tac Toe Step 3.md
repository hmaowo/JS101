# Tic Tac Toe - Step 3 - The Main Game Loop

We've made good progress so far. We have functions for making a square choice for both the computer and the player, and we're calling them both for one complete turn. The next step is to develop a loop that calls these functions repeatedly until the board is full or we have a winner. Let's first create a skeleton of the loop, then work out the details as we need them.

Video Walkthrough, Part 3

tictactoe.js

```js
// code omitted

let board = initializeBoard();
displayBoard(board);

while (true) {
  playerChoosesSquare(board);
  computerChoosesSquare(board);
  displayBoard(board);

  // break if a condition is met
}
```

This loop repeatedly asks the user to choose a square, then asks the computer, and, finally, redisplays the updated board. It repeats this process until some condition is met; what is that condition? There are two, in fact:

1. There are no more empty squares, or
2. We have a winner.

Let's pretend we have functions that help determine when these conditions are met:

tictactoe.js

```js
// code omitted for brevity

let board = initializeBoard();
displayBoard(board);

while (true) {
  playerChoosesSquare(board);
  computerChoosesSquare(board);
  displayBoard(board);

  if (someoneWon(board) || boardFull(board)) break;
}
```

Here, we break out of the loop when either the board is full or someone has won. Since both functions require access to the board, both take `board` as the argument. Of the two functions, `boardFull` seems like it might be easiest to implement, so let's begin there. All we need to do is determine whether `emptySquares()` returns an empty list:

tictactoe.js

Copy Code

```js
function boardFull(board) {
  return emptySquares(board).length === 0;
}
```

Recall that `emptySquare` uses the `filter` function to select the `board` keys that have a value of `INITIAL_MARKER` (a space); these keys represent unplayed squares: neither the human nor the computer has played them. If there are no such keys, `filter` returns an empty array, which, in turn, is returned by `emptySquares`. We use that knowledge here to determine whether any squares remain. We'll want to test this function, of course, but our breaking condition also needs the `someoneWon` function. For now, we can just let it return `false` so we can test the `boardFull` function.

tictactoe.js

```js
function someoneWon(board) { // board is unused for now; we'll use it later
  return false;
}
```

Test the new code by running the program. You'll find that the program keeps running until the board is full.

Here's the complete code so far:

Show Code

One thing you'll notice, though, is that we have multiple boards displayed as a result of this loop. Our terminal looks cluttered. Ideally, we only want to see the current state of the board at any time. We can accomplish that by clearing the terminal each time we display the board. One way to do that is with `console.clear()`:

tictactoe.js

```js
function displayBoard(board) {
  console.clear();

  console.log('');
  // code omitted
}
```

Rerun the program to see the effect.

In the next assignment, we'll take the final step of determining the winner of the game.