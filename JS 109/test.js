[1, 2, 3].forEach(function(element) {
  console.log(uhh (element));
});

function uhh (element) {
  if (element === 1) {
    return 'yes';
  }
  return 'no';
}

[3, 1, 2].sort(compareFunction((a, b)));

function compareFunction(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}