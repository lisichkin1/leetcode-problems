const sortedSquares = (nums) => {
  return nums.map((num) => Math.pow(num, 2)).sort((a, b) => a - b);
};
sortedSquares([-4, -1, 0, 3, 10]);
