# Assignment: Twenty-One

In this assignment, we'll build a game called Twenty-One. It's very similar to Blackjack but stripped down a bit. For instance, Twenty-One doesn't have splits, double-downs, and other complex plays. Those features are beyond the scope of what we want to cover.

If you've never played Blackjack before, don't worry, our Twenty-One game is easy to understand.

### Rules of Twenty-One

- **Deck:** Start with a standard 52-card deck consisting of the 4 suits (Hearts, Diamonds, Clubs, and Spades), and 13 values (2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace).

- **Goal:** The goal of Twenty-One is to try to get as close to 21 as possible without going over. If you go over 21, it's a **bust**, and you lose.

- **Setup:** The game consists of a **dealer** and a **player**. Both participants are initially dealt a **hand** of two cards. The player can see their 2 cards, but can only see one of the dealer's cards.

- **Card values:** All of the card values are pretty straightforward, except for the Ace. The cards with numbers 2 through 10 are worth their face value. The Jack, Queen, and King are each worth 10. The Ace can be worth 1 or 11 depending on circumstances. Its value is determined each time a new card is drawn from the deck. For example, if the hand contains a 2, an Ace, and a 5, then the total value of the hand is 18. In this case, the Ace is worth 11 because the sum of the hand (2 + 11 + 5) doesn't exceed 21. Now, say another card is drawn, and it happens to be an Ace. Your program must determine the value of both Aces. If the sum of the hand (2 + 11 + 5 + 11) exceeds 21, then one of the Aces must be worth 1, resulting in the hand's total value being 19. What happens if another card is drawn and it also happens to be an Ace? It can get tricky if there are multiple Aces in a hand, so your program must account for that.

  |       Card        |   Value    |
  | :---------------: | :--------: |
  |      2 - 10       | face value |
  | Jack, Queen, King |     10     |
  |        Ace        |  1 or 11   |

- **Player turn:** The player always goes first, and can decide to either **hit** or **stay**. A hit means the player wants to be dealt another card. Remember, if his total exceeds 21, he will *bust* and lose the game. The decision to hit or stay depends on the player's cards and what the player thinks the dealer has. For example, if the dealer is showing a "10" (the other card is hidden), and the player has a "2" and a "4", then the obvious choice is for the player to hit. The player can continue to hit as many times as they want. The turn is over when the player either busts or stays. If the player busts, the game is over, and the dealer won.

- **Dealer turn:** When the player stays, it's the dealer's turn. The dealer must follow a strict rule for determining whether to hit or stay: hit until the total is at least 17. If the dealer busts, then the player wins.

- **Comparing cards:** When both the player and the dealer stay, it's time to compare the total value of the cards and see who has the highest value.

### Examples of Gameplay

To give you an idea of how to play, try to decide what to do in each of these scenarios:

**Scenario 1**



Copy Code

```plaintext
Dealer has: Ace and unknown card
You have: 2 and 8
```

You should *hit* in this scenario. You see the dealer has an Ace, which means the dealer has a high probability of having a 21, the optimal number. On top of that, your total of 10 can only benefit from an extra card, as there's no way you can bust.

**Scenario 2**



Copy Code

```plaintext
Dealer has: 7 and unknown card
You have: 10 and 7
```

You should *stay* here since the chances are good that the unknown card is not an Ace, which is the only situation where you can lose. There's a small chance that you'll lose; most likely, you'll win with 17 or tie.

**Scenario 3**



Copy Code

```plaintext
Dealer has: 5 and unknown card
You have: Jack and 6
```

This one is a little tricky, and at first glance, you may think that either hit or stay is appropriate. You have 16, and you could try to get lucky and land a card less than 6. That's okay reasoning, except for the fact that the dealer has a 5. You're anticipating that the unknown card is worth 10, thereby making the dealer's cards worth 15. That means that the dealer must hit, and there's a good chance it will bust. The best move here is to *stay*, and hope the dealer busts.

Hopefully, that gives you an idea of how fun and tricky this game can be, despite the simple rules!

### Implementation Steps

The highest-level steps of implementing Twenty-One appear straightforward, but it's a good idea to write down some pseudocode before we begin coding:

Copy Code

```plaintext
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.
```

There are some tricky parts in the looping constructs, as we'll soon see, but that seems to be a decent high-level flow.

### Tips on Getting Started

#### Data Structure

What data structure should you use to contain the deck, the player's cards, and the dealer's cards? An object, perhaps? An array? A nested array? Your decision will have consequences throughout your code but don't be afraid of choosing the wrong one. Play around with an idea, and see how far you can push it. If it doesn't work, back out and take another approach.

See Possible Data Structure

#### Calculating Aces

Calculating Aces. Remember that Aces can be worth either 1 or 11, depending on context. You shouldn't ask the player what the value of each Ace is; your program should be able to figure that out automatically.

Method to calculate total

#### Player turn

When thinking about how to code the player's turn, think about a loop that keeps asking the player to either hit or stay. Now, think about the breaking condition for that loop. When do we stop asking that question of the user? Some pseudocode may help.

Copy Code

```plaintext
- Ask player to hit or stay.
- If stay, stop asking.
- Otherwise, go to #1.
```

That seems simple enough. Let's write some code:

Copy Code

```js
while (true) {
  console.log("hit or stay?");
  let answer = readline.question();
  if (answer === 'stay') break;
}
```

Notice that we want to ask the user the question at least once, so the break occurs at the bottom of the loop. If the user chooses anything other than `"stay"`, then the loop continues.

Can you think of another condition that can cause the loop to break? Suppose the user keeps hitting, and eventually busts? That sounds like something we should check for:

Copy Code

```js
while (true) {
  console.log("hit or stay?");
  let answer = readline.question();
  if (answer === 'stay' || busted()) break;
}
```

Thus, the user can only exit the loop when one of those two things occur: either the player stays, or the player busts.

Once the loop ends, we can recheck the conditions to see why the loop ended, and handle things differently if needed.

Copy Code

```js
while (true) {
  console.log("hit or stay?");
  let answer = readline.question();
  if (answer === 'stay' || busted()) break;
}

if (busted()) {
  // probably end the game? or ask the user to play again?
} else {
  console.log("You chose to stay!");  // if player didn't bust, must have stayed to get here
}
```

#### Shuffle Cards

You'll need to shuffle the deck of cards to make sure that they're in a random order before you start dealing cards. Unfortunately, JavaScript arrays don't have a method for shuffling elements. You'll need to implement your own shuffling function. One good algorithm for shuffling an array is the [Fisher–Yates shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle), which looks like the following in JavaScript:

Copy Code

```js
function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}
```

#### Dealer Turn

Dealer turn. The dealer turn follows a pattern that is very similar to the player's turn. However, the dealer's break condition occurs at the top of the "hit or stay" loop. See if you can determine why that is.

#### Displaying the Result

When you display the result, you also need to perform the calculation of who won. Having one function that both performs the calculation and displays the result is hard to reason about. The trick is to create a function that only returns the result of the game, and another that only handles displaying the result. You want to write functions that only do one thing.