The **`return`** statement ends function execution and specifies a value to be returned to the function caller.

- breaks out of entire function

  ```js
  function getLongest(array) { // array will get mutated because its pass by reference
    array.sort((a, b) => {
      return b.split(' ').length - a.split(' ').length; // breaks out of the callback function, not out of sort function
    });
  
    console.log()
  
    return array[0]; ; // breaks out of getLongest() function
  }
  ```

