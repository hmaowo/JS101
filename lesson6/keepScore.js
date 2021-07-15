/*
Rule
  - Keep track of how many times the player and computer each win, and report the scores after 
  each game. 
  - The first player to win 5 games wins the overall match (a series of 2 or more games). 
  - The score should reset to 0 for each player when beginning a new match. 
  - Don't use any global variables. However, you may want to use a global constant to represent the 
    number of games needed to win the match.
*/

const readline = require('readline-sync');

const INITIAL_MARKER = ' '; // symbolic constants
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WIN_MATCH = 5;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

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

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = ' ';
  }

  return board;
}

function emptySquares(board) {
  // valid square choices are those `board` keys whose values are spaces
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square; // declared here so we can use it outside the loop

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}`);
    square = readline.question().trim(); // input trimmed to allow spaces in input
    if (emptySquares(board).includes(square)) break; // break if it's a valid square

    prompt("Sorry, that's not a valid choice.");

  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares.length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) { // board is unused for now, we'll use it later
  if (detectWinner(board) === 'Player') {
    return 'Player';
  } else if (detectWinner(board) === 'Computer') {
    return 'Computer';
  } else {
    return false;
  }
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], //rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7] // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    // have to compare individual values of array
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

// keep track of score
while (true) {
  let playerScore = 0;
  let computerScore = 0;

// play a match
  while (true) {
    let board = initializeBoard();

// play each game
    while (true) {
      displayBoard(board);
      playerChoosesSquare(board);
      // there isn't always a winner
      if (someoneWon(board) === 'Player') {
        playerScore += 1;
        break;
      } else if (someoneWon(board) === 'Computer') {
        computerScore += 1;
        break;
      } else if (boardFull(board)) {
        break;
      }
      computerChoosesSquare(board);
      if (someoneWon(board) === 'Player') {
        playerScore += 1;
        break;
      } else if (someoneWon(board) === 'Computer') {
        computerScore += 1;
        break;
      } else if (boardFull(board)) {
        break;
      }
    }
    
    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won this round!`);
    } else {
      prompt("This round is a tie!");
    }

    if (playerScore === WIN_MATCH) {
      prompt('You won the match!');
      prompt('Play again? (y or n)');
      let answer = readline.question().toLowerCase()[0];
      if (answer !== 'y') break;
    } else if (computerScore === 5) {
      prompt('Computer won the match!');
      prompt('Play again? (y or n)');
      let answer = readline.question().toLowerCase()[0];
      if (answer !== 'y') break;
    }
  }
  return false;
}


// bonus
function joinOr(arr, delimeter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return "";
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      let firstPart = arr.slice(0, arr.length - 1);
      let lastPart = arr[arr.length - 1];
      return `${firstPart.join(delimeter)}${delimeter}${word} ${lastPart}`;
  }
}
