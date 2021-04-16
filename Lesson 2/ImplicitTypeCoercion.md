# Implicit Type Coercion

- Implicit type coercion happens when you perform an operation involving values of two different types and JavaScript coerces one of them to match the other.
- How different values get coerced depends on the operation. The most common operations in this context are `==` and `+,` but we'll discuss some other operations as well:

### Implicit Coercion with the `==` Operator

- The reason for this is that `==` operator implicitly coerces one of its operands when the operands have different types.
- The most common case occurs when comparing a string with a number:

```
> '1' === 1 // strict equality
false
> '1' == 1  // non-strict equality
true
```

- the nonstrict equality operator coerces the string `'1'` into a number and then compares it with the `1` on the right-hand side. We get the same result if we swap the two operands:

```
> 1 == '1'
true
```

-  Such behavior should be unexpected since a string and a number should never be equal to each other. That's why you should use `===` exclusively.
- Strings and numbers aren't the only types that the `==` operator coerces. Let's see what happens when we compare booleans with numbers:

```
> 1 == true
true
> 3 == true // is truthy not true? 
false
> 0 == false
true
```

- Had we used `===` here, all 3 expressions would return `false`. 
- By using `==`, though, two of them return `true`. When comparing a boolean with any value, `==` coerces `true` and `false` to their number equivalents, which are `1` and `0` respectively. Thus, the first and last expressions above return `true`

```
'1' == true
true
```

- comparing boolean with string 
- Here, the boolean `true` is coerced to the number `1`, and the comparison becomes `'1' == 1`. From our previous investigations, we know that this expression evaluates to `true` since the string `'1'` gets coerced to the number `1`

- Another situation occurs when comparing `undefined` and `null`. The `==` operator considers them equal:

```
> undefined == null
true
```

```
let val = getAValueFromSomewhere();

if (val === undefined || val === null) {
  // do one thing
} else {
  // do another thing
}
```

can be shorted to

```
let val = getAValueFromSomewhere();

if (val == undefined) {
  // do one thing
} else {
  // do another thing
}
```

 but version 1 is better because it is more explicit and clear. 

### Object == object 

When both operands are objects, `==` behaves exactly like the `===` operator; that is, it considers two objects equal only when they're the same object:

```
> let arr = []
> arr == []
false
> arr == arr
true
```

### object == primitive 

However, when one of the operands is an object and the other a primitive, `==` coerces the object to a primitive before making the comparison. Let's see a few examples:

```
> '' == {}
false
> '[object Object]' == {} // {} coerced to string '[object Object]'
true
> [] == ''
true
```

- The plain object `{}` in the above example is coerced into to the string `'[object Object]'`. That's why the comparison with `'[object Object]'` evaluates to `true`. 
- An empty array, on the other hand, is coerced into an empty string (`''`).
- A consequence of this is that the following comparison also holds:

```
> [] == 0
true
```

-  The array is coerced into the string `''`, and then compared with `0` again. At this point our comparison becomes `'' == 0`. 
  - We know from a previous rule that `==` converts the string to a number when the comparison is between strings and numbers. The empty string is coerced to the number `0`, and the resulting comparison becomes `0 == 0`.

### Summary

1. When a number is compared with a string using `==`, the string is coerced into a number.
2. When a boolean is compared with any other value, it is coerced into a number and compared again using the `==` operator.
3. When an object is compared with a primitive value, the object is coerced into a primitive value and compared again using the `==` operator.
4. A `==` comparison of `undefined` with `null` evaluates to `true`.

### Implicit Coercion with the Binary `+` operator

- In the previous assignment, we saw that the **unary** `+` operator could coerce strings to numbers. That's a form of implicit type coercion, but it's so commonplace that some people regard it as explicit type coercion.
- Let's look now at implicit coercion and the ***binary*** `+` operator:	

```
> 'number ' + 1
'number 1'
```

- Here, the number `1` is coerced into the string `'1'` and then concatenated with the string `'number '`. The general rule is that whenever one of the operands of the `+` operator is a string, the other operand is also coerced to a string and concatenated with the string:

```
> '' + [1, 2, 3]
'1,2,3'
> '' + true
'true'
> '' + undefined
'undefined'
> '' + {}
'[object Object]'
```

- When both operands are a combination of numbers, booleans, `null`s, or `undefined`s, they are converted to numbers and added together:

```
1 + true;       // 2
1 + false;      // 1
true + false;   // 1
null + false;   // 0
null + null;    // 0
1 + undefined;  // NaN
```

- When one of the operands is an object, both operands are converted to strings and concatenated together:

```
[1] + 2;        // "12"
[1] + '2';      // "12"
[1, 2] + 3;     // "1,23"
[] + 5;         // "5"
[] + true;      // "true"
42 + {};        // "42[object Object]"
```

### Relational Operators

The relational operators, `<`, `>`, `<=`, and `>=` are defined for numbers (numeric comparison) and strings (lexicographic order).

```
> 1 < 2
true
> 'b' > 'a'
true
```

There are no strict versions of these operators. When both operands are strings, JavaScript compares them lexicographically. Otherwise, JavaScript converts both operands to numbers before comparing them.

```
11 > '9';       // true -- '9' is coerced to 9
'11' > 9;       // true -- '11' is coerced to 11
123 > 'a';      // false -- 'a' is coerced to NaN; any comparison with NaN is false
123 <= 'a';     // also false
true > null;    // true -- becomes 1 > 0
true > false;   // true -- also becomes 1 > 0
null <= false;  // true -- becomes 0 <= 0
undefined >= 1; // false -- becomes NaN >= 1
```

```
> null == 0 // false
Why?
```



### Best Practices

Understanding JavaScript's implicit type coercions is important when you're debugging code. When you write your programs, though, it's best to:

- **Always use explicit type coercions** (covered in the previous assignment)
- **Always use strict equality and inequality operators** (=== and !==).

There are two exceptions to the advice to always use explicit coercion:

- Don't use `String()` or `toString()` inside `${...}` expressions in template literals.
- Feel free to use the unary `+` operator to convert strings to numbers.