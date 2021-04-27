const readline = require('readline-sync');

let noun = readline.question("Enter a noun: ");
let verb = readline.question("Enter a verb: ");
let adjective = readline.question("Enter an adjective: ");
let adverb = readline.question("Enter an adverb: ");

console.log(`Your ${noun} is adorable. But why was it ${verb} so ${adverb} \
in the park yesterday. It is a very ${adjective} ${noun} though. I'm happy \
for you! Hopefully someday I can meet your ${noun}.`);