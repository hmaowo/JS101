**Spread syntax** (`...`) allows an iterable such as an array expression **or string** to be expanded in places where 

- zero or more arguments (for function calls) 
- or elements (for array literals) are expected
- or an object expression to be expanded in places where zero 
- or more key-value pairs (for object literals) are expected.

```js
let str = 'abcdefg';
undefined
[...str]
[ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
```

```js
let str = 'Four Score And Seven'
undefined
> [...str] // same as str.split('')
[
  'F', 'o', 'u', 'r', ' ', //empty space included 
  'S', 'c', 'o', 'r', 'e',
  ' ', 'A', 'n', 'd', ' ',
  'S', 'e', 'v', 'e', 'n'
```



`(...args)`

```js
function myFunction(x, y, z) { }
let args = [0, 1, 2]; //array literal
myFunction(...args); //function call
```

```js
function union(...args) {  //function argument
  consle.log(args);
}
union([1, 3, 5], [3, 6, 9]);

```

```js
console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]

function sequence(count, startNum) {
  return [...Array(count)].map((_, index) => (index + 1) * startNum);
}
```

```js
[...Array(5)] 
// creates a new Array with 5 elements of undefined. 
// [undefined,undefined,undefined,undefined, undefined]  
// instead of [< 5 empty items>]
```

```js
function triangle(a, b, c) {
  [a, b, c] = [...arguments].sort((a, b) => a - b);
} // reassigning a, b, c?
```

```js
function triangle(a, b, c) {
  [short, mid, long] = [...arguments].sort((a, b) => a - b);
// EsLint error: no undeclared variables
```

