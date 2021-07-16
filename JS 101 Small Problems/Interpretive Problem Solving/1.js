/* eslint-disable max-len */
/*
P
  - Info:
    - every switch is connected to 1 light that is initially off.
    - first pass: swithc on all lights
    - second pass: duplicates of 2,
    - third pass: duplicates of 3
    - continue this process until i made count passes
  - input: total number of switches
  - output: array of lights that are on after count switch toggles

Their explanation
Rules
  - All the lights are initially turned off.
  - The first switch in the bank of switches is switch #1. There is no switch #0.
  - For the nth round, every switch that is a multiple of nth gets toggled.
      - For example, in the first round, all the switches get toggled because all integers
        are multiples of 1.
      - In the second round, only the switches that are multiples of 2 get toggled.
  - The number of switches dictates the number of rounds.
      - For instance, if there are 10 switches then there will be 10 rounds of toggling.
  - Return an array containing the switch numbers of the lights that are on after all the rounds have been completed

(algorithm)
  - solve this problem using a simulation
  - have our program go through count rounds of toggling, while keep track of the states of the lights.
  - At the end, we'l determine what lights are on and return a list of their positions in the bank.
Data Structure
  - use array to track states of the lights
  - since each light has two possible states, we can use boolean to represent light
  - can use the ! unary operator to toggle light state
Algorithm:
  - Loop through the rounds from 1 to count, and for ech round:
    - if the current round is nth, toggle the lights whose indices are multiples of nth.
    - use map to return a new array to represent the new states.
  - filter/map the lights array to return a new array containing the indices
    of the lights that are on.
*/


function lightsOn(count) {
  let lights = initializeLights(count);

  for (let round = 1; round <= count; round++) {
    lights = toggleLights(lights, round); // reassigning lights
  }

  let indexArray = lights.map((light, index) => {
    return light === true ? index + 1 : undefined;
  });

  return indexArray.filter(index => index !== undefined);
}

function toggleLights(lights, round) {
  return lights.map((light, index) => {
    return (index + 1) % round === 0 ? !light : light;
  });

}

function initializeLights(count) {
  let lights = [];

  for (let counter = 0; counter < count; counter++) {
    lights.push(false);
  }

  return lights;
}

// Examples
console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]