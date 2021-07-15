# Tic Tac Toe - Step 2 - Player and Computer Turn

Thus far, our Tic Tac Toe implementation represents the game board with a data-structure and implements a function that displays the board on the screen. Next, we need to ask the human player to select a square to mark, then have the computer choose its square. Let's start with the player's choice.

### Player Turn

Video Walkthrough, Part 2

Ideally, we want to call a function that asks the player to choose a square. Before we implement it though, let's see the current state of our program:

Show Code

Let's begin by writing a `playerChoosesSquare` function. The first thing to think about is the function's input--its arguments. We'll need to pass a board object to the function since we must mutate the board after the player chooses a square:

tictactoe.js

```js
function playerChoosesSquare(board) {

}
```

Next, we prompt the user for their square selection and read that input. We need to require the `readline-sync` object and also define the `prompt` function. By now, you should know how to do both those things so we won't show the code here.

Let's make an initial attempt at the `playerChoosesSquare` implementation:

tictactoe.js

```js
function playerChoosesSquare(board) {
  prompt('Choose a square (1-9):');
  let square = readline.question();
  board[square] = 'X';
}
```

Here, we ask the player to choose a square--a value between 1 and 9--and set the value for that square to `'X'`. For example, if she enters `9`, the value for key `9` of the board object will be set to `'X'`. Note that we don't need to convert the input to a number since the keys in JavaScript objects are always strings, and `readline.question` returns a string value.

Let's use `playerChoosesSquare` to ask for the player's move and then redisplay the board:

tictactoe.js

```js
// at bottom of program

let board = initializeBoard();
displayBoard(board);

playerChoosesSquare(board);
displayBoard(board);
```

If you run the program and enter a number between 1 and 9, you'll see that the appropriate square gets marked with an `X`.

```terminal
$ node tictactoe.js

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

=> Choose a square (1-9)
5

     |     |
     |     |
     |     |
-----+-----+-----
     |     |
     |  X  |
     |     |
-----+-----+-----
     |     |
     |     |
     |     |
```

Run the program several times while inputting different numbers between 1 and 9 to verify that it works as expected.

#### Handling Bad Inputs

The current implementation of `playerChoosesSquare` has some problems:

1. If the player enters something other than a number between 1 and 9, it adds an unnecessary key to the board object. However, it doesn't complain about the incorrect input.
2. If a square has already been chosen, the function doesn't prevent the player from choosing that square again.

Obviously, we want to limit inputs to those that make sense. One way to do that is to insist that the board object contains a space (`' '`) in the position that corresponds to the key. Let's give it a try:

tictactoe.js

```js
function playerChoosesSquare(board) {
  let square; // declared here so we can use it outside the loop

  // valid square choices are those `board` keys whose values are spaces
  let emptySquares = Object.keys(board).filter(key => board[key] === ' ');

  while (true) {
    prompt('Choose a square (1-9):');
    square = readline.question().trim(); // input trimmed to allow spaces in input
    if (emptySquares.includes(square)) {
      break; // break if it's a valid square
    } else {
      prompt("Sorry, that's not a valid choice.");
    }
  }

  board[square] = 'X';
}
```

We're using a `while (true)` loop here to keep asking the player for input until they've entered a valid choice. Valid choices are determined on line 5 by filtering out `board` keys where the value is a space. Test this new functionality by rerunning the program, this time providing both a valid and invalid square option.

Copy Code

