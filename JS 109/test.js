function addNames(arr, name) {
  arr = arr.push(name);
  console.log(arr);
}

let names = ["bob", "kim"];
addNames(names, "jim");
console.log(names); // => [ 'bob', 'kim', 'jim' ] ????
// reassignemnt + array.push() is destructive.