# Assignment: TTT Bonus Features

You now have a simple, but fully-functional, command-line Tic Tac Toe game. It's time for you to try adding some additional features.

Current Program Code

### Improved "join"

If we run the program as it now is, we'll see the following prompt:

```plaintext
=> Choose a square: 1, 2, 3, 4, 5, 6, 7, 8, 9
```

This prompt is fine, but we'd like it to read a little better. Suppose we want to separate the last item with "or" so that it reads:

```plaintext
=> Choose a square: 1, 2, 3, 4, 5, 6, 7, 8, or 9
```

Our code currently uses the `Array.prototype.join` method to create the list of numbers, but `join` can only insert a simple delimiter between each array element; it isn't smart enough to display a joining word for the last element.

Write a function named `joinOr` that produces the following results:

```js
joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"
```

Use this function in the game when prompting the user to mark a square.

Note that `joinOr` has more functionality than we need for this program; for instance, it lets you specify different delimiters and different words for the last item. Make sure that you test the additional features even if you don't need them in your program; you may need this function again some day.

Hint

PEDAC and Pseudocode

Possible Solution

### Keep Score

Keep track of how many times the player and computer each win, and report the scores after each game. The first player to win 5 games wins the overall match (a series of 2 or more games). The score should reset to `0` for each player when beginning a new match. Don't use any global variables. However, you may want to use a global constant to represent the number of games needed to win the match.

### Computer AI: Defense

The computer currently picks a square at random. That's not very interesting. Let's make the computer defensive-minded so that, when an *immediate threat* exists, it will try to defend the 3rd square. An immediate threat occurs when the human player has 2 squares in a row with the 3rd square unoccupied. If there's no immediate threat, the computer can pick a random square.

Possible Solution

### Computer AI: Offense

The defensive-minded AI is pretty cool, but it's still not performing as well as possible. If there are no impending threats, it will pick a square at random. We can improve it by attempting to find a winning move. We're not going to add a complicated algorithm; instead, we'll piggyback on `findAtRiskSquare` and turn it into an attacking mechanism as well. The logic is simple:

- Finding a defensive-minded square means finding an empty square in a line where the other two squares belong to the human player.
- Finding an offensive-minded square means finding an empty square in a line where the other two squares belong to the computer.

These two conditions are so similar that we can use the same code to determine both results.

Possible Solution

### Computer turn refinements

1. Ideally, if the computer has a chance to win, it should make the winning move. As the program is right now, the computer will first attempt a defensive move, which is backward from the optimal strategy. In other words, if the computer has a chance to win, it should make the winning move rather than the defensive move. Update the code so that it plays the offensive move first.
2. We can make one more improvement: pick square #5 if it's available. The AI for the computer should first pick the winning move, then the defensive mode, then square #5, and, finally, a random square.
3. Can you change the game so that the computer moves first? See if you can make this a setting at the top of the program (i.e., a constant) so that you can play the game with either the player or computer going first. Try adding a 3rd option that causes your game to prompt the user for who goes first before play begins. Valid options for the constant used in this feature can be `"player"`, `"computer"`, or `"choose"`.

## Improve Play-Again Handling

You may have noticed that the `Play again?` handling starts a new game when the user enters a response that begins with `y` or `Y`, but ends the program if the user enters anything else. Even just pressing the `{Enter}` key is enough to end the program. Modify the program so that it only accepts `y`, `Y`, `n`, or `N` as valid inputs, and issues an error message for anything else.

Consider what happens when the user enters something that begins with `n` or `y` but isn't unambiguously a yes/no response. For instance, `yellow` or `narwhale`. What should the program do in those cases?

### Improve the game loop

There's a bit of redundant code in the main game loop:

tictactoe.js

```js
while (true) {
  displayBoard(board);

  playerChoosesSquare(board);
  if (someoneWon(board) || boardFull(board)) break;

  computerChoosesSquare(board);
  if (someoneWon(board) || boardFull(board)) break;
}
```

Notice how we have to break after each player makes a move. Suppose we have a generic function that marks a square based on which player is making a move? If so, we could do something like this:

tictactoe.js

```js
while (true) {
  displayBoard(board);
  chooseSquare(board, currentPlayer);
  currentPlayer = alternatePlayer(currentPlayer);
  if (someoneWon(board) || boardFull(board)) break;
}
```

There are two new functions there: `chooseSquare` and `alternatePlayer`. `chooseSquare` is a generic function that knows how to choose a square depending on the current player. That is, it will call `computerChoosesSquare` or `playerChoosesSquare` depending on the value of `currentPlayer`. The trick, then, is to keep track of the current player and pass it to `chooseSquare` during each turn.

See if you can build those two functions and make this work.

Not all of the above features show our solutions. You can find student solutions by looking at the code reviews in [this lesson's Discussions tab](https://launchschool.com/lessons/fb4809a8/home).

## On Your Own Ideas

Below are some extra ideas you may want to explore on your own. They're challenging and a bit out of scope for this course, but may be fun for the adventurous programmer.

1. **Minimax algorithm** You can build an unbeatable Tic Tac Toe by utilizing the [minimax algorithm](https://en.wikipedia.org/wiki/Minimax).
2. **Bigger board** What happens if the board is 5x5 instead of 3x3? What about a 9x9 board? You'll have to decide for yourself the rules of the game when the board isn't a 3x3 board.
3. **More players** When you have a bigger board, you can perhaps have more than 2 players. Would it be interesting to play against 2 computers? What about 2 human players against a computer?