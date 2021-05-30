https://regex101.com/r/sN5cH4/1

```js
/(.)(?=.*\1)/g
```

**Regular Expression to remove consecutive duplicates **

`(.)(?=.`

- matches `(.)` only if it's followed by `.`
- Syntax `x(?=y)` **look ahead assertion: ** matches x only if x is followed by y

`*`

- Syntax: `*`matches the previous token between 0 and unlimited times

`\1`

-  `\1`matches the same text as most recently matched by the 1st capturing group

`/g`

- **Global pattern flags**
- g modifier: **g**lobal. All matches (don't return after first match)

Example

```js
let string = 'aaabbbbccccc'
let removedDuplicates = string.replace(/(.)(?=.*\1)/g, '');
```