console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

function swapName(str) {
  return str.split(' ').reverse().join(', ');
}
//can reverse array without reverse letters, if split by words. 