## Fibonacci Numbers (Recursive)

A good recursive function has 3 primary qualities:

1. It calls itself at least once.
2. It has an ending condition — e.g., `if (num === 1)`, in the `sum` function above.
3. The results of each recursion are used in each step — e.g., `num + sum(num - 1)` uses `sum(num - 1)`.

![img](https://dbdwvr6p7sskw.cloudfront.net/js-exercises/images/Fibonacci_recursive.png)

```js
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  }
  return fibonacci(nth - 1) + fibonacci(nth - 2);
}
```



## Fibonacci Numbers (Procedural)

```
Data Structure 
 	f(1)
  f(2)
  f(3) = f(1) + f(2)
  f(4) = f(3) + f(2)
  f(5) = f(4) + f(3)
```

<img src="https://dbdwvr6p7sskw.cloudfront.net/js-exercises/images/Fibonacci_procedural.png" alt="img" style="zoom: 25%;" />

The procedural approach is straightforward. Instead of having an ending condition, it has a starting condition. The function starts by setting the values of the first two Fibonacci numbers. Using the first two, the function iteratively gets the `nth` fibonacci.

```js
function fibonacci(nth) {
  let a = 1;
  let b = 1;
  let sum = 0;

  for (let count = 3; count <= nth; count++) {
    sum = a + b;
    b = a;
    a = sum;
  }
  return sum;
}
```

Their solution 

```js
function fibonacci(nth) {
  let previousTwo = [1, 1];

  for (let counter = 3; counter <= nth; counter += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }

  return previousTwo[1];
}
```

-  recursive function can be rewritten as a non-recursive procedural function
-  recursive functions can be extremely slow and may require massive quantities of memory and/or stack space.
- gettting to 50th fibonacci number takes a long time
- JS can accurately acompute intgers up to 16 digits long
- fibbonacci(78) is the largest number you can accurately compute simple operations in JS

## Fibonacci Numbers (Memoization)

The recursive `fibonacci` function from earlier exercise isn't very efficient. It starts slowing down with an nth argument as low as 35. 

**Memoization** is an approach that involves saving a computed answer for future reuse, instead of computing it from scratch every time it is needed. 

In the case of our recursive `fibonacci` function, using memoization saves calls to `fibonacci(nth - 2)` because the necessary values have already been computed by the recursive calls to `fibonacci(nth - 1)`.

![img](https://dbdwvr6p7sskw.cloudfront.net/js-exercises/images/Fibonacci_memoization.png)

```js
let obj = {};
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else if (obj[nth]) {
    return obj[nth];
  } else {
    obj[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return obj[nth];
  }
}
```

The main difference of this solution is the addition of the `ojb` object. In the outer `else` clause, the solution uses the object to look up whether a previous computation has already been done for the `nth` value. If it has, the function immediately returns that value; otherwise, the function computes the `nth` value, stores the result in the object, and returns it.



Reference: JS101 Small problems Medium1 https://launchschool.com/exercise_sets/e46f01e3

