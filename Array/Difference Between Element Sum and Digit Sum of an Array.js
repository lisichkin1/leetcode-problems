var differenceOfSum = function (nums) {
  const res1 = nums.reduce((acc, el) => acc + el, 0);
  const res2 = nums
    .map((el) => ('' + el).split(''))
    .flat()
    .reduce((acc, el) => Number(el) + acc, 0);
  return res1 - res2;
};
differenceOfSum([1, 15, 6, 3]); //?
