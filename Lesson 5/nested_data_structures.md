# Nested Data Structures

It's not uncommon for collections to contain other collections. Let's explore a few examples which illustrate how to work with nested data structures.

## Referencing collection elements

```js
let arr = [[1, 3], [2]];
```

In this example, we have one array that contains two separate arrays: `[1, 3]` and `[2]`. Each inner array still has its own index even though they're both inside another array.



![nested arrays](https://d1b1wr57ag5rdp.cloudfront.net/images/collections/nested-array-diagram.png)



Each inner array can be accessed in the same way that you'd access any other array element; the trick is to remember that it's another collection you're referencing. Let's retrieve the first inner array like we typically reference array elements.

```js
arr[0]; // => [ 1, 3 ]
```



![retrieve value at index 0](https://d1b1wr57ag5rdp.cloudfront.net/images/collections/nested-inner-array-diagram.png)



With access to the first array, let's dig into the inner array and retrieve its second element -- the integer `3`. To access that element, we need to reference it, chaining our element references.

```js
arr[0][1]; // => 3
```



![Retrieve Value at index 0, 1](https://d1b1wr57ag5rdp.cloudfront.net/images/collections/nested-inner-array-element-diagram.png)



## Updating collection elements

Recall that JavaScript gives us a very convenient way to update array elements.

```js
let arr = [[1, 3], [2]];
arr[1] = 'hi there';
arr; // => [ [1, 3 ], 'hi there' ]
```

The `arr[1] = 'hi there'` is a destructive action that permanently changed the second element in the `arr` array; it replaced the entire `[2]` inner array with the string `'hi there'`.

Likewise, we can modify a value in a nested array in a similar way.

```js
let arr = [[1, 3], [2]];
arr[0][1] = 5;
```

There's a lot going on in that second line, so let's unpack it. It looks like a chained reference, similar to what we saw before. However, it's not. The first part, `arr[0]`, is an element reference that returns the inner array `[1, 3]`. The second part, `[1] = 5`, is the same as `[1, 3][1] = 5`, which is an array element assignment, not a reference. The code `[1, 3][1] = 5` says "change the second element in the array `[1, 3]` to `5`". As we saw above, this is a destructive action, so the change is permanent. Thus, it's a chained action, but the first part of that chain is element reference, while the second part of that chain is element assignment.

The first inner array is now permanently changed: the first inner array's second element is changed to 5 from the previous value of 3:

```js
arr; // => [ [ 1, 5 ], [ 2 ] ]
```

Before moving on from, let's learn how to insert an additional element into an inner array. The idea is similar to the above example: we have to chain an element reference with appending an element.

```js
let arr = [[1], [2]];

arr[0].push(3);
arr; // => [ [ 1, 3 ], [ 2 ] ]
```

The code `arr[0].push(3)` is again a two-part chain: the first part, `arr[0]` is element reference and returns `[1]`; and the second part can be thought of as `[1].push(3)`, which destructively appends 3 into the inner array.

We can also add another array instead of an integer:

```js
let arr = [[1], [2]];

arr[0].push([3]);
arr; // => [ [ 1, [ 3 ] ], [ 2 ] ]
```

That leaves us with a three-layer nested data structure.

## Other nested structures

Arrays aren't the only data structure that can be nested. Objects can be nested within an array as well. Let's study a simple example of that.

```js
[{ a: 'ant' }, { b: 'bear' }]
```



![objects nested in arrays](https://d1b1wr57ag5rdp.cloudfront.net/images/collections/array-of-hashes.png)



Let's suppose we want to insert a new key/value pair into the first inner object. Once again, there has to be a two-step process: first, reference the first element in the array; next, update the object.

```js
let arr = [{ a: 'ant' }, { b: 'bear' }];

arr[0]['c'] = 'cat';
arr[0].d = 'dog';
arr; // => [{ a: 'ant', c: 'cat', d: 'dog' }, { b: 'bear' }]
```

Hopefully, you can recognize the pattern by now. First we use `arr[0]` to retrieve the first inner object, so we get `{ a: 'ant' }`. Next, we use the normal object key/value creation syntax to create a new key/value pair: `{ a: 'ant' }['c'] = 'cat'` or `{ a: 'ant' }.d = 'dog'`. The change is destructive, so the array, `arr`, reflects the change when we inspect it.

As we know, arrays can contain any JavaScript value, regardless of type. Arrays can hold multiple different objects at the same time, including nested data structures. Let's take a look at an example and retrieve a few elements from it.

```js
let arr = [['a', ['b']], { b: 'bear', c: 'cat' }, 'cab'];

arr[0];       // => [ 'a', [ 'b' ] ]
arr[0][1][0]; // => 'b'
arr[1];       // => { b: 'bear', c: 'cat' }
arr[1]['b'];  // => 'bear'
arr[1].b[1];  // => 'e'
arr[2][1];    // => 'a'
```

## Variable reference for nested collections

A common confusing aspect when working with nested collections occurs when variables reference inner collections. Let's study some code.

```js
let a = [1, 3];
let b = [2];
let arr = [a, b];
arr // => [ [ 1, 3 ], [ 2 ] ]
```

The variables `a` and `b` are pointing to Array objects. When we create an array that uses these variables to specify elements, the result looks as if we've actually added the arrays to the array. However, we've only added references to those arrays. To see how this affects things, let's consider some examples.

First, what happens if we modify `a` after placing it in `arr`?

```js
let a = [1, 3];
let b = [2];
let arr = [a, b];

arr; // => [ [ 1, 3 ], [ 2 ] ]

a[1] = 5;
arr; // => [ [ 1, 5 ], [ 2 ] ]
```

Did that do what you expected? Is it intuitive that `arr` was also changed? The value of `arr` changed because `a` still points to the same Array object that's in `arr`. When we modified it by replacing `3` with `5`, we were modifying the Array object.

Take a moment to study the following diagram to establish a mental model of variables pointing to objects.



![Variables as Pointers 1](https://d1b1wr57ag5rdp.cloudfront.net/images/collections/variables-as-pointers-1.png)



What if we modify the first array in `arr`? Is it different than modifying `a` directly?

```js
arr[0][1] = 8;
arr; // => [ [ 1, 8 ], [ 2 ] ]
a;   // => [ 1, 8 ]
```

It produces the same result as modifying `a` directly. Why is that? In both cases, we're modifying the object that `a` and `arr[0]` point to; we now have two ways to reference the same object. In the first example, the object was modified through `a`. In the second example, the object was modified through `arr[0]`.

As can be seen in the diagram below, `a` and `arr[0]` are, in fact, two different ways to reference the same object. The assignment `arr[0][1] = 8` is equivalent to `a[1] = 8`.



![Variables as Pointers 2](https://d1b1wr57ag5rdp.cloudfront.net/images/collections/variables-as-pointers-2.png)



It's essential to understand variables as pointers, as this is a fundamental concept. If you need to gain a clearer understanding, now would be a good time to go back to the Introduction to JavaScript book and re-read the [Variables as Pointers](https://launchschool.com/books/javascript/read/more_stuff#variablesaspointers) section.

## Shallow Copy

Sometimes, you may find that you need to copy an entire collection, perhaps to save the original collection before performing some modifications. There are different ways to copy different kinds of collections. In this section, we'll discuss how to *shallow copy* objects and arrays.

### Shallow Copying Arrays

One way to copy an array is to use the `Array.prototype.slice` method without arguments:

```js
let arr = ['a', 'b', 'c'];
let copyOfArr = arr.slice();
copyOfArr; // => [ 'a', 'b', 'c' ];
```

A more modern way is to use the ES6 **spread syntax**, which uses `...` to expand an array to a list of values:

```js
let arr = ['a', 'b', 'c'];
let copyOfArr = [...arr];
copyOfArr; // => [ 'a', 'b', 'c' ];
```

Let's verify that the new arrays are in fact copies of the original arrays and not the same arrays.

```js
let arr = ['a', 'b', 'c'];
let copyOfArr = [...arr];

copyOfArr.push('d');

arr;       // => [ 'a', 'b', 'c' ]
copyOfArr; // => [ 'a', 'b', 'c', 'd' ]
```

You can do the same with the copy created by using `slice`. Both techniques create a shallow copy of an array: only the top level array is copied. When the array contains other objects, like a nested array, then those objects are shared, not copied. That has major ramifications for nested collections:

```js
let arr = [['a'], ['b'], ['c']];
let copyOfArr = arr.slice();

copyOfArr[1].push('d');

arr;       // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]
copyOfArr; // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]
```

You may have noticed that both `arr` and `copyOfArr` were changed. That might not fit with how you assumed that an array copy should behave.

It's important to understand that this behavior occurs because the destructive method `push` was called on a shared array object, `['b']`, rather than a separate array. When you mutate a shared object in an array or other collection, it is the shared object you are affecting rather than the collection.

Let's try that with plain objects nested within an array:

```js
let arr = [{ a: 'foo' }, { b: 'bar' }, { c: 'baz' }];
let copyOfArr = [...arr];

copyOfArr[1].d = 'qux';

arr;       // => [ { a: 'foo' }, { b: 'bar', d: 'qux' }, { c: 'baz' } ]
copyOfArr; // => [ { a: 'foo' }, { b: 'bar', d: 'qux' }, { c: 'baz' } ]
```

The critical thing to be aware of is what level you're working at, especially when working with nested collections and using variables as pointers. Are you working at the level of an outer array or object or at the level of an object within that?

### Shallow Copying Objects

We've previously seen that the `Object.assign` method can be used to copy properties of one or more objects into another:

> The **`Object.assign()`** method copies all [enumerable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) [own properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) from one or more *source objects* to a *target object*.

```js
let obj1 = { a: 'foo' };
let obj2 = { b: 'bar' };

Object.assign(obj1, obj2); // => { a: 'foo', b: 'bar' }
obj1;                      // => { a: 'foo', b: 'bar' }
```

As you can see, `Object.assign` copies over the properties from `obj2` into `obj1` and returns `obj1`. You might be able to see that we can use `Object.assign` to create a copy of an object by providing an empty object as the first argument:

```js
let obj = { a: 'foo', b: 'bar' };
let copyOfObj = Object.assign({}, obj);

copyOfObj; // => { a: 'foo', b: 'bar' }
```

To verify that it's indeed a copy, we can modify the copy and check whether the original is affected by the modification.

```js
copyOfObj['c'] = 'baz';
copyOfObj; // => { a: 'foo', b: 'bar', c: 'baz' }
obj;       // => { a: 'foo', b: 'bar' }
```

Note that `Object.assign` only creates a shallow copy of the object. That is, changes to nested objects within the copy will be reflected in the original:

```js
let obj = { a: { b: 'foo' }, c: ['bar'] };
let copyOfObj = Object.assign({}, obj);

obj['a']['d'] = 'baz';
copyOfObj; // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }
obj;       // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }
```

## Deep Copy

JavaScript doesn't have an explicit method or function for deep copying objects, but there is an indirect way to do it. However, it only works with nested arrays and plain objects. Objects that have methods and complex objects like dates or custom objects cannot be deep-cloned with this technique. Most use cases of deep copying objects involve only plain objects and arrays, so this technique is useful to learn:

```js
let arr = [{ b: 'foo' }, ['bar']];
let serializedArr = JSON.stringify(arr);
let deepCopiedArr = JSON.parse(serializedArr);
```

The `JSON.stringify` method **serializes** any object, including arrays, that only have primitives, arrays, and plain objects as elements. Serializing involves converting an object to a string form that can be subsequently converted back into an identical object. The `JSON.parse` method performs that conversion from a string back to an object.

To verify that this is indeed a deep copy, we'll modify the second element of the `deepCopiedArr` array, which itself is an array. If the modification doesn't show in the original `arr`, we can conclude that it's a deep copy:

```js
deepCopiedArr[1].push('baz');
deepCopiedArr; // => [ { b: 'foo' }, [ 'bar', 'baz' ] ]
arr;           // => [ { b: 'foo' }, [ 'bar' ] ]
```

Sure enough, modifying the nested array within `deepCopiedArr` doesn't modify the nested array inside `arr`.

## Freezing Objects

Another example of an operation not affecting objects nested within objects is the operation of freezing objects. What is freezing? In JavaScript, objects can be frozen using the `Object.freeze` method. The method prevents objects (including arrays) from being modified.

```js
let obj = Object.freeze({ a: 'foo' });
let arr = Object.freeze(['a', 'b', 'c']);

obj['b'] = 'bar';
obj; // => { a: 'foo' }

obj.c = 'ccc';
obj; // => { a: 'foo' }

arr[3] = 'x';
arr; // => [ 'a', 'b', 'c' ]

arr.push('d'); // => TypeError: Cannot add property 3, object is not extensible
```

=In each case, we can't modify the object once it's frozen. Interestingly, trying to use a method to mutate a frozen object raises an exception. However, if we try to use assignment, the assignment fails silently. Another one of those JavaScript quirks!

Only objects can be frozen with `Object.freeze`. Primitive values are already frozen.

We can check whether an object is frozen with the `Object.isFrozen` method:

```js
Object.isFrozen('abc'); // => true
```

What, exactly, does `Object.freeze` freeze? It only freezes the object that is passed to it. If the object passed to it contains other objects, those objects won't be frozen. For example, if we have a nested array, the nested objects can still be modified after passing it to `Object.freeze`.

```js
let arr = Object.freeze([[1], [2], [3]]);
arr[2].push(4);
arr; // =>  [ [ 1 ], [ 2 ], [ 3, 4 ] ]
```

This behavior also applies to objects within arrays, objects within objects and arrays within objects.

In JavaScript, there's no built-in function or an easy workaround to deep-freeze objects.

## Summary

By taking the time to learn how nested data structures work, and what it means to copy an object, we're further able to clarify our understanding of collections and how to work with them. The deeper our knowledge is of a concept, the easier it is to implement solutions using that concept.

In this assignment, we looked at examples that illustrated how nested data structures work and the syntax needed to manipulate them as needed. We also looked at how to copy an object and what freezing means. At this point, you should have a clear understanding of how to work with collections. You should be comfortable with complicated data structures and how to manipulate them to fit your needs. In the next assignment, we'll look at combining the concepts we've learned so far in this lesson.