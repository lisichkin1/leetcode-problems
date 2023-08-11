var sumOfMultiples = function (n) {
  return Array.from({ length: n }, (_, index) => index + 1)
    .filter((el) => el % 3 == 0 || el % 5 == 0 || el % 7 == 0)
    .reduce((acc, el) => acc + el, 0); //?
};
sumOfMultiples(7);
