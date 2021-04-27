// eslint-disable-next-line max-lines-per-function
function logInBox (string) {
  let horizontalRule = (`+${'-'.repeat(string.length + 2)}+`);
  let emptyLine = (`|${' '.repeat(string.length + 2)}|`);

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${string} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

logInBox('');
logInBox('To boldly go where no one has gone before.');