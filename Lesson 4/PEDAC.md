# Introduction to the PEDAC Process

The PEDAC process is one approach to solving programming problems. Its primary goal is to help you identify and avoid pitfalls that you may encounter when you don't code with intent.

P - [Understand the] **P**roblem

E - **E**xamples / Test cases

D - **D**ata Structure

A - **A**lgorithm

C - **C**ode

This guide describes a "lighter" version of the PEDAC process that should help you prepare for the upcoming interview assessment. We'll discuss PEDAC in much more detail in a later course.

When given a programming problem, students often jump straight to the coding part. At first glance, this approach seems reasonable. In an interview setting with limited time, you want to solve the problem quickly. Writing an algorithm may seem like an unnecessary use of your limited time, especially when the problem seems simple. However, in this guide, we want to show you that following the PEDAC process saves time and lets you solve **complex** problems efficiently.

Note that we've bolded the word "complex." Some problems, like, writing a function that takes a string and returns its uppercased version are so simple that they don't need a detailed algorithm. However, writing a function that returns all the substrings from a given string that are palindromes is not simple, and following the PEDAC process is crucial to solving the problem in the time allotted.

In this guide, we will focus on the "understand the problem" and "data structure/algorithm" steps of the PEDAC process. We won't spend much time talking about the Examples/Test Cases step since we will provide test cases during the first interview assessment. We also won't spend much time on the Code: most students have sufficient knowledge of JavaScript syntax, functions and methods to solve even the hardest problems. Where they run into trouble is understanding the problem and determining an appropriate algorithm.

## P - [Understand the] Problem

Understanding the problem has three steps.

1. Read the problem description.
2. Check the test cases, if any.
3. If any part of the problem is unclear, ask the interviewer or problem requester to clarify the matter.

Let's walk through this process for the problem given below:

```plaintext
// PROBLEM:

// Given a string, write a function changeMe which returns the same
// string but with all the words in it that are palindromes uppercased.

// changeMe("We will meet at noon") === "We will meet at NOON"
// changeMe("No palindromes here") === "No palindromes here"
// changeMe("") === ""
// changeMe("I LOVE my mom and dad equally") === "I LOVE my MOM and DAD equally"
```

After reading this problem, some items may need clarification:

1. **What is a palindrome?** You might ask the interviewer to tell you what a palindrome is, and the interviewer would tell you that it is a word that reads the same forwards and backward.
2. **Should the words in the string remain the same if they already use uppercase?** Here, you can check the test cases. In the fourth test case, the word `LOVE` already uses uppercase, and it remains uppercase in the solution.
3. **How should I deal with empty strings provided as input?** The test cases frequently answer this question. In this case, test case number 3 provides the answer. This is an implicit requirement that we can infer from the test cases.
4. **Can I assume that all inputs are strings?** Test cases don't show any non-string inputs, so you should ask whether the inputs can contain non-string values, and what you should do with them. In this problem, we won't worry about non-string values.
5. **Should I consider letter case when deciding whether a word is a palindrome?** Again, test cases don't show any appropriate examples. The interviewer might tell you that the palindrome words should be case sensitive: `mom` is a palindrome, `Mom` is not.
6. **Do I need to return the same object or an entirely new one?** This question isn't relevant to our current problem since JavaScript strings are immutable and any operation on them will result in a new string. In general, though, this question is one of the most important and most overlooked that you can ask. Typically, while solving problems, students make certain assumptions. One assumption they might make is to return the same object; they often start solving the problem without checking whether that assumption is correct. For this reason, the student may end up losing 10-15 minutes struggling with the wrong problem.
7. **Always verify your assumptions by looking at the test cases or by asking the interviewer.** As discussed in the above point, students often make assumptions about the problem or the expected output that may not be what the interviewer has in mind. That can lead to a waste of time pursuing an incorrect or incomplete solution. Make sure to confirm that your assumptions are correct before you proceed to start developing your algorithm.

To conclude this part of the PEDAC process, you need to write down what the inputs and outputs for the problem are. You should also describe the rules that you must follow. The rules should encapsulate all the explicit and implicit requirements in the problem. So, you should identify what the explicit requirements are, write them down, and then repeat the process for the implicit requirements:

