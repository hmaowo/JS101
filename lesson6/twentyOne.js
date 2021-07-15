/*
A
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.

Data Structure
- first index in subarray is the suit (heart, diamond, club, spade)
- 2nd index in subarray is the value (2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king, ace)
- A hand holds [['H', '2'], ['S', 'J'], ['D', 'A']]
*/

// method to calculate total
function total(cards) {
   let values = card.map(card => card[1]);

   let sum = 0;
   values.forEach(value => {
      if (value === 'A') {
         sum += 11;
      } else if (['J', 'Q', 'K'].includes(value)) {
         sum += 10;
      } else {
         sum += value;
      }
    });

   // correct for Aces
   values.filter(value => value === 'A').forEach(_ => {
      if (sum > 21) sum -= 10;
   });

   return sum;
}

// Fisher-Yates shuffle
function shuffle(array) {
   for (let index = array.length - 1; index > 0; index--) {
      let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
      [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
   }
}

function results () {

}

function calculation() {

}

function busted(sum) {
   return sum > 21;
}
/*
A
- Ask player to hit or stay.
- If stay, stop asking.
- Otherwise, go to #1.
*/

while (true) {
   // player
   console.log('hit or stay?');
   let answer = readline.question();
   if (answer === 'stay') break;


}

if (busted()) {
   // probably end the game? or ask the user to play again? 
   console.log('You lost the game. Dealer wins.');
   break;
} else {
   console.log("You chose to stay!"); // if player didn't bust, must have stayed to get here
}

   // dealer
