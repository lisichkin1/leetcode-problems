var flipAndInvertImage = function (image) {
  return image.map((item) => item.reverse().map((num) => (num == 1 ? 0 : 1)));
};
flipAndInvertImage([
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
]); //?
