

#### Question 1

Will the code below raise an error?

```javascript
let numbers = [1, 2, 3];
numbers[6] = 5;
```

```javascript
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?
```

Solution 1

No it won't raise an error, javascript engine treat array slots 3 through 5 as **empty slots**. 

Numbers returns [1, 2, 3, <3 empty items>, 5]

numbers [4] returns undefined, despite the slot not having the value undefined. 

Even if you remapped the array with `numbers.map(() => 10);`, it will still keep the empty slots. 

```js
[ 10, 10, 10, <3 empty items>, 10,]
```



------

#### Question 2

How can you determine whether a given string ends with an exclamation mark (`!`)?

```javascript
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false
```

Solution 2

use 

```js
str1.endsWith('!');

str2.endsWith('!');
```

------

#### Question 3

Determine whether the following object of people and their age contains an entry for `'Spot'`:

```javascript
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
```

Note that our keys have capitalized names; this usually violates style guidelines, but is fine for our purposes. We'll use such keys in several exercises in this course.

Solution 3

The **`hasOwnProperty()`** method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

```javascript
ages.hasOwnProperty("Spot");
```

------

#### Question 4

Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

```javascript
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
```

Solution 4

```js
// my solution
let edited = munstersDescription.slice(0, 1).toUpperCase() + 		   		   	  munstersDescription.substring(1, munstersDescription.length).toLowerCase();
```

```js
// their solution
munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();
```

------

#### Question 5

What will the following code output?

```javascript
console.log(false == '0'); // true;
console.log(false === '0'); // false
```

Solution 5

Nonstrict equality operator == converts Boolean to 1/0 and number to string. 

------

#### Question 6

We have most of the Munster family in our `ages` object:

```javascript
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
```

Add entries for Marilyn and Spot to the object:

```javascript
let additionalAges = { Marilyn: 22, Spot: 237 };
```

Solution 6

```js
Object.assign(ages, additionalAges);
```

------

#### Question 7

Determine whether the name `Dino` appears in the strings below -- check each string separately):

```javascript
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
```

Solution 7

```js
str1.includes('Dino'); // false
str2.includes('Dino'); // true
```

```js
str1.indexOf('Dino') > -1; // false
str2.indexOf('Dino') > -1; // true
```

```js
str1.match('Dino') !== null; // false
str2.match('Dino') !== null; // true
```

------

#### Question 8

How can we add the family pet, `"Dino"`, to the following array?

```javascript
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
```

Solution 8

```js
flintstones.push("Dino");
```

------

#### Question 9

In the previous problem, our first answer added `'Dino'` to the array like this:

```javascript
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
```

How can we add multiple items to our array? (`'Dino'` and `'Hoppy'`)

Solution 9

```js
flintstones.push("Dino", "Hoppy"); // we can pass multiple arguments to push
```

------

#### Question 10

Return a new version of this sentence that ends just before the word `house`. Don't worry about spaces or punctuation: remove everything starting from the beginning of `house` to the end of the sentence.

```javascript
let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '
```

Solution 10

```js
advice.substring(0,advice.indexOf('house'));
```

