It's not possible to prevent all errors. For example, some built-in JavaScript functions can throw exceptions, but there is no practical way to predict and avoid those errors. Consider the built-in `JSON.parse` method: this method takes a single String argument that contains some data in JSON format, and converts it to an object. If you pass a String to `JSON.parse` that isn't a valid JSON value, all `JSON.parse` can do is throw an exception:

```javascript
let data = 'not valid JSON';

JSON.parse(data);  // throws SyntaxError: Unexpected token i in JSON at position 0
```

JSON strings look a lot like JavaScript object literals. The main differences are that we double quote the keys, and the literal value appears inside a String:

```javascript
let object = { "name": "Ferdinand", "age": 13 };  // object literal
let json = '{ "name": "Ferdinand", "age": 13 }';  // JSON string
```

We'll learn more about JSON later when we learn how to use JavaScript to connect to servers.

The only way to prevent errors in `JSON.parse` is to parse the input string. That is, we need to build a method that can parse JSON Strings. However, that's what `JSON.parse` does. We surely don't want to reimplement it just to avoid errors. Thus, avoiding errors simply isn't realistic here.

Instead of trying to avoid errors, we can just let `JSON.parse` throw a `SyntaxError`, and **catch** it with a `try/catch/finally` block. This is syntactically similar to `if/else` blocks:

```javascript
try {
  // Do something that might fail here and throw an exception.
} catch (error) {
  // This code only runs if something in the try clause throws an exception.
  // "error" contains the exception object.
} finally {
  // This code always runs even if the above code throws an exception.
}
```

The `finally` clause is optional; you can omit it if you don't need it, just as you can omit the `else` clause in an `if` statement.

Let's use `try/catch/finally` to handle `JSON.parse` errors:

```javascript
function parseJSON(data) {
  let result;

  try {
    result = JSON.parse(data);  // Throws an exception if "data" is invalid
  } catch (e) {
    // We run this code if JSON.parse throws an exception
    // "e" contains an Error object that we can inspect and use.
    console.log('There was a', e.name, 'parsing JSON data:', e.message);
    result = null;
  } finally {
    // This code runs whether `JSON.parse` succeeds or fails.
    console.log('Finished parsing data.');
  }

  return result;
}

let data = 'not valid JSON';

parseJSON(data);    // Logs "There was a SyntaxError parsing JSON data:
                    //       Unexpected token i in JSON at position 0"
                    // Logs "Finished parsing data."
                    // Returns null
```

## When to Use Try/Catch

Only use `try/catch/finally` blocks when the following conditions are both true:

- A built-in JavaScript function or method can throw an exception and you need to handle or prevent that exception.
- A simple guard clause is impossible or impractical to prevent the exception.

## Further Reading

You may check out [this article](https://medium.com/launch-school/javascript-weekly-graceful-error-handling-2f4045262df) by one of our students for an additional perspective on errors in JavaScript and what to do about them.