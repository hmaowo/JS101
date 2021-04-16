# Re-read: Objects vs Primitive Values

1. Every value in JavaScript is either a primitive or an object
2. Primitives are atomic values: indivisible. 
3. Objects are "compound" values made up of primitives or other objects
4. Primitive values are immutable. In other words, you can't add to, remove from or otherwise change a primitive value. Any operation performed on a primitive value returns a new primitive value.
5. Objects are mutable. That is, certain operations on objects can change the object in place. All variables that have a reference to that object will see that change.

### What Things Aren't Objects or Primitives?

Objects and primitive values are the data and functions that you use in your program. Anything that isn't data or a function is neither a primitive value nor an object. That includes:

- variables and other identifiers such as function names
- statements such as `if`, `return`, `try`, `while`, and `break`
- keywords such as `new`, `function`, `let`, `const`, and `class`
- comments
- anything else that is neither data nor a function

### Primitive Values

- : [string](https://developer.mozilla.org/en-US/docs/Glossary/String), [number](https://developer.mozilla.org/en-US/docs/Glossary/Number), [bigint](https://developer.mozilla.org/en-US/docs/Glossary/BigInt), [boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean), [undefined](https://developer.mozilla.org/en-US/docs/Glossary/undefined), [symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol), and [null](https://developer.mozilla.org/en-US/docs/Glossary/Null).