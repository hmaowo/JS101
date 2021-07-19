The **`return`** statement ends function execution and specifies a value to be returned to the function caller.

- breaks out of "CLOSEST" function

  - CAREFUL: if trying to exit a larger function but you are inside an array iteration function such as forEach() or map(), you only exit the iteration of that function. 

- does not break out of a `for loop` only because, for loop is not a function. If return is used in `while loop`, it would break out of entire function. 

  ```js
  function getLongest(array) { // array will get mutated because its pass by reference
    array.sort((a, b) => {
      return b.split(' ').length - a.split(' ').length; // breaks out of the callback function, not out of sort function
    });
  
    console.log()
  
    return array[0]; ; // breaks out of getLongest() function
  }
  ```

