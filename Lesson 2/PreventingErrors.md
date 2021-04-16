# Preventing Errors

The best way to handle errors is to prevent them from happening by paying attention to where they can occur. For example, consider a naive implementation of a function that returns the first letter of a word in lowercase:

```javascript
function lowerInitial(word) {
  return word[0].toLowerCase();
}
```

This implementation works well with simple words:

```javascript
lowerInitial('Joe');    // "j"
lowerInitial('Karen');  // "k"
```

However, what happens if we pass it an empty String?

```javascript
lowerInitial('');       // TypeError: Cannot read property 'toLowerCase' of undefined
```

Errors typically occur where assumptions are made in code; here, we assume that the word always has a non-zero length (that is, it contains one or more characters). This code violates that assumption by passing an empty String to `lowerInitial`.

An error like this halts execution of the program entirely. It's easy to think of ways that we can receive an empty string in this function. For example, if the value comes from a form element on a web page, the user might not have entered any data. Alternatively, the data may come from a database that contains missing data.

## Guard Clause

One way to avoid this type of error is to use a *guard clause*. A guard clause is code that guarantees data meets certain preconditions before it gets used. In `lowerInitial`, we can check whether `word` contains any characters before we try to use it:



```javascript
function lowerInitial(word) {
  if (word.length === 0) {       // If word contains an empty String,
    return '-';                  // return a dash instead of proceeding.
  }

  return word[0].toLowerCase();  // word is guaranteed to have at least
}                                // 1 character, so word[0] never evaluates
                                 // as undefined.
```

## When To Use Guard Clauses

Guard clauses are best used when a function can't trust that its arguments are valid. Invalid arguments can have incorrect types, structures, values, or properties. Usually, though, your program should be able to trust itself to do the right thing; you should be able to trust that it always calls its methods with valid values. For example, if you can trust that your program always calls `lowerInitial` with a non-empty String, you don't need the guard clause.

## Detecting Edge Cases

Most error prevention work stems from examining the assumptions inherent in your code. Think about whether your program can violate your assumptions. What happens when they are? We call these situations *edge cases* because they often involve values at the extreme end of the range of possible values. In `lowerInitial`, the shortest possible String (`''`) is an edge case.

To identify the edge cases that can break your program, start by considering the code's inputs. For a function, these are usually the arguments. Each data type has its own set of values that can cause undesired behavior.

For example, consider an argument that should be numeric. Will the code still work if the argument is negative or zero? Suppose you're expecting a whole number and instead receive a value with a fractional component? These are common places where a valid Number object can violate expectations in your code and cause unintentional behavior and bugs.

In `lowerInitial`, we saw that empty Strings can be a problem if your function doesn't expect one. There are many other types of Strings that can be troublesome, such as those that start or end with spaces, contain only spaces, or contain special characters.

Finally, it is a good idea to think about how particular combinations of values can create unexpected conditions.

## Planning Your Code

While you can't account for every possible permutation of arguments, it does pay to plan ahead. One good way to do this is to write out the common use cases of a new function, and check how your function handles them. This is a great way to identify edge cases.

Let's say we are writing a function that inserts a new element to an Array in its proper alphabetically sorted position:

```javascript
let countries = ['Australia', 'Cuba', 'Senegal'];

alphaInsert(countries, 'Brazil');

console.log(countries.join(', '));     // Logs "Australia, Brazil, Cuba, Senegal"
```

Let's think about some use cases; we want to ensure that `alphaInsert` can handle:

```javascript
alphaInsert([], 'Brazil');             // Inserting in an empty Array
alphaInsert(['Brazil'], 'Australia');  // At the beginning of an Array
alphaInsert(['Brazil'], 'Cuba');       // At the end of an Array
alphaInsert(['Brazil'], 'Brazil');     // Duplicate entry
```

We have only four major cases here, but more complex functions can have many more cases. It may get to be a bit too much to handle. Instead, focus on the "happy path" -- the most basic use case(s). Then revisit your complete list of use cases, and verify that your implementation works well in each case. If a particular case fails, address it and then check the use cases again.

Note that our list of use cases ignores the problem of invalid data types passed as arguments (for instance, passing a Number when a function expects a String). You can check argument types when this is a real possibility, but doing so in every function is unneeded and difficult to maintain.