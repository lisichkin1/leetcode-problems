const buildArray = function (nums) {
  return nums.map((num, index, arr) => arr[num]);
};
buildArray([5, 0, 1, 2, 3, 4]);