```plaintext
// input: string
// output: string (not the same object)
// rules:
//      Explicit requirements:
//        - every palindrome in the string must be converted to
//          uppercase. (Reminder: a palindrome is a word that reads
//          the same forwards and backward).
//        - Palindromes are case sensitive ("Dad" is not a palindrome, but
//          "dad" is.)

//      Implicit requirements:
//        - if the string is an empty string, the result should be an empty string
```

## Data Structure / Algorithm

Data structures influence your algorithm, and for that reason, these two steps are often paired. Deciding what data structure to use is generally easy. A case that calls for an array rather than an object, for instance, is generally easy to identify. However, designing the right algorithm is far more challenging. The biggest problem that students have when writing algorithms is providing sufficient detail.

Let's consider another problem. Try to work through the "understand the problem" part of this problem on your own, and write the input, output, and rules for it. We'll provide a solution below. Later, we'll tackle the data structure and algorithm.

<u>P & E</u> 

```plaintext
// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []
```

Our Answer ( part of P & E (problem & Example))

```
// Questions that I might have?
// 1. What is a palindrome?
// 2. Will inputs always be strings?

// Input: string
// Output: an array of strings
// Rules: 
		Explicit Requirements: 
		- return only substrings which are palindromes
		- palindrome words should be case sensitive, meaing that "abBA" is not a palindrome.
		Implicit Requirements: 
		- If the string is an empty string, the result should be an empty array. 
```

Now, we come to the algorithm part. Look at the algorithm written below.

```plaintext
// Algorithm:
//  - declare a result variable and initialize it to an empty array
//  - create an array named substrArray that contains all of the
//    substrings of the input string that are at least 2 characters long.
//  - loop through the words in the substrArray array.
//  - if the word is a palindrome, append it to the result
//    array
//  - return the result array
```

Does this algorithm look complete to you?

This algorithm is a "high-level" algorithm and it resembles those that we often see students write during interviews. It looks complete, but let's think about it for a moment: what is the hardest part of this problem? Is it looping through an array and pushing substrings that are palindromes in the result array? Is it determining whether a substring is a palindrome? Is it something else entirely?

Determining whether a word is a palindrome isn't that difficult for most students. Looping through the array and selecting all the palindromes is relatively easy as well. However, finding all the substrings for a given string can be challenging. The above algorithm doesn't tackle that issue. It lacks implementation details for the "hard" parts.

When a student starts writing code based on this algorithm, he soon realizes that returning all the substrings won't be easy. Ideally, the student should return to the algorithm and try to come up with a way to find all the substrings from the input string. He might also create a new function named `substrings` that returns the array of substrings. In practice, though, the time limitations often lead him to take a hack & slash approach instead. That almost always leads to spending more time than necessary on the problem or, worse yet, not solving it at all.

Let's now follow the correct approach. The student can use the "high-level" algorithm from above and first write the code for it. The code might look like this:

```js
function palindromeSubstrings(str) {
  let result = [];
  let substringsArr = substrings(str);

  substringsArr.forEach(substring => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });

  return result;
}
```

Note that we are calling functions named `substrings` and `isPalindrome`. We haven't defined those functions yet. Instead of trying to write the code for those functions, let's return to our algorithm and determine how they need to work. Let's see how that might look; we'll tackle the `substrings` function first.

To find a correct algorithm, we can simplify the problem by using a small, concrete example to determine what we need to do. For instance, we can start with a short word like `halo` and write all its substrings that are at least 2 characters in length. The resulting list is `['ha', 'hal', 'halo', 'al', 'alo', 'lo']`. Do you see a pattern here? It's clear that some sort of complex looping is going on.

The first loop - the outermost loop - iterates over the starting index for the substrings. With `halo` as a starting string, we need to iterate over the letters `h`, `a`, and `l`. (We don't need to iterate over `o` since there are no substrings of at least 2 characters that start with `o`.)

Within the first loop, we need to iterate over the substrings that start at the given starting index. It's easiest to start with the substring of length 2, then the substring of length 3, and so on. The resulting loops look something like this:

```plaintext
for each starting index from 0 through the next to last index position
  for each substring length from 2 until there are no substrings of that length
    extract the substring of the indicated length starting at the indicated index position
  end of inner loop
end of outer loop
```

Beginning with the first letter of the string at index 0, `'h'`, we first find all of the substrings that begin with that letter: `['ha', 'hal', 'halo']`. As you can see, we're showing the inner loop at work here:

- First, we get a 2-letter substring that begins at index 0: `'ha'`
- Next, we get a 3-letter substring that begins at index 0: `'hal'`
- Finally, we get a 4-letter substring that begins at index 0: `'halo'`

The loop, in this case, is one that starts with a length of 2 and ends with a length of 4.

Next, we need to find the substrings that start at index 1 (`a`). The loop, in this case, starts with a length of 2 and ends with a length of 3.

- First, we get a 2-letter substring that begins at index 1: `'al'`
- Next, we get a 3-letter substring that begins at index 1: `'alo'`

Finally, we get all of the substrings that begin at index 2. This time, the loop starts and ends with a length of 2, so there is only one iteration:

- We get a 2-letter substring that begins at index 2: `'lo'`

What would happen if the original string was, say, 7 characters in length, such as `goalies`? In that case, we'd still have to go through the same process - an outer loop that iterates from index 0 (the letter `g`) to index 5 (the letter `e`), and an inner loop that starts with a length of 2 and continues until there are no substrings of the desired length:

- On the first iteration of the outer loop, the substring length used in the inner loop ranges from 2 to 7.
- On the second iteration, the substring length ranges from 2 to 6.
- On the third iteration, the substring length ranges from 2 to 5.
- On the fourth iteration, the substring length ranges from 2 to 4.
- On the fifth iteration, the substring length ranges from 2 to 3.
- On the sixth, the substring length starts and ends at 2.

Looking at these two examples, we can determine that the outer loop iterates over indices from 0 to the length of the next to the last index position (i.e., `string.length - 2`). We can also see that the inner loop ranges from 2 to the original string length minus the starting index (`string.length - startingIndex`). We can use both of these facts in our algorithm. Let's go ahead and write the complete algorithm for this function:

```plaintext
// - create an empty array called `result` that will contain all required substrings
// - create a `startingIndex` variable (value `0`) for the starting index of a substring
// - start a loop that uses `startingIndex` to iterate over `string` from `0` to the length of the string minus 2
//   - create a `numChars` variable (value `2`) for the length of a substring
//   - start an inner loop that uses `numChars` to iterate over `string` from `2` to `string.length - startingIndex`
//     - extract a substring of length `numChars` from `string` starting at `startingIndex`
//     - append the extracted substring to the `result` array
//     - increment the `numChars` variable by `1`
//   - end the inner loop
//   - increment the `startingIndex` variable by `1`
// - end the outer loop
// - return the `result` array
```

Since this pseudocode is relatively complex, you might decide to convert it to formal pseudocode as shown in the [Pseudocode assignment](https://launchschool.com/lessons/64655364/assignments/fea216fc). For instance, we might write the following formal pseudocode:

```plaintext
// START
//
//   /* Given a string named `string` */
//
//   SET result = []
//   SET startingIndex = 0
//
//   WHILE startingIndex <= length of string - 2
//     SET numChars = 2
//     WHILE numChars <= length of string - startingIndex
//       SET substring = numChars characters from string starting at index startingIndex
//       append substring to result array
//       SET numChars = numChars + 1
//
//     SET startingIndex = startingIndex + 1
//
//   RETURN result
//
// END
```

Formal pseudocode is an intermediate step between the informal pseudocode shown above and the final program code shown below - it isn't always needed, but can sometimes be helpful. We'll skip that step in the rest of this assignment.

Here's some code that we might write for the `substrings` function:

```js
function substrings(str) {
  let result = [];
  let startingIndex = 0;

  while (startingIndex <= str.length - 2) {
    let numChars = 2;
    while (numChars <= str.length - startingIndex) {
      let substring = str.slice(startingIndex, startingIndex + numChars);
      result.push(substring);
      numChars += 1;
    }

    startingIndex += 1;
  }

  return result;
}
```

Notice how similar it is to the formal pseudocode; that made writing the code straightforward. However, we could easily write this same code using the informal pseudocode with which we started.

Checking whether the string is a palindrome is easy enough. However, we can write a function for it to help make our code more readable. Let's include that function in our algorithm.

Copy Code

```plaintext
// - Inside the `isPalindrome` function, check whether the string
//   value is equal to its reversed value.
```

You can use the `Array.prototype.reverse` method along with `split` and `join`:

```js
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
```

Here's the complete informal **pseudocode** for this problem:

```plaintext
// input: a string
// output: an array of substrings
// rules: palindrome words should be case sensitive, meaning "abBA"
//        is not a palindrome

// Algorithm:
//  substrings function
//  =================
//    - create an empty array called `result` that will contain all required substrings
//    - create a `startingIndex` variable (value `0`) for the starting index of a substring
//    - start a loop that uses `startingIndex` to iterate over `string` from `0` to the length of the string minus 2
//      - create a `numChars` variable (value `2`) for the length of a substring
//      - start an inner loop that uses `numChars` to iterate over `string` from `2` to `string.length - startingIndex`
//        - extract a substring of length `numChars` from `string` starting at `startingIndex`
//        - append the extracted substring to the `result` array
//        - increment the `numChars` variable by `1`
//      - end the inner loop
//      - increment the `startingIndex` variable by `1`
//    - end the outer loop
//    - return the `result` array

//  isPalindrome function
//  =====================
//    - Inside the `isPalindrome` function, check whether the string
//      value is equal to its reversed value.

//  palindromeSubstrings function
//  ============================
//    - declare a `result` variable and initialize it to an empty array
//    - create an array named `substrArray` that will contain all of the
//      substrings of the input string that are at least 2 characters long.
//    - loop through the words in the `substrArray` array.
//      - if the word is a palindrome, append it to the `result` array
//    - return the `result` array
```

The code for this with all the helper functions:

```js
function substrings(str) {
  let result = [];
  let startingIndex = 0;

  while (startingIndex <= str.length - 2) {
    let numChars = 2;
    while (numChars <= str.length - startingIndex) {
      let substring = str.slice(startingIndex, startingIndex + numChars);
      result.push(substring);
      numChars += 1;
    }

    startingIndex += 1;
  }

  return result;
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function palindromeSubstrings(str) {
  let result = [];
  let substringsArr = substrings(str);

  substringsArr.forEach(substring => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });

  return result;
}

console.log(palindromeSubstrings("supercalifragilisticexpialidocious")); // ["ili"]
console.log(palindromeSubstrings("abcddcbA"));   // ["bcddcb", "cddc", "dd"]
console.log(palindromeSubstrings("palindrome")); // []
console.log(palindromeSubstrings(""));           // []
```

Once again, we want to emphasize that you don't need to write all your pseudocode before you start coding. As you saw above, we first wrote the pseudocode for the `palindromeSubstrings` function. We then wrote the corresponding JavaScript code before we returned to write the pseudocode for the other two functions. Afterwards, we wrote the corresponding code, and then returned to the two lower-level functions.

We also want to emphasize that you don't need the formal pseudocode step. You can use it if it helps you, but it is an extra step.

Finally, the main takeaway is that you should be able to write a plain English solution to the problem. If you can't do that, you won't be able to code it either. You also don't need any "fancy" functions to solve these problems.

## Testing Frequently

Testing isn't properly part of the PEDAC approach, but it's an important step that you don't want to omit. Test your code early and often while writing it. For instance, consider the `substrings` function that we wrote above. When we're writing this code, we might start with:

```js
function substrings(str) {
  let result = [];
  let startingIndex = 0;
  let numChars = 2;
  let endIndex = startingIndex + numChars;
}
```

At this point, you may want to check that `endIndex` is correct. To do that, you can insert a `console.log` statement:

```js
function substrings(str) {
  let result = [];
  let startingIndex = 0;
  let numChars = 2;
  let endIndex = startingIndex + numChars;
  console.log(endIndex); // => 2
}

substrings("abcdef");
```

Next, add a bit more code and test again:

```js
function substrings(str) {
  let result = [];
  let startingIndex = 0;
  let numChars = 2;

  while (startingIndex <= str.length - 2) {
    startingIndex += 1;
  }

  console.log(startingIndex); // => 5
}

substrings("abcdef");
```

Continue in this manner. Each time you write a bit of code that you can test, test it and make sure you're getting the answer you expect. Don't wait until you're finished writing the entire program or function or even an entire loop if you can test something earlier. This way, if there is a bug in your code, you'll find it as soon as possible; the sooner you find a bug, the easier it will be to identify what's wrong and fix it.

## Summary

In conclusion, practice working through the PEDAC process while solving problems. It may be hard, at first. For simple problems, it might even seem unnecessary, but, stick with it. In time, your process will improve; you'll soon be able to solve difficult problems much more readily.