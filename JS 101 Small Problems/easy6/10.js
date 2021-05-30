console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

function reverseWords(string) {
  return string.split(' ').map(char => {
    if (char.length >= 5) {
      return char.split('').reverse().join('');
    }
    return char;
  }).join(' ');
}