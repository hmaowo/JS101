#### Logical Operator

The Not (!) operator is a logical operator, represented in Java by (!) symbol. It's a unary operator that takes boolean value as its operand. The not operator works by inverting (or negating) the value of its

#### Unary Plus 

The unary plus operator (`+`) precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.

```js
const x = 1;
const y = -1;

console.log(+x);
// expected output: 1

console.log(+y);
// expected output: -1

console.log(+'');
// expected output: 0

console.log(+true);
// expected output: 1

console.log(+false);
// expected output: 0

console.log(+'hello');
// expected output: NaN
```

