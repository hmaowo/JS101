```javascript
let str = '123'
let lowercase = str.match(/[a-z]/g);

// lowercase === null 
```

Careful about using str.match(), if there's no match, lowercase will be **null**.  

```js
let str = '123'
let lowercase = str.match(/[a-z]/g) || ''
```

```js
let str = '123'
let lowercase = str.match(/[a-z]/g) || []
```



- Can use **logical or** to assign lowercase to something in case that happens
- assign to an empty string. `''.length === 0`
- or assign to an empty array `[].length === 0`

Reference: https://launchschool.com/exercises/71983fb9

```js
function letterPercentages(string) {
  let count = string.length;

  function percentage(regex) {
    let matchingChars = string.match(regex) || [];
    return ((matchingChars.length / count) * 100).toFixed(2);
  }

  return {
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither:   percentage(/[^a-z]/gi),
  };
}
```

Whenever you see a function within another function, the inner function has access to the scope in the outer function. This feature is called **Lexical Scope.** 

- To resolve variables, JavaScript starts at the innermost scope and searches outwards until it finds the variable it was looking for.

