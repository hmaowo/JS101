# String Methods

- As mentioned in the previous assignment, JavaScript strings aren't really collections since you can't store generic data in them. 
- You can, perhaps, think of them as collections of characters; they have some properties that one would associate with collections.
  - For example, you can access individual characters or multiple characters of the string and can loop through all the characters by using the `length` property in conjunction with the `for` and `while` loops. That's the reason behind covering strings in a lesson about JavaScript collections.

Before we start diving into the most common string methods you're expected to know about, be sure to refresh your memory on the various ways of writing string literals and when to use each one, from [the book](https://launchschool.com/books/javascript/read/basics#datatypes).

Time to learn about some string methods.

### `String.prototype.concat`

We've already seen one way of joining two strings together, the `+` operator. Another way to concatenate two strings together is by using the `concat` method. It works exactly the way the `+` operator works with two strings.

```node
> 'Hello '.concat('World!')
'Hello World!'
```

Since JavaScript strings are primitive values, any operation performed on them, including the `concat` method, results in a new string. We won't reiterate this point in the rest of the assignment. None of the methods that operate on strings mutate the string since JavaScript strings are immutable.

Open a console session and verify that that's the case with the `concat` method.

```
> let str = 'Hello'
undefined
> str.concat(' World!')
'Hello World!'
> str
'Hello'
```

Note that the original string assigned to `str`, remains unchanged after we call the `concat` method on it. If you want to change the value that `str` refers to, reassign it the return value of the `concat` method call.

```node
> str = str.concat(' there!')
'Hello there!'
> str
'Hello there!'
```

Concat can take more than one string as arguments. It combines all those strings into one:

```node
> let str1 = 'Hello'
> let str2 = 'World!'

> str1.concat(' ', str2)
'Hello World!'
```

### `String.prototype.includes`

The `includes` method takes a string as the argument and returns a boolean signifying whether that string exists within the string that `includes` was called on.

```node
> 'One potato, two potato, three potato, four'.includes('three')
true
> 'One potato, two potato, three potato, four'.includes('tater')
false
> 'abc'.includes('a')
true
```

`includes` also takes an optional second argument that specifies which index in the string to start looking for the substring.

```node
> 'abcdefg'.includes('b', 2)
false
```

Even though the string `'abcdefg'` includes `'b'`, the method call returns `false` since we're telling it to start its search from index `2`.

### `String.prototype.split`

We've already seen the `split` method in previous assignments, but we'll cover it again here because `split` is one of the more important string methods. `String.prototype.split`, as the name signifies, separates a given string into multiple strings and returns them in the form of an array. How the string gets split depends on the argument you provide to `split`. The basic case is when you don't provide any argument:

```node
> 'abcdef'.split()
['abcdef']
```

In this case, the whole string is simply returned as the first element on an array. If you provide an empty string, each character of the string will be split into individual characters:

```node
> 'abcdef'.split('')
['a', 'b', 'c', 'd', 'e', 'f']
```

Any other string argument you provide to `split` will be used as the separator by which to split the string:

```node
> 'One potato, two potato, three potato, four'.split(', ')
[ 'One potato', 'two potato', 'three potato', 'four' ]
```

Note that we provided the `,` character and space as the separator. Open the node console and see how the string gets split if we provide `','` as the argument.

### `String.prototype.trim`

The `trim` method removes whitespace from both ends of the string it's called on. The `trim` method is often useful when getting input from users, which can often contain unnecessary whitespace at either end.

```node
> '  abcdef   '.trim()
'abcdef'
```

`trim` removes any number of space characters as well as whitespace characters like `\n` and `\t`.

```node
> '\nabcdef\t'.trim()
'abcdef'
```

There are a couple of variations on the `trim` method that are also very useful. The `trimStart` method removes whitespace from the beginning of the string while `trimEnd` does so at the end of the string.

```node
> '  abcdef  '.trimStart()
'abcdef  '
> '  abcdef  '.trimEnd()
'  abcdef'
```

### `toUpperCase` and `toLowerCase`

You've already seen both of these methods and the names are pretty self-explanatory. `toUpperCase` and `toLowerCase` convert the strings to uppercase or lowercase respectively:

```node
> 'pete'.toUpperCase()
'PETE'
> 'PETE'.toLowerCase()
'pete'
```

Sometimes, you want to convert only the first character of a string to its uppercase equivalent. You can do that by combining `toUpperCase` with `slice` and any of the string concatenation methods:

```js
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

capitalize('pete'); // => 'Pete'
```

### `String.prototype.charAt`

The `charAt` method is nearly identical to using brackets on a string. It takes an index as an argument and returns the character at that index in the given string:

```node
> let sentence = "It's a walk in the park."
> sentence.charAt(5)
'a'
```

> We see that the character `'a'` is at index 5 in the string `"It's a walk in the park."`
>
> Note that when we create the string literal, `"It's a walk in the park"`, we're using double quotes (`""`) instead of the single quotes that we've normally been using. The reason is that our string itself contains a single quote. Using single quotes to wrap a string that contains a single quote will confuse the JavaScript engine; instead of being a part of our string, it'll be interpreted as syntax. You can use a similar technique with strings that contain double quotes:
>
> ```node
> > let sentence = 'He said, "I will come back!"'
> ```
>
> You can of course always use the escape character (`\`) to let JavaScript know that the character immediately after the `\` should not be interpreted as part of the syntax:
>
> ```node
> > let sentence = 'It\'s a walk in the park'
> ```

The chief difference between `charAt` and `[]` occurs when using indices for characters that don't exist: `charAt` returns an empty string (`''`), while `[]` returns undefined:

```node
> 'abc'[5]
undefined
> 'abc'.charAt(5)
''
> 'abc'[-2]
undefined
> 'abc'.charAt(-2)
''
```

### `String.prototype.charCodeAt`

The method `charCodeAt` is similar to `charAt`, but instead of returning the character at the given index, it returns the **Unicode code point** or **character code** of the character at that index. A Unicode code point is the number that represents a given character at the machine level.

```node
> 'abcdef'.charCodeAt(1)
98
```

Index `1` contains the character `'b'` and the code point for `'b'` is 98.

If you don't provide an index, `charCodeAt` assumes the index `0`.

```node
> 'abcdef'.charCodeAt()
97 // the character code for 'a'
```

The `String.fromCharCode` method does the opposite of `String.prototype.charCodeAt`. It takes a character code (Unicode code point) and returns the character represented by that character code.

```node
> String.fromCharCode(97)
'a'
```

Note that `fromCharCode` is not a prototype method. It's instead what we call a **static method** or a function. 

- We can't call `fromCharCode` directly on a string; instead, it must be called on the constructor `String`.
- It's a common pattern in different languages to write methods that don't pertain to a specific value of a type directly on the class/constructor for that type.
-  In this case, `fromCharCode` isn't an operation you'd perform on a string value. That is, something like the following doesn't make sense:

```node
> 'abcd'.fromCharCode(97)
=> TypeError: "abcd".fromCharCode is not a function
```

The operator `fromCharCode` isn't doing anything with the string `'abcd'`. It's simply a function that, given a character code, returns a string that contains the character for that character code. That's why it makes sense to call `fromCharCode` directly on the `String` constructor.

### Other String Methods

The following are a couple of other string methods of note. Read the MDN documentation to see what each method does:

- [String.prototype.endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
- [String.prototype.startsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
- [String.prototype.repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

### Summary

Strings are an important data-type in JavaScript. Most programs in modern JavaScript involve working with strings in one form or another. Get familiar with the methods that operate on strings; doing so will serve you well as you learn more about JavaScript.