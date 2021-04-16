```
> 3 + 5 * 7
```

The meaning of an expression in JavaScript is determined by what is called **operator precedence**. 

- It’s a set of [rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) that dictate how JavaScript determines what operands each operator takes. Consider this expression:
- Parentheses override the default evaluation order and have the highest possible precedence.
- precedence determines the *meaning* of an expression.
- However, thinking of precedence in this way can sometimes lead to unexpected results when using the `||` and `&&` short-circuit operators or the ternary operator (`a ? b : c`). 
  - It's safer to think of precedence as the mechanism used by JavaScript to determine which operands get passed to each operator.
  - Don't rely too much on precedence. It's easy to forget the precedence order and get confused by an unexpected result. If you're using 2 or more different operators in an expression, use parentheses to explicitly define the meaning. 

An operator that has higher precedence than another is said to **bind** more tightly to its operands. 

- In the expression `3 + 5 * 7`, the `*` operator binds more tightly to its operands, `5` and `7`, than does the `+` operator. Thus, `+` binds to `3` and the return value of `5 * 7` instead of `3` and `5`.

<u>Evaluation Order</u>

From time to time, you may hear or read somebody saying that precedence determines the order in which expressions get evaluated. The evaluation process is more complicated than just determining what gets evaluated first, though. 

In fact, precedence in JavaScript is only part of the story; the other parts are either left-to-right evaluation, right-to-left evaluation, short-circuiting, and ternary expressions.

```js
function value(n) {
  console.log(n);
  return n;
}

console.log(value(3) + value(5) * value(7));
```

```
3
5
7
38
```

- The issue here is that operators like `+` and `*` need values that they can work with. Method invocations like `value(5)` and `value(7)` are not values. We can't invoke the `*` operator until we know what values those methods return.
-  In an arithmetic expression, JavaScript first goes through an expression left-to-right and evaluates everything it can without calling any operators. Thus, here it evaluates `value(3)`, `value(5)`, and `value(7)` first, in that order.
-  JavaScript re-evaluates the result with the precedence rules only after it has those values

Right-to-left evaluation occurs when you do multiple assignments or multiple `**` operators:

```
> a = b = c = 3
> 5 ** 3 ** 2    // 1953125 (same as 5 ** (3 ** 2) = 5 ** 6 = 5 * 5 * 5 * 5 * 5 * 5)
```

The ternary operator (`?:`) and the short-circuit operators `&&` and `||` are a common source of unexpected behavior where precedence is concerned. Consider the following expressions:

```
> 3 ? 1 / 0 : 1 + 2  // Infinity
> 5 && 1 / 0         // Infinity
> null || 1 / 0      // Infinity

```

What happens, though, if we modify things so that `1 / 0` isn't needed?

```
> null ? 1 / 0 : 1 + 2  // 3
> null && 1 / 0         // null, short curcuits at null because null is falsey
> 5 || 1 / 0            // 5, short curcuits at 5 because 5 is truthy
```



In all 3 cases, `1 / 0` never gets executed, even though operator precedence would suggest that it should be evaluated first.

- In the first expression, `1 / 0` isn't evaluated since its the truthy operand for the `?:` - it only gets run when the value to the left of `?` is truthy. Instead, the code returns `3` (`1 + 2`). 
- The other two expressions don't evaluate `1 / 0` due to short-circuiting. 
- In all 3 expressions, this is simply the way JavaScript works - it treats `?:`, `&&`, and `||` differently from other operators and doesn't evaluate subexpressions unless it needs them.