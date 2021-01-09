function shortLongShort(string1, string2) {
  let long; 
  let short;
  if (string1.length > string2.length) {
    long = string1; 
    short = string2;
  } else if (string2.length > string1.length) {
    long = string2;
    short = string1;
  }
  console.log(short + long + short);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"