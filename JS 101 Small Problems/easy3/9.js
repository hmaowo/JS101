function cleanUp(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s +/gi, " ");
}
console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

/*
** notes
** /g changes all characters
** /i makes expression case insensitive
** + matches all the preceding items
** \s is a character class that matches a single space
/*

/*

my solution

function cleanUp (string) {
  let cleanerString = noWeirdCharacters(string);
  return noExtraSpaces(cleanerString);
}

function noWeirdCharacters(string) {
  let string2 = '';
  for (let counter = 0; counter < string.length; counter++) {
    if (/[a-z]/i.test(string[counter])) {
      string2 += string[counter];
    } else {
      string2 += ' ';
    }
  }
  return string2;
}

function noExtraSpaces(string2) {
  let finalString = '';
  for (let counter = 0; counter < string2.length; counter++) {
    if (string2[counter] === ' ' && string2[counter - 1] === ' ') {
      finalString += '';
    } else {
      finalString += string2[counter];
    }
  }
  return finalString;
}
*/