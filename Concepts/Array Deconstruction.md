```js
 let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], //rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7] // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];
```

Within the loop, we use **array destructuring** to assign the numbers in each line -- a nested array -- to the variables `sq1`, `sq2`, and `sq3`. Thus, for example, if `winningLines[line]` points to the subarray `[1, 4, 7]`, the values `1`, `4`, and `7` will be assigned to `sq1`, `sq2`, and `sq3`, respectively. 