```shell
$ node tictactoe.js

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

=> Choose a square (1-9)
10
=> Sorry, that's not a valid choice.
=> Choose a square (1-9)
1

     |     |
  X  |     |
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

There's one slight improvement we should make. The prompt always asks for a number between 1 and 9, but those aren't always valid choices.

Recall that our program will run as part of a loop, with the human player and the computer taking turns until the game is over. If the user chooses `1` on her first turn and the computer then chooses `5`, then neither `1` nor `5` will be valid choices when the player selects her second square. To fix this problem, we must use the `emptySquares` array to construct our prompt message:

tictactoe.js

Copy Code

```js
function playerChoosesSquare(board) {
  let square; // declared here so we can use it outside the loop

  // valid square choices are those `board` keys whose values are spaces
  let emptySquares = Object.keys(board).filter(key => board[key] === ' ');

  while (true) {
    prompt(`Choose a square (${emptySquares.join(', ')}):`);
    square = readline.question().trim(); // input trimmed to allow spaces in input
    if (emptySquares.includes(square)) {
      break; // break if it's a valid square
    } else {
      prompt("Sorry, that's not a valid choice.");
    }
  }

  board[square] = 'X';
}
```

A small refactoring can be made in the `if/else` construct. Whenever we have `if/else` with a `break` statement, we can remove the `else` clause and turn the `if/else` into a guard clause:

tictactoe.js

Copy Code

```js
function playerChoosesSquare(board) {
  let square;
  let emptySquares = Object.keys(board).filter(key => board[key] === ' ');

  while (true) {
    prompt(`Choose a square (${emptySquares.join(', ')}):`);
    square = readline.question().trim();

    if (emptySquares.includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = 'X';
}
```

#### A Touch of Magic

From a readability standpoint, the use of spaces to represent unused squares isn't horrible, but there's no indication what those spaces mean inside our program. We can't tell at a glance that the spaces represent unused squares, nor can we distinguish them from spaces used for other purposes. Instead, we must study the context of each space character to determine what they represent. Such mystery constants are often said to be magic; they convey no information about their meaning, much as a magician doesn't reveal the secrets of his craft. In the case of magic constants, it's up to the person reading a program to divine the intent of the developer who added the magic constant to the program.

One easy way around the issue of magic constants is to use **symbolic constants** -- named constants -- instead. Symbolic constants with well-chosen names remove the magical element and reveal the purpose of each value.

For instance, the space character used to mark unused squares can be called something like `INITIAL_MARKER`:

tictactoe.js

Copy Code

```js
const INITIAL_MARKER = ' '; // near the top of the file

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function playerChoosesSquare(board) {
  let square;

  let emptySquares = Object.keys(board).filter(key => {
    return board[key] === INITIAL_MARKER;
  });

  while (true) {
    prompt(`Choose a square (${emptySquares.join(', ')}):`);
    square = readline.question().trim();
    if (emptySquares.includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = 'X';
}
```

We can also create a constant for the "X" marker that the human player uses:

tictactoe.js

Copy Code

```js
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';

// code omitted

function playerChoosesSquare(board) {
  let square;

  let emptySquares = Object.keys(board).filter(key => {
    return board[key] === INITIAL_MARKER;
  });

  while (true) {
    prompt(`Choose a square (${emptySquares.join(', ')}):`);
    square = readline.question().trim();
    if (emptySquares.includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}
```

In a little while, we'll add a `COMPUTER_MARKER` constant for the `"O"` marker.

One significant advantage of setting up constants for these markers is that you can easily replace the `"X"` and `"O"` with something else, such as ❌ (and 🔵) (that may require installing some Node packages with `npm`).

### Computer Turn

Let's now write a similar function for the computer; we'll call it `computerChoosesSquare`. For now, it will choose a random square from among those available, and set the value of that key to `O`.

tictactoe.js

Copy Code

```js
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

// code omitted

function computerChoosesSquare(board) {
  let emptySquares = Object.keys(board).filter(key => {
    return board[key] === INITIAL_MARKER;
  });

  let randomIndex = Math.floor(Math.random() * emptySquares.length);

  let square = emptySquares[randomIndex];
  board[square] = COMPUTER_MARKER;
}
```

Note that we're using the same expression to find empty squares in both `computerChoosesSquare` and `playerChoosesSquare`. It's a sign that we need to extract that expression to a function:

tictactoe.js

Copy Code

```js
function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}
```

We can now call that function where we need access to empty squares:

tictactoe.js

Copy Code

```js
function playerChoosesSquare(board) {
  // omitted code

  // remove `let emptySquares = ...` statement

  while (true) {
    prompt(`Choose a square (${emptySquares(board).join(', ')}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  // omitted code
}

function computerChoosesSquare(board) {
  // remove `let emptySquares = ...` statement

  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}
```

Finally, we need to call `computerChooseSquare` in our program to complete a single turn of the game. Our code looks like this:

Show Code

Now that we have the functions we need to make square choices for the computer and the player, the next step is to implement the main game loop where we'll repeatedly ask the player and the computer to choose a square until we have a full board or a winner. Make sure that you understand what we've done so far. See you in the next assignment.