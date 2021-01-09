let rlSync = require('readline-sync');
let name = rlSync.question('What is your name? ');

if (name.charAt(name.length - 1) === '!') {
  name = name.substring(0, name.length -1); 
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING ?`);
} else {
  console.log(`Hello, ${name}.`);
}

/* Notes

line 4  or use bracket notation name[name.length -1]
line 5  name = name.slice(0, -1)
        negative number like - 1 is treated as str.length - 1
        You cannnot modify length of string like arrays. But you can reassign the reference
        to a new string value.  
*/