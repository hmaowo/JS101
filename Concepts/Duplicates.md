## check for duplicates

*Method 1*

- Use an object `{}`

- Push each element into an object key. 

- Exploit this rule: **JavaScript** objects cannot **have** duplicate **keys**. The **keys** must all be **unique**.

```js
let string = 'abbbb';

let array = string.split('');
let seen = {};
array.forEach((cv) => {
  if (seen[cv]) {
    return false;
  }
  seen[cv] = true;
})
```



*Method 2*

Use `Array.some()` and `indexOf()`

```js
let string = 'abbbb';
sting.indexOf('b'); // 1

let array = string.split('');
let hasDuplicates = array.some((cv, index) => {
  return array.indexOf(cv) !== index;
});

console.log(hasDuplicates) // true
```

- `indexOf()` returns the first index at which a given element can be found in an array. 

- `some()` method can be used to check if each element in an array passes a function
  - if the indexOf(current value) is not equal to the index, then it's a duplicate. Since indexOf() only returns the first index of the element. 



## check for NO duplicates

use `Array.every()` and `indexOf`

```js
let string = 'abbbb';
sting.indexOf('b'); // 1

let array = string.split('');
let noDuplicates = array.every((cv, index) => {
  return array.indexOf(cv) === index;
});

console.log(noDuplicates) // false
```

------

Reference Problem 

Their solution 

```js
function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum <= MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};

  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      return false;
    }

    seen[digits[idx]] = true;
  }

  return true;
}
```



Reference: https://launchschool.com/exercises/135a426aoi

