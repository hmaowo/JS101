# Arrays: What is an Element?

We've previously mentioned that arrays are also objects. Thus, all of the indices of an array are also property names of the object (after first being translated to strings). However, not all properties of the array object are elements of the array. This fact has surprising consequences that lead to ambiguity in terms of what we mean by an empty array.

## Array Keys

Consider, for instance, the following code:

```js
let arr = [];
console.log(arr);              // []
console.log(arr.length);       // 0
console.log(Object.keys(arr))  // []
```

It's easy to see here that `arr` should be treated as an empty array. The array has no elements, as shown on line #2, and it has a length of `0` as shown on line #3. Furthermore, `Object.keys` returns no property keys for the array. (Note, however, that arrays have a `length` property; `Object.keys` does not include this property in the return value. Don't worry about why that is.)

Let's see what happens when the array contains elements:

```js
let arr = [2, 4, 6];
console.log(arr);              // [2, 4, 6]
console.log(arr.length);       // 3
console.log(Object.keys(arr))  // ['0', '1', '2']
```

Lines 2 and 3 display the values you likely expect: we see that the array has 3 elements with values `2`, `4`, and `6`, and the total length is `3`. Line 4 shows that the property keys are `'0'`, `'1'`, and `'2'`; these string values correspond to the indices of the array.

We can add **properties** to the object `arr` **THAT ARE NOT ELEMENTS** of the array. All we have to do is use a key that is not an non-negative integer; it doesn't even have to be a number:

```js
let arr = [2, 4, 6]
arr[-3] = 5;
arr['foo'] = 'a';
console.log(arr);              // [ 2, 4, 6, '-3': 5, foo: 'a' ]
console.log(arr.length);       // 3
console.log(Object.keys(arr))  // [ '0', '1', '2', '-3', 'foo' ]
arr.map(x => x + 1);           // [ 3, 5, 7 ]
```

Notice how it looks like we're adding two elements to the array, one with an "index" of `-3` and one with an index of `'foo'`. Both of these "elements" show up when we log `arr`, though the output looks a little strange. However, the length of the array is still `3`: the count does not include the new "elements" since neither key is an non-negative integer. If we use `Object.keys`, we see all 5 property keys, both the real element indices, plus the two non-element keys.

In the last line above, we can see that `map` ignores the non-element values. All built-in Array methods ignore properties that are not elements, so `map` does nothing with `arr[-3]` and `arr['foo']`.

This weird behavior leads to some ambiguity:

```js
let arr = [];
arr[-3] = 5;
arr['foo'] = 'a';

// Is arr empty?
console.log(arr.length);       // 0                Yes
console.log(Object.keys(arr))  // [ '-3', 'foo' ]  No
```

To determine whether `arr` is empty on lines 6 and 7, we first need to define what we mean by an empty array. If we're only interested in elements, then we can use `length` to determine whether the array is empty. However, if we need to include non-elements, then we need to look at the object keys to learn whether the array is empty. **There is no one right answer here.** That's a decision you have to make when writing the code.

## Sparse Arrays

Another consideration with arrays is that they are "sparse". The number of elements in an array isn't necessarily the same as its length: there can be gaps in the array. One way to create these gaps is by increasing the size of the `length` property without adding any values to the array:

```js
let arr = [2, 4, 6];
arr.length = 5;
console.log(arr);              // [2, 4, 6, <2 empty items> ] 
// remember you can use spread notation to "expand" this 
console.log(arr.length);       // 5
console.log(Object.keys(arr))  // ['0', '1', '2']
```

Notice that the array now contains 5 elements, as shown on lines #3 and #4. Curiously, though, two of the elements are shown as **empty items**. The empty items, `arr[3]` and `arr[4]`, have no value at all. In fact, those elements don't exist; you can see that on line #5 where `Object.keys` makes no mention of keys `'3'` and `'4'`.

If you try to access either value, JavaScript will tell you that it is `undefined`.

```js
console.log(arr[3]);           // undefined
```

However, that does not mean its value is `undefined`. The value is not set at all. Let's see what happens when we change one of these elements to an explicit `undefined` value:

```js
let arr = [2, 4, 6];
arr.length = 5;
arr[4] = undefined
console.log(arr);              // [2, 4, 6, <1 empty item>, undefined ]
console.log(arr.length);       // 5
console.log(Object.keys(arr))  // ['0', '1', '2', '4']
```

Do you see the difference? `arr[3]` is still an empty item, but `arr[4]` is `undefined`. `arr[4]` has a value; `arr[3]` does not. Note, also, that `Object.keys` includes the key of the explicitly `undefined` element (`'4'`) in the return value. Still, it does not include the key for the gap at `arr[3]`.

This behavior again leads to ambiguity about what arrays are empty and which are not:

```js
let arr = [];
arr.length = 3;

// Is arr empty?
console.log(arr.length);       // 3      No
console.log(Object.keys(arr))  // []     Yes
```

To determine whether `arr` is empty on lines 5 and 6, we again need to determine what we mean by an empty array. If we want to include the gaps, then we can use `length` to determine whether the array is empty. However, if we need to ignore the gaps, then we must look at the object keys to learn whether the array is empty, keeping in mind that some of the object keys may not be non-negative integers. **Again, there is no one right answer here.** You have to decide what empty means.