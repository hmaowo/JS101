The **`break` statement** terminates the current loop, [`switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch), or [label](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) statement and transfers program control to the statement following the terminated statement.

```js
let i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}

console.log(i);
// expected output: 3

```

 **`continue` statement** terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

- CAREFUL: With `while` loop, `continue` statement causes control to reach the end of statements (including increment statement), thus causing loop to continue forever.

```js
let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue; // CAN ONLY BE USED WITH FOR LOOP
  }
  text = text + i;
}

console.log(text);
// expected output: "012456789"
```

