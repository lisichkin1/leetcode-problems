var numberOfPairs = function (array) {
  const counts = new Map();

  for (const element of array) {
    counts.set(element, (counts.get(element) || 0) + 1);
  }

  const duplicates = new Map();
  let remains = 0;
  let counPairs = 0;
  for (const [element, count] of counts.entries()) {
    if (count % 2 == 0) {
      duplicates.set(element, count / 2);
    } else {
      duplicates.set(element, (count - 1) / 2);
      remains += 1;
    }
  }
  for (const [element, count] of duplicates.entries()) {
    if (count >= 1) {
      counPairs += count;
    }
  }

  console.log(duplicates);
};
numberOfPairs([
  5, 12, 53, 22, 7, 59, 41, 54, 71, 24, 91, 74, 62, 47, 20, 14, 73, 11, 82, 2, 15, 38, 38, 20, 57,
  70, 86, 93, 38, 75, 94, 19, 36, 40, 28, 6, 35, 86, 38, 94, 4, 90, 18, 87, 24, 22,
]); //?
