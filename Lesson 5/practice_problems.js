function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';
  for (let section = 0; section < sections.length; section++) {
    for (let num = 0; num < sections[section]; num++) {
      uuid += characters[Math.floor(Math.random() * characters.length)];
    }

    if (section < sections.length - 1) {
      uuid += '-';
    }
  }

  return uuid;
}

console.log(generateUUID());