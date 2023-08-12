var restoreString = function (s, indices) {
  return s
    .split('')
    .map((char, index) => ({ char, index }))
    .sort((a, b) => indices[a.index] - indices[b.index])
    .map((item) => item.char)
    .join('');
};

restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]);
