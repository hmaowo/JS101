let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }
function selectFruit(produce) {
  let a = {};
  for (const veggieFruit in produce) {
    if (produce[veggieFruit] === 'Fruit') {
      a[veggieFruit] = produce[veggieFruit];
    }
  }

  console.log(a);
}