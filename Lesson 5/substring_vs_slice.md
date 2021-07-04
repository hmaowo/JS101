952



`slice()` works like `substring()` with a few different behaviors.

```js
Syntax: string.slice(start, stop);
Syntax: string.substring(start, stop);
```

**What they have in common:**

1. If `start` equals `stop`: returns an empty string
2. If `stop` is omitted: extracts characters to the end of the string
3. If either argument is greater than the string's length, the string's length will be used instead.

**Distinctions of** [`substring()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)**:**

1. If `start > stop`, then `substring` will swap those 2 arguments.
2. If either argument is negative or is `NaN`, it is treated as if it were `0`.

**Distinctions of** [`slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)**:**

1. If `start > stop`, `slice()` will return the empty string. (`""`)
2. If `start` is negative: sets char from the end of string, exactly like `substr()` in Firefox. This behavior is observed in both Firefox and IE.
3. If `stop` is negative: sets stop to: `string.length – Math.abs(stop)` (original value), except bounded at 0 (thus, `Math.max(0, string.length + stop)`) as covered in the [ECMA specification](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-string.prototype.slice).

Source: [Rudimentary Art of Programming & Development: Javascript: substr() v.s. substring()](http://rapd.wordpress.com/2007/07/12/javascript-substr-vs-substring/)