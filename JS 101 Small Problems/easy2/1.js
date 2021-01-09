/* The join() method creates and returns a new string by concatenating all of the elements in an
 array (or an array-like object), separated by commas or a specified separator string. */

function greetings (array, object) {
  return `Hello, ${array.join(" ")}! Nice to have a ${object.title} ${object.occupation} \
around.`; // using \ at point of newline doesn't create a new line. 
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.