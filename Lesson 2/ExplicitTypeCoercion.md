**Type Coercion** is the conversion of one type of value into another. 

<u>2 kinds in Javascript</u>

1. **Explicit type coercion**: programmer intentionally uses one of the many built-in functions and operators to coerce one type of value to another. 
   - `Number`
2. **implicit type coercion**: happens when you perform an operation involving values of two different types and JavaScript coerces one of them to match the other. 

<u>Coercing values to numbers</u>

`Number` function takes a string, converts it to a number if it can, then returns taht number. If it can't convert the string to a number, it returns the value `NaN`. 

```
> Number("cat")
NaN
```

**NaN**: is a type of number but it isn't a meaningful number. It represents a number that cannot be represented. 

**Number.isNaN()**:  method determines whether the passed value is [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) and its type is [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number). It is a more robust version of the original, global [`isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN).

- Due to both equality operators, [`==`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#equality) and [`===`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#identity), evaluating to `false` when checking if [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) *is* [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN), the function `Number.isNaN()` has become necessary. This situation is unlike all other possible value comparisons in JavaScript.
- In comparison to the global [`isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) function, `Number.isNaN()` doesn't suffer the problem of forcefully converting the parameter to a number. 
  - This means it is now safe to pass values that would normally convert to [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN), but aren't actually the same value as NaN
  -  This also means that only values of the type number, that are also [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN), return `true`.
    - so you can pass in "" and it won't return true because its not a type number. 

```node
# converting empty string 
> Number('')
0
```

```
#converting objects, arrays, booleans, undefined or null to numbers?
> Number({})
NaN
> Number([])
0
> Number([4])
4
> Number([undefined])
0
> Number([1, 2, 3])
NaN
> Number(undefined)
NaN
> Number(null)
0
```

- Many inconsistencies in JavaScript. 
- Try examples in node rather than memorizing what each coercion does. 

```
> Number(true)
1
> Number(false)
0
```

**`parseInt`** and **`parseFloat`** 

- both coerce strings to numbers, operate only on *strings* and not other types. 

- `parseInt` converts strings to integers

  -  converts strings to numbers even when the string contains non-numeric characters.

  - as long as string beings with a digit - optionally preceded by  a `+` or `-` sign \

  - ```
    > parseInt('12oz')
    12
    > parseInt('+12oz')
    12
    > Number('12oz')
    NaN
    ```

  - `parseInt` also differs from `Number` in that it accepts a second argument called the **radix**: It specifies the base of the number contained in the string. 	

    - For example, `10101` in the binary numbering system (base-2) represents the number 21 in decimal (base-10). Thus:

    - ```
      > parseInt('10101', 2)
      21
      ```

    - `parseInt` supports radices from 2 to 36. 

- `parseFloat` coerces strings to floating point numbers. 

  - ```
    > parseFloat('12 grams')
    12
    > parseFloat('12.2 grams')
    12.2
    ```

  - Like `parseInt`, `parseFloat` parses the numeric part of the string, and stops parsing once it finds a character that can't be part of a number.

  - Unlike `parseInt`, `parseFloat` does not accept a radix argument.

#### Coercing to Numbers using the + operator

- Most operators in JavaScript work with two values: we call such operators **binary operators**. 

- JavaScript also supplies a **ternary operator** that works with 3 values. 

- It also has operators that work with a single value, such as the `!` logical operator, which are called **unary** operators.

- Some operators, such as the `+` and `-` operators do double duty: they can apply to either two values or one. Thus, `5 - 3` is a binary `-` operator that subtracts `3` from `5`, but the expression `-4` uses a unary `-` operator to obtain the negative of the number `4`.

- The unary `+` operator attempts to coerce a value to a number. It works like the `Number` function, but is more succinct:

- ```
  > +""
  0
  > +'1'
  1
  > +'2.3'
  2.3
  > +[]
  0
  > +'abc'
  NaN
  ```

The unary `+` operator is concise and easy to use, but at first, it may lack clarity. Feel free to use it if you want, but if you find the notation confusing, use the `Number` function instead. `Number` makes your intent clear and leaves no room for the ambiguity that can sometimes arise with unary operators.

### Coercing values to strings

- you can use the **`toString`** method on all JavaScript data types except `null` and `undefined`. It returns a string representation of the value. Let's see an example:

  ```
  > let number = 42
  > number.toString()
  '42'
  ```

- Since JavaScript doesn't let you call a method directly on a number literal, we first assign `42` to a variable before we call `toString()`. The reason for this is that JavaScript interprets the `.` as part of a floating point number:

  ```
  > 42.toString()
  SyntaxError: Invalid or unexpected token
  ```

- Another way to avoid this syntax error is to wrap the number in parentheses:

  ```
  > (42).toString()
  '42'
  ```

- You can also use two `.` characters instead, though it looks a bit strange:

  ```
  > 42..toString()
  '42'
  ```

- When used on booleans, `toString` returns either the string `'true'` or `'false'`, depending on the value:

  ```
  > true.toString()
  'true'
  > false.toString()
  'false'
  ```

- `Array.prototype.toString` converts every element of an array to a string, then concatenates them all with a `,` between each string:

  ```
  > [1, 2, 3].toString()
  '1,2,3'
  ```

- The default implementation of `toString` on objects is much less useful than the one on arrays:

  ```
  > let obj = {a: 'foo', b: 'bar'}
  > obj.toString()
  '[object Object]'
  ```

  By default, `Object.prototype.toString` returns the string `'[object Object]'`. However, you can override that behavior with custom objects. We'll discuss that in another course.



One limitation of `toString` is that you can't use it on `undefined` and `null` since it's illegal to call a method on either of these types.

#### The `String` function

- Another way to coerce values to strings is by using the `String` function. It works in much the same way as `toString`.
- One advantage that `String` has over `toString` is that it works with `null` and `undefined`.

```
> String(42)
'42'
> String([1, 2, 3])
'1,2,3'
> String({ a: 'foo', b: 'bar' })
'[object Object]'
```

```node.js
> String(null)
'null'
> String(undefined)
'undefined'
```

#### Template Literals

Inside template literals, JavaScript implicitly coerces interpolation expressions like `${something}` to string values. Don't write `${something.toString()}` or `${String(something)}`.

### Conclusion

Type coercion is a very common operation in programs and JavaScript provides numerous ways to convert values of one type to another. Make sure you understand the difference between the various methods of coercing values and the relative advantages and disadvantages of each method. JavaScript sometimes tries to be helpful and coerces values for us even when we may not want the conversion. This behavior is ill-advised and something that we'll look at in the next assignment.