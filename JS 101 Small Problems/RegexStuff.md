https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet

> - `/[a-z]/g` : Checks whether the character is a lowercase letter between `'a'` and `'z'`.
> - `/[A-Z]/g` : Checks whether the character is an uppercase letter between `'A'` and `'Z'`.
> - `/[^a-z]/gi` : Checks whether the character is neither an uppercase nor a lowercase letter.
> - `g` : Tells the regex engine to search the entire string.
> - `i` : Tells the regex engine to ignore case

REGEX FLAGS

- i means case insensitive search
- 

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

```
x?
If used immediately after any of the quantifiers *, +, ?, or {}, makes the quantifier non-greedy (matching the minimum number of times), as opposed to the default, which is greedy (matching the maximum number of times).
```

```
x*	
Matches the preceding item "x" 0 or more times. 

x+	
Matches the preceding item "x" 1 or more times.

For example
0*? matches 11111 but 0+? matches nothing
```