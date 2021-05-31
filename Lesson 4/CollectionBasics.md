# Collections Basics

Collections are made up of individual elements. To work with collections, we need to understand how they are structured and how to reference and assign the individual elements within them.

## Element Reference

### String Element Reference



![String index diagram](https://d1b1wr57ag5rdp.cloudfront.net/images/collections/string-index-diagram.png)



Strings use an integer-based index that represents each character in the string. The index starts counting at zero and increments by one for the remaining index values. You can reference a specific character using this index.

```js
let str = 'abcdefghi';
str[2]; // => 'c'
```

If you want to reference multiple characters within a string, you can use the `slice` method. The `slice` method takes two arguments. The first argument specifies the index at which to start the extraction and the second argument specifies the index where you want to end the extraction.

```js
str.slice(2, 5); // =>'cde'
```

Note that the character at index `5` wasn't included in the returned substring. The character at the ending index isn't part of the returned substring.

How would you reference `'grass'` from within this string? Try it out in the node REPL.

```node
> let str = 'The grass is green'
```

Solution 

```js
str.slice(4,9);
```

You can also omit the second argument to `String.prototype.slice`. In that case, all characters from the start index to the end are returned in the substring.

```js
let str = 'abcdefghi';
str.slice(2); // => 'cdefghi'
```

Calling the `slice` method without any arguments will return a copy of the original string:

```js
'abcdefghi'.slice(); // => 'abcdefghi'
```

What happens when you provide negative arguments to `slice`?

```js
'abcdefghi'.slice(-4, -2); // => 'fg'
```

When given negative numbers as the indices, `slice` treats them as `string length + index`. In the above, an index of `-4` is equivalent to `9 + (-4)` since the length of the string is 9 and `9 + (-4)` equals `5`. Likewise, `-2` is equivalent to `7`.

A method that is very similar to `slice`, but differs from it in some respects, is `String.prototype.substring`. It also takes a start index and an end index and returns a substring from the start index up to, but not including, the end index.

```js
let str = 'The grass is green';
str.substring(4, 9); // => 'grass'
```

`slice` and `substring` differ in the following ways:

1. When the start index is greater than the end index, `substring` swaps the two arguments while `slice` returns an empty string:

   ```js
   'abcdef'.substring(3, 1); // => 'bc'
   'abcdef'.slice(3, 1);     // => ''
   ```

2. When either argument is negative, `substring` treats them as `0`, while, as we saw above, `slice` treats them as `length + index`:

   ```js
   'abcdef'.substring(-2); // => 'abcdef'
   'abcdef'.slice(-2);     // => 'ef'
   ```

**We recommend using `String.prototype.slice`**. Its behavior is more natural and predictable when dealing with these edge cases.

You'll often see another method, `String.prototype.substr`, used in some old code. This method isn't strictly deprecated, but it is now defined as a **legacy function**. Eventual deprecation seems likely, which means it may be removed from future implementations of JavaScript. We don't recommend using it, but it's worth knowing about since you may come across it in the wild. See the documentation [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr).

### Array Element Reference

Arrays, like strings, are also ordered, zero-indexed collections.



![Array index diagram](https://d1b1wr57ag5rdp.cloudfront.net/images/collections/array-index-diagram.png)



Arrays are lists of elements that are ordered by index, where each element can be any value. Arrays use an integer-based index to maintain the order of its elements. A specific element can be referenced using its index.

Copy Code

```js
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
arr[2]; // => 'c'
```

What do you think would be returned here? Try it out in the console.

```node
> let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
> arr.slice(2, 5)[0]
```

Show Solution

```
'c'
```

It is important to note that `Array.prototype.slice` and `String.prototype.slice` are not the same method, even though they have the same name. They do share a lot of the same functionality, but they're separate implementations. One key distinction is that `String.prototype.slice` returns a new string whereas `Array.prototype.slice` returns a new array.

As with `String.prototype.slice`, you can also omit the second argument to `Array.prototype.slice`. The result is similar:

Copy Code

```js
arr.slice(2); // => [ 'c', 'd', 'e', 'f', 'g' ]
```

Calling `slice` without any arguments return a shallow copy of the original array:

```js
arr.slice(); // => [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
```

Note that we said that `slice` returns a copy of the array and not the original array. How would you verify that in the node console?

Show Solution

```js
> let arr = ['a', 'b', 'c'];
undefined
> let copy = arr.slice();
undefined
> arr.push('d');
4
> arr
[ 'a', 'b', 'c', 'd' ]
> copy
[ 'a', 'b', 'c' ]
 
```

***<u>Slice() is a shallow copy instead of a deep copy.</u>*** 

-  A deep copy means that all of the values of the new variable are copied and **disconnected from the original** variable. A shallow copy means that certain (sub-)values (array in array, or object in array, etc) are **still connected** to the original variable.
- **Deep copy** doesn't reflect changes made to the new/**copied** object in the original object. **Shallow Copy** stores the **copy** of the original object **and** points the references to the objects. 

This becomes important when the copied array contains objects and other arrays as elements. How would you verify that in the node console?

Show Solution

```javascript
> let a = [{a: 1}, {b: 2}, 3]
undefined
> let b = a.slice();
undefined
> b[0]['a'] = 5
5
> b
[ { a: 5 }, { b: 2 }, 3 ]
> a
[ { a: 5 }, { b: 2 }, 3 ] //shallow copy reflects changes made to nested objects
>> b.push(6)
4
> b
[ { a: 5 }, { b: 2 }, 3, 6 ]
> a
[ { a: 5 }, { b: 2 }, 3 ] // adding element has no effect on original array 
```

```js
> let nestedArr = [1, [2, 3], { foo: 4 } ]
> let nestedCopy = nestedArr.slice()

> nestedCopy.push(5)
4
> nestedCopy[1].push(6)
3
> nestedCopy[2].bar = 7;
7

> nestedArr
[ 1, [ 2, 3, 6 ], { foo: 4, bar: 7 } ] //shallow copy reflects changes made to the 																					nested objects
> nestedCopy
[ 1, [ 2, 3, 6 ], { foo: 4, bar: 7 }, 5 ]  // adding element doesn't affect nestedArr
```

Notice that we mutated both the nested array and the nested object using the `nestedCopy` variable, but those mutations also showed up in `nestedArr`. However, when we just added a single element to `nestedCopy`, it had no effect on `nestedArr`.

### Object Element Reference

Objects are another common collection data structure that, instead of using an integer-based index, uses key-value pairs, where the key is a string and the value can be any JavaScript value. That allows for a more expansive and descriptive collection of elements. Object keys are also called **properties**.



![object key-value diagram](https://d1b1wr57ag5rdp.cloudfront.net/images/collections/hash-key-value-diagram.png)



```js
let obj = { fruit: 'apple', vegetable: 'carrot' };
obj.fruit; // => 'apple'
obj.fruit[3]; // => 'l'
obj['vegetable']; // => 'carrot'
obj['vegetable'][0]; // => 'c'
```

Note that there are two ways of referencing an element in an object. The first one is called the **dot notation** of object property access and the second one is the **bracket notation**. In the above example, we use the dot notation to access the value of the `'fruit'` key and the bracket notation to access the value of the `'vegetable'` key. It is important to note that the `[0]` part of `obj['vegetable'][0]` and `[3]` in `obj.fruit[3]` in the above example is string element reference. The string `'carrot'` is returned by `object['vegetable']` and `[0]` is used to access the first letter of that value.

When initializing an object, the keys/property names must be unique. Try the following code out in the console.

```node
> let obj = { fruit: 'apple', vegetable: 'carrot', fruit: 'pear' }
```

What happens here?

```
> let obj = { fruit: 'apple', vegetable: 'carrot', fruit: 'pear' }
> obj
{ fruit: 'pear', vegetable: 'carrot' }
```

Our object ends up with only two key-value pairs. The first one is overwritten by the third as they have identical keys.

Values, however, can be duplicated:

```js
let obj = { apple: 'fruit', carrot: 'vegetable', pear: 'fruit' };
```

We can access just the keys or just the values from an object with the `Object.keys` and `Object.values` methods. These methods return an array:

```js
let capitals = { uk: 'London', france: 'Paris', germany: 'Berlin' };
Object.keys(capitals);      // => ['uk', 'france', 'germany']
Object.values(capitals);    // => ['London', 'Paris', 'Berlin']
Object.values(capitals)[0]; // => 'London'
```

In the final line of the example above, `[0]` is referencing the item at index 0 of the array `['London', 'Paris', 'Berlin']` since this is the return value of `Object.values(capitals)`.

### Element Reference Gotchas

There are a few things that can catch you off guard when referencing elements in a collection, so you need to be aware of these to avoid unintended behavior in your code.

#### Out of Bounds Indices

We know that strings and arrays are indexed collections and that we can reference individual elements within the collection via their index.

```js
let string = 'abcde';
let array = ['a', 'b', 'c', 'd', 'e'];

string[2]; // => 'c'
array[2];  // => 'c'
```

The indices of both of these collections run from 0 to 4. What if we try to reference an index greater than 4?

```js
string[5]; // => undefined
array[5];  // => undefined
```

Referencing an out-of-bounds index in this way returns `undefined`.

What happens if we try to reference an index less than `0`?

```js
string[-1]; // => undefined
array[-1];  // => undefined
```

Accessing an index less than `0` on an array or a string also returns `undefined` in JavaScript.

#### Invalid Object Keys

Using a key to access a property that doesn't exist on an object also returns `undefined`:

```js
let obj = {a: 'foo', b: 'bar'};
obj['c']; // => undefined
```

Sometimes, though, an object contains properties with `undefined` values on purpose. In that case, how would we differentiate between a non-existent property vs. a property that has `undefined` as its value? There are a number of ways to do that. The `Object.prototype.hasOwnProperty` method returns a boolean indicating whether the given string exists as a property in the object:

```js
let obj = { a: 'foo', b: 'bar', c: undefined};
obj.hasOwnProperty('c'); // => true
obj.hasOwnProperty('d'); // => false
```

Another way to differentiate a non-existent property from a property with `undefined` value is to use `Object.keys` along with the array `includes` method:

```js
Object.keys(obj).includes('c'); // => true
Object.keys(obj).includes('d'); // => false returns T/F instead of undefined 
```

#### Arrays are Objects!

It's important to remember that JavaScript arrays are objects. 

- The chief difference between an array and some other object is that it uses non-negative integers as its primary keys. 
- Another significant difference is that adding elements to the array increases the value of its `length` property, 
- and changing the value of the `length` property causes the number of elements to change.

Since arrays are objects, we can add additional properties to them:

```js
let arr = ['foo', 'bar', 'qux'];
arr['boo'] = 'hoo';
arr[-1] = 374;
arr;               // => [ 'foo', 'bar', 'qux', boo: 'hoo', '-1': 374 ]
arr.length;        // => 3 (not 5!)
arr.forEach(element => console.log(element)); // prints: foo, bar, qux
Object.keys(arr);  // => [ '0', '1', '2', 'boo', '-1' ]
```

>  "ok so if u add properties to an array it wont show up in array methods but object methods"

**It's important to note that the value of the `length` property does not change after we add non-element properties to the array.** Furthermore, those properties are ignored by array methods like `forEach`, `map`, and `filter`. (We'll talk about those methods in a later assignment.)

**However, when we use an `Object` method, such as `keys`, we get a list of all of the property names.** Curiously, the return value here shows the indices of the array elements as string keys, `'0'`, `'1'`, and `'2'`.

Note that `arr[-1] = 374` looks like we're creating an element at index position `-1`. In fact, the `'-1'` property is not really an element of the array, but is an ordinary property of the object. You can see this in the return value from line 4 where the property is shown as `'-1': 374`. By the same token, `arr['boo']` isn't an element of the array, but a property of the object.

Finally, you must be careful when you need to distinguish between arrays and other objects. You might, for instance, assume that the `typeof` operator would identify an array as an `'array'`. It doesn't. It returns `'object'` instead. If you really need to detect an array, you can use the `Array.isArray` method:

```js
let arr = ['foo', 'bar', 'qux'];
let obj = { a: 1, b: 2 };
typeof arr;            // => 'object'
typeof obj;            // => 'object'
Array.isArray(arr);    // => true
Array.isArray(obj);    // => false
```

## Conversion

The fact that strings and arrays share similarities makes it intuitive to convert from one to the other, which is quite common in JavaScript code. There are a few methods that facilitate this type of conversion including `String.prototype.split` and `Array.prototype.join.`

`String.prototype.split`, when called without any arguments, returns an array with the string as its only element:

```js
'this is a string'.split(); // => ['this is a string']
```

However, if you provide it with an empty string as the argument, it returns an array of all the characters in the string:

```js
'abcdef'.split(''); // => ['a', 'b', 'c', 'd', 'e', 'f']
'abcdef'.split('')[0]; // 'a'
```

Note that we use the `[]` operator on the return value of `split`. The `split` method returns an array so we can access elements from that array using the `[]` operator.

Any other string provided to `split` as the argument will be used to separate the string using the argument as the delimiter:

```js
'apple,orange,mango'.split(','); // => ['apple', 'orange', 'mango']
```

When called without any arguments, `Array.prototype.join` returns a string with the elements of the array joined together into a string, separated by commas.

```js
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
arr.join(); // => 'a,b,c,d,e,f'
```

How would you join the characters in the array into a string without delimiting each character with a comma? You may want to check the MDN docs to read up on `Array.prototype.join`.

Show Solution

```js
arr.join(''); // => abcdef
```

We can also convert objects to arrays. Apart from the `Object.keys` and `Object.values` methods, you can use `Object.entries` to convert an object to an array.

```js
let obj = { sky: 'blue', grass: 'green' };
Object.entries(obj); // => [ [ 'sky', 'blue' ], [ 'grass', 'green' ] ]
```

The array returned by `Object.entries` contains nested arrays, with each sub-array containing two values. The sub-arrays are equivalent to the key-value pairs from the initial object.

## Element Assignment

### Array Element Assignment

We can use the element assignment notation of arrays to change the value of a specific element within an array by referring to its index. Say, for example, that we wanted to increment the first element of an array of numbers by 1, we could do this in the following way.

Copy Code

```js
let numbers = [1, 2, 3, 4];
numbers[0] = numbers[0] + 1;  // => 2
numbers;                      // => [ 2, 2, 3, 4 ]
```

Note that this way of modifying an array is a destructive action; that is, the `numbers` array is mutated.

In the node REPL or a code file, use the same method to increase the value of the rest of the numbers in the array by 1. Also, try incrementing an element that doesn't exist, such as `numbers[4]`.

Show Solution

```js
numbers[1] = numbers[1] + 1;
numbers[2] = numbers[2] + 1;
numbers[3] = numbers[3] + 1;
numbers[4] = numbers[4] + 1;
numbers;    // [ 2, 3, 4, 5, NaN ]
```

### Object Key Assignment

Object element assignment is similar. The object key is used instead of assigning a value using an index.

Copy Code

```node
> let obj = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' }
> obj['apple'] = 'Fruit'
> obj.carrot = 'Vegetable'
> obj
{ apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Produce',
  broccoli: 'Produce' }
```

As you can see, we can use the dot notation as well as the bracket notation for object key assignment.

Note that, once again, this is a destructive action that permanently modifies `obj`.

In the node REPL or a code file, use the same method to set a value of either `'Fruit'` or `'Vegetable'` to the `pear` and `broccoli` properties.

Show Solution

```
> obj.pear = 'Fruit'
> obj.broccoli = 'Vegetable'
> obj
{ apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable' }
```

```
> obj['pear'] = 'Fruit'
> obj['broccoli'] = 'Vegetable'
> obj
{ apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable' }
```



### String Character Assignment

- Here is where the major difference between strings and the other two collection types begins to show. JavaScript strings are immutable and, hence, cannot be altered permanently. 
- You can try to use the array element assignment syntax with strings without getting any errors, but it does not affect the string:

```js
let str = 'bob';
str[0] = 'B'; // => 'B'
str; // => 'bob'
```

You can see that after the "reassignment," `str` has the same value as it had before. 

One question you might ask is why JavaScript lets you do the reassignment if it doesn't affect the original string. We'll talk about why that is in a later course. For now, remember that string element reassignment, ***even though it's syntactically permitted, doesn't affect the string. That behavior can lead to frustrating bugs, so beware!***

If that's the case, how can one make changes to a string? Well, just create a new string with the desired changes. For example, we can reassign the `str` value to a new string and reassign the variable to the new value:

```js
str = 'B' + str.slice(1);
str; // => 'Bob'
```

## Summary

We've talked about quite a few important topics in this assignment. More specifically, we covered the core ways to reference elements or assign values for particular elements in a collection using some of the various element reference and element assignment methods of String, Array, and Object.

These concepts are fundamental to working with collections, so it's critical to understand everything we talked about in this assignment before moving forward. Taking the time to have a clear understanding of these topics will make it much easier to handle topics that build upon these fundamentals in the future.