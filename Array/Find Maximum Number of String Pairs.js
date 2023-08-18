var maximumNumberOfStringPairs = function (words) {
  let counter = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i] == words[j].split('').reverse().join('')) {
        counter += 1;
      }
    }
  }
  return counter;
};
maximumNumberOfStringPairs(['cd', 'ac', 'dc', 'ca', 'zz']); //?
var maximumNumberOfStringPairs = function (words) {
  count = 0;

  for (let i = 0; i < words.length; i++)
    for (let j = i + 1; j < words.length; j++)
      if (words[i][0] == words[j][1]) if (words[i][1] == words[j][0]) count++;

  return count;
};
