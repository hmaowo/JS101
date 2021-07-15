# Tic Tac Toe - Step 4 - Determining the Winner

We've reached the point in our program where we can determine the winner of the game. After the program breaks out of the main game loop, there are only two possibilities: either someone has won, or we have a full board. Assuming we have an implementation for `someoneWon` at hand, let's handle those possibilities:

Video Walkthrough, Part 4

tictactoe.js

Copy Code

```js
while (true) {
  playerChoosesSquare(board);
  computerChoosesSquare(board);
  displayBoard(board);

  if (someoneWon(board) || boardFull(board)) break;
}

if (someoneWon(board)) {
  prompt(`${detectWinner(board)} won!`);
} else {
  prompt("It's a tie!");
}
```

Here, we're displaying a "Player Won!" or "Computer Won!" message when there's a winner and "It's a tie!" when there is no winner. The `detectWinner` function will return the name of the winner in the form of a string, or a value of `null` if neither player won. Thus, `someoneWon` can then use the return value of `detectWinner` like so:

tictactoe.js

Copy Code

```js
function someoneWon(board) {
  return detectWinner(board);
}
```

That's everything we need in the `someoneWon` function. Since we know that `detectWinner` will either return a string — a truthy value — or `null`, a falsy value, we can use it directly as the return value of `someoneWon`, which we'll eventually use in our `if/else` conditional.

This function is perfectly usable as we've implemented it, but it's not clearly returning a value that is intended to be used in a conditional context. It should return an explicit boolean value instead. One way to do that is to use an `if/else` inside `someoneWon`. A more concise way, though, is to use the `!` operator twice, like so:

tictactoe.js

Copy Code

```js
function someoneWon(board) {
  return !!detectWinner(board);
}
```

This common idiom converts a truthy value like `"abc"` to `true` and converts a falsy value like `undefined` or `null` to `false`. The consequence of using `!!` on the return value of `detectWinner` is that `someoneWon` now returns a boolean value.

At last, we're ready to write our `detectWinner` function. Let's first think about the winning condition. Take a look at this example of a board:

Copy Code

```plaintext
     |     |
  X  |  X  |  X
     |     |
-----+-----+-----
     |     |
  X  |  O  |  O
     |     |
-----+-----+-----
     |     |
  O  |  X  |  O
     |     |
```

The rules of the game say that a player wins when:

1. All three squares within any row are marked with the player's marker.
2. All three squares within any column are marked with the player's marker.
3. All three diagonal squares in either direction are marked with the player's marker.

Rewriting these rules in terms of our implementation, we can say that a player wins when any of the following sequences of squares all contain the player's marker:

- 1, 2, 3
- 4, 5, 6
- 7, 8, 9
- 1, 4, 7
- 2, 5, 8
- 3, 6, 9
- 1, 5, 9
- 3, 5, 7

We'll use a nested array to represent these 8 "winning lines." Each winning line is represented by an array that contains the keys of the three squares we'll need to examine. All of those arrays are themselves nested within an array that represents all of the winning lines. This structure lets us iterate over all of the possible winning lines, and, within each iteration, check whether the squares in that line all belong to one player. Here's our implementation:

tictactoe.js

Copy Code

```js
function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}
```

The style used in the conditional expressions of that `if` statement may look a little strange, but it's a common way to write complex conditional expressions in an `if` or `while` statement. Continuations sometimes look a little strange, but, even so, such code is more readable than cramming everything onto one line.

Our function declares a `winningLines` variable and assigns it a two-dimensional array. Each subarray represents a winning line. We then iterate over the subarrays using a `for` loop.

We use a `for` loop here since we may need to return from the function before the end of the loop; `forEach` doesn't allow that since using `return` in the callback merely returns from the callback.

Within the loop, we use array destructuring to assign the numbers in each line -- a nested array -- to the variables `sq1`, `sq2`, and `sq3`. Thus, for example, if `winningLines[line]` points to the subarray `[1, 4, 7]`, the values `1`, `4`, and `7` will be assigned to `sq1`, `sq2`, and `sq3`, respectively. We then inspect the board for that line; if the marker at all three squares is `HUMAN_MARKER`, i.e., `'X'`, we return the string `'Player'`, if the marker at all three squares is `COMPUTER_MARKER`, we return `'Computer'`. If we make it through the entire loop without finding a winning line, we know that nobody won, so we return `null`.

Run the program and play it a few times to make sure you win, lose and tie with the computer. You should see the appropriate message displayed in each case.

#### Improving the Game Loop

Video Walkthrough, Part 5

Let's take another look at our main game loop implementation:

tictactoe.js

Copy Code

```js
while (true) {
  playerChoosesSquare(board);
  computerChoosesSquare(board);
  displayBoard(board);

  if (someoneWon(board) || boardFull(board)) break;
}
```

At first glance, the logic here may seem sound, but if you look closely, you'll realize that it has a subtle but serious bug. Let's say we're at a point in our loop where the board looks like this:

Copy Code

```plaintext
     |     |
  O  |     |  X
     |     |
-----+-----+-----
     |     |
     |  X  |
     |     |
-----+-----+-----
     |     |
  O  |  O  |  X
     |     |
```

The program asks the player to choose a square, and they choose square 6. The computer then chooses square 4. At this point, the board looks like this:

Copy Code

```plaintext
     |     |
  O  |     |  X
     |     |
-----+-----+-----
     |     |
  O  |  X  |  X
     |     |
-----+-----+-----
     |     |
  O  |  O  |  X
     |     |
```

Note that both columns 1 and 3 are winning lines. Who is the winner here? The player chose first, so they should be the winner. However, that's not what our program does: it declares the computer as the winner. If we look closely at `detectWinner`, we see that line `[1, 4, 7]` occurs before line `[3, 6, 9]` in the `winningLines` array. As a result, the function checks line `[1, 4, 7]` before it can check line `[3, 6, 9]`, so the computer gets declared the winner.

We can fix this bug with a few small changes to our main game loop:

tictactoe.js

Copy Code

```js
// displayBoard(board); -- delete this line

while (true) {
  displayBoard(board);

  playerChoosesSquare(board);
  if (someoneWon(board) || boardFull(board)) break;

  computerChoosesSquare(board);
  if (someoneWon(board) || boardFull(board)) break;

  // displayBoard(board); -- delete this line
}

displayBoard(board);

if (someoneWon(board)) {
  prompt(`${detectWinner(board)} won!`);
} else {
  prompt("It's a tie!");
}
```

The most significant change here is that we now check for a winner after each turn. This change guarantees that the board can never have winning lines for both players since the loop ends as soon as one player wins or the game is tied.

One other change is primarily cosmetic -- if we leave the calls to `displayBoard` unchanged, the final state of the board doesn't get displayed. To compensate, we move the first call from before the loop to the beginning of the loop, and the other call from the end of the loop to after the loop.

#### Helpful display

Currently, the board we display on the screen doesn't show us which marker belongs to which player. The user needs to know which marker represents them so that they are not confused about the choice that they need to make. Let's change our `displayBoard` function to display that information:

tictactoe.js

Copy Code

```js
function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

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

#### Play Again

Our game is almost complete at this point. As with the other major programs in this course, we want to ask the user whether they want to play again. To do that, we must wrap our main game loop in another, outer, loop and break out when the user doesn't respond with a `y` to our question:

tictactoe.js

Copy Code

```js
while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }

  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');
```

Note that we include the board initialization in the outer loop since each game needs a separate board. At the very end, when the player doesn't want to play anymore, we display a thank you message.