# Pass by Reference vs Pass by Value

**pass-by-reference** and **pass-by-value** describe the two main strategies of what happens to *function arguments.* In the end, it doesn't matter what you call it, as long as you understand how to invoke functions with the behavior you expect.

#### What does **Pass - by - Value** mean?

- The concept of "pass-by-value" traditionally means that when you use a variable to pass an argument to a function, the function can't do anything that sets the original variable to a different value. 

- No matter what happens in the function, the variable will still contain the same value that was passed to the function.

That can lead you to believe that JavaScript is pass-by-value since re-assigning a parameter variable within a function doesn't affect the variable outside the function. For example:

```js
function changeName(name) {
  name = "bob"; // does this reassignment change the variable outside the function?
}

function anotherFunction() {
  let name = "jim";
  changeName(name);
  console.log(name); // => logs 'jim'
}

anotherFunction();
```

Note that this code example has two different `name` variables. One is in the scope of the `changeName` function while the other is in `anotherFunction`'s scope. These two names are in separate scopes, and have no direct relationship with each other.

The question is: when we use `name` from `anotherFunction` to provide an argument to `changeName`, are we passing it by reference or by value? It looks like we may be passing it by value since re-assigning the variable does not affect the variable inside `anotherFunction`. Had the `name` variable in `anotherFunction` changed, we would say that JavaScript is pass-by-reference. Does that mean that JavaScript is pass-by-value?

### What does Pass-by-Reference mean?

From the previous example, it's natural to conclude that JavaScript is pass-by-value. However, it's not as simple as that. If JavaScript were purely pass-by-value, there wouldn't be any way for the function to change the original object. However, you can easily do that in JavaScript:

```js
function capitalize(names) {
  for (let index = 0; index < names.length; index++) {
    names[index] = names[index][0].toUpperCase() + names[index].slice(1);
  }
}

let names = ["chris", "kevin", "naveed"];
capitalize(names);
console.log(names); // => ['Chris', 'Kevin', 'Naveed']
// This program uses the function capitalize to reassign specific elements in the array, not reassign the array itself. 
```

That implies that JavaScript is pass-by-reference since the function affected the original object. However, as we saw with the re-assignment example, not all operations affect the original object. Let's make a small change to the above program:

```js
function capitalize(names) {
  return names.map(name => name[0].toUpperCase() + name.slice(1));
}

let names = ["chris", "kevin", "naveed"];
capitalize(names); // returns ['Chris', 'Kevin', 'Naveed']
console.log(names); // => ['chris', 'kevin', 'naveed']
// This program uses the function capitalize which contains array.map() to create a new array, then return that array. If you console.log(names), it logs the original names array, not the new array. 
```

If you can't see the difference, look carefully. It appears we're back in the pass-by-value world again, where functions don't affect the original object. What's going on?

### What JavaScript does

When you pass primitive values to functions, you can treat JavaScript like pass-by-value. No operation performed on a primitive value can permanently alter the value. In other words, when you pass a primitive value to a function, no matter what that function does with that value, you won't be able to any effect in the value of the variable that was passed to the function.

```js
function cap(name) {
  name.toUpperCase();
}

let myName = "naveed";
cap(myName);
console.log(myName); // => 'naveed'
// primitive values are immutable. names.toUpperCase() must be declared & assigned into a new variable. 
```

However, the matter is more complicated when using objects (arrays and plain objects for example). With objects, JavaScript exhibits a combination of behaviors from both pass-by-reference as well as pass-by-value. Some people call this *pass-by- value-of-the-reference* or *call-by-sharing*. Whatever you call it, the most important concept you should remember is:

**When an operation within the function mutates its argument, it affects the original object.**

The natural question is, then, which operations mutate the caller? Unfortunately, that's something that you have to discover through usage and reading the documentation.

Functions and methods that mutate their callers are called destructive functions or methods. `Array.prototype.push`, for example, is a destructive method:

```js
function addNames(arr, name) {
  arr.push(name);
}

let names = ["bob", "kim"];
addNames(names, "jim");
console.log(names); // => [ 'bob', 'kim', 'jim' ]
// array.push() is a destructive method and exhibits pass - by - reference. 
```

You can see that `addNames` permanently changed the original `names` array.

- Reassignment *inside a function* is not a destructive operation, as can be seen in this code:

```js
function addName(arr, name) {
  arr = arr.concat([name]);
}

let names = ["bob", "kim"];
addName(names, "jim");
console.log(names); // => [ 'bob', 'kim', ]
// reassignment itself is not destructive. 
```

Notice how the above code doesn't change the `names` array. However, if we make a very tiny change to, the result is dramatically different:

```js
function addNames(arr, name) {
  arr = arr.push(name);
}

let names = ["bob", "kim"];
addNames(names, "jim");
console.log(names); // => [ 'bob', 'kim', 'jim' ]
// reassignemnt + array.push() is destructive. 
```

Can you spot the change? We changed the method from `concat` to `push`. That implies that when we use `concat` to concatenate two arrays together, it returns a new array and doesn't mutate the original. However, when we use `push` to append a new value into an array, it does mutate the original array.

### Return Values

For most practical purposes, one can speak of values returned by functions as being pass-by-value or pass-by-reference much as we can with arguments. Consider these two code fragments:

```javascript
function foo(number) {
  return number;
}

let number = 1;
let newNumber = foo(number);
// pass-by-value
```

With the `foo` function, we're passing a primitive value (`1`) into the function. 

- As with all primitive values, the value is passed by value, so `foo` receives a copy of the original value
-  It then returns the value of the argument it received, which is yet another new value. 
- When all that code runs, both `number` and `newNumber` have a value of `1`, but the two variables are not linked in any way -- the values are different numbers that just happen to be equal.

For most practical purposes, one can speak of values returned by functions as being pass-by-value or pass-by-reference much as we can with arguments. Consider these two code fragments:

```js
function bar(array) {
  return array;
}

let array = [1, 2, 3];
let newArray = bar(array); 
console.log(array === newArray); // true
// pass-by-reference
```

In the `bar` function, we're passing an array (`[1, 2, 3]`) into the function. 

- As with other arrays and objects, `bar` receives a pointer (a reference) to the array. 
- It then returns another reference to the same array to the calling code. 
- When all is done, both `array` and `newArray` point to the same array in memory.

### Assignment

Simple assignments in JavaScript work a lot like pass-by-value and pass-by-reference:

```js
number = 1;
newNumber = number; // "pass by value"

arr = [1, 2, 3];
newArr = arr; // "" pass by reference"
			// if you change arr, NewArr also changes. 
```

- In the above code, `number` and `newNumber` have the same values, but those values are distinct -- if you increment one, the other is unaffected. Thus, it looks a lot like pass-by-value. 
- On the other hand, `arr` and `newArr` point to the exact same array. If you use `arr` to modify the array, the array referenced by `newArr` also changes. That looks like pass-by-reference. 

This similarity is a useful mental model. **<u>However,</u>** it's incorrect to speak of assignment in terms of pass-by-value or pass-by-reference. In JavaScript, those terms only apply when *calling and returning from functions*, not assignments. 

### Summary

- **pass-by-reference** and **pass-by-value** describe the two main strategies of what happens to *function arguments : calling and returning them*.
  - **pass by value**: original variable will always retain same value. 
    - aka passing a copy of the value. 
    - <u>*a copy of the actual parameter's value*</u> is made in memory: caller and calee have two independent variables with the same value. 
    - If callee modifies parameter value, the effect is not visible to the caller. 
  - **pass by reference:** function is able to change the original object 
    - aka passing the pointer, rather than actual value. So if original object is changed, any variables that reference (point) to the original object also changes along with it. 
    - (also called pass by address) means to pass the **pointer** / reference of an argument in the calling function to the corresponding formal parameter of the called function so that a <u>*copy of the address of the actual parameter*</u> is made in memory. 
    - pass the pointer (a reference) of an object to the callee function, which then returns another reference to the same array to the calling code. When all is done, both the argument and new object point to the same array in memory.
    - the caller and callee use same variable for the parameter. 
    - If callee modifies parameter variable, the effect is visible to the caller's variable. 
- Passing primitive values is always a pass - by - value.
  - no operation performed on primitive value can permanently alter the value. 
- Passing objects is more complicated & exhibits both which we call *pass-by- value-of-the-reference* or *call-by-sharing*. In general passing an object is pass - by - reference. 
  - rule<u>: when an operation within the function mutates its argument, it affects the original object.</u>
    - Knowing which operations mutate caller requires memorization & reading documentation. 
    - Functions and methods that mutate their callers are called **destructive functions** or methods. 
  - examples
    - reassigning a function argument is not a destructive function: the original array isn't changed
    - but array.push() is a destructive function because it mutates the argument 

