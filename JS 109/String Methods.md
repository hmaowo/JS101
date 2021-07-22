#### String Methods

- `String.endsWith()`: returns Boolean (true  / false) on whether a string ends with characters of a specified string. 

  ```
  str.endsWith(searchString)
  str.endsWith(searchString, length) 
  ```

  ​     Parameters

  - `length` Optional

    If provided, it is used as the length of `str`. Defaults to `str.length`.

- `String.includes(searchString, position)`: case insensitive search to determine whether a string is found in the string `includes` was called on, returns Boolean. 

  - Optional parameter: `position`

  The position within the string at which to begin searching for `searchString`. (Defaults to `0`.)

- `String.split()`: separates a string into multiple strings and returns them in an array. 

  ```js
  split()
  split(separator)
  split(separator, limit)
  ```

- `String.indexOf()`: returns the index of the first occurrence of the specified value. Returns -1 if value is not found.

  ```
  indexOf(searchValue)
  indexOf(searchValue, fromIndex)
  ```

  - Optional parameter`fromIndex` 

    The integer representing the index at which to start the search. 

    If `fromIndex` is greater than the string's `length`, the returned value IS THE STRING's `length

- `String.charAt()`: returns the character at the index of the given string.  

  ```
  charAt(index)
  ```

- `String.charChodeAt`: instead of returning the character at a given index, it returns the Unicode code point at the index. 

  ```terminal
  > 'abcdef'.charCodeAt(1)
  98
  ```

- `String.slice` : extracts a section of a string and returns it as a new string. 

  ```
  slice(beginIndex)
  slice(beginIndex, endIndex)
  ```

  1. If `start > stop`, `slice()` will return the empty string. (`""`)
  2. If `start` is negative: sets char from end of string. 
  3. if `stop` is negative: sets stop to `string.length - Math.abs(stop)` (original value), except bounded at 0. Thus, 

- `String.substring` or `String.substr()`: returns the part of the String between start and end indexes. 

  ```javascript
  substring(indexStart)
  substring(indexStart, indexEnd) //index end is exclusive
  ```

  1. If `start > stop`, then `substring` will swap the 2 arguments.
  2. If either argument is negative or is `NaN`, it is treated like `0`. 

- `String.concat()`: concatenates the string arguments to the calling string and returns a new string. 

  ```
  concat(str1)
  concat(str1, str2)
  concat(str1, str2, ... , strN)
  ```

- `String.match()` : retrieves the result of matching a string against a regular expression. 

  ```
  match(regexp)
  ```

  Parameter is a regular expression object. 

- `String.padStart()`: pads the current string with another string until resulting string reaches given length. Padding is applied from start of the current string. 

  ```
  padStart(targetLength)
  padStart(targetLength, padString)
  ```

  - Optional Parameter: `padString`
  - The string to pad the current `str` with. If `padString` is too long to stay with the target length, it will be truncated from   the end. The default value is "". 

- `String.repeat()`: Returns a new string, comprised of the original string concatenated with a specific number of copies of that string. 

  ```
  repeat(count)
  ```

- `String.replace`(): Returns a new string with some of all matches of a `pattern` replaced by a `replacement`. The `pattern` can be a string or a regular expression, and the `replacement` can be a string or function. If `pattern` is a string, **only the first occurrence** will be replaced. 

  ```
  replace(regexp, newSubstr)
  replace(regexp, replacerFunction)
  
  replace(substr, newSubstr)
  replace(substr, replacerFunction)
  ```

- `String.toLowerCase()`: Returns new string with calling string converted to lower case. 

- `String.toUpperCase()`: converts the calling string value to uppercase then returns that value. (Also implicitly converts value to string if it isn't one??)

- `String.trim()`: removes whitespace from both ends of string.





| Method            | Syntax                                               | Return value / what it does                                  | Parameters         | Optional Parameter                                           |
| :---------------- | ---------------------------------------------------- | :----------------------------------------------------------- | ------------------ | ------------------------------------------------------------ |
| String.charAt()   | `charAt(index)`                                      | Returns new string of the single UTF-16 code at the specified offset into string. | Single UTF-16 code |                                                              |
| String.indexOf()  | indexOf(searchValue) indexOf(searchValue, fromIndex) | Returns the index of the first occurrence of the specified value. Returns -1 of value is not found. |                    | `fromIndex`: index to start search. If it's greater than string's `length`, the returned value is string's `length`. |
| String.endsWith() |                                                      | Returns boolean (true  / false) on whether a string ends with characters of a specified string. |                    | `position`:The position within the string at which to begin searching for `searchString`. (Defaults to `0`.) |
| String.includes() | `(searchString, position)`                           | Case insensitive search to determine whether string is found, returns boolean. |                    | `position` to begin searching for the `searchString`. Defaults to 0. |
|                   |                                                      |                                                              |                    |                                                              |
|                   |                                                      |                                                              |                    |                                                              |
|                   |                                                      |                                                              |                    |                                                              |
|                   |                                                      |                                                              |                    |                                                              |
|                   |                                                      |                                                              |                    |                                                              |
|                   |                                                      |                                                              |                    |                                                              |
|                   |                                                      |                                                              |                    |                                                              |
|                   |                                                      |                                                              |                    |                                                              |
|                   |                                                      |                                                              |                    |                                                              |
|                   |                                                      |                                                              |                    |                                                              |
|                   |                                                      |                                                              |                    |                                                              |
|                   |                                                      |                                                              |                    |                                                              |
|                   |                                                      |                                                              |                    |                                                              |
|                   |                                                      |                                                              |                    |                                                              |
|                   |                                                      |                                                              |                    |                                                              |
|                   |                                                      |                                                              |                    |                                                              |
|                   |                                                      |                                                              |                    |                                                              |
|                   |                                                      |                                                              |                    |                                                              |

