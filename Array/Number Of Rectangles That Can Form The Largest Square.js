var countGoodRectangles = function (rectangles) {
  let number = 0;
  let counter = 0;
  let resArr = rectangles
    .map((item) => Math.min(...item))
    .sort((a, b) => a - b)
    .reverse(); //?

  for (let item of resArr) {
    if (item >= number) {
      number = item;
      counter += 1;
    }
  }
  return counter;
};
countGoodRectangles([
  [5, 8],
  [3, 9],
  [5, 12],
  [16, 5],
]); //?
