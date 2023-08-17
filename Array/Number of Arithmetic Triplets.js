var arithmeticTriplets = function (nums, diff) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let num1 = i;
    let num2 = 0;
    let num3 = 0;
    num2 = nums.indexOf(nums[num1] + diff);
    num3 = nums.indexOf(nums[num2] + diff);
    if (nums[num2] - nums[num1] == diff && nums[num3] - nums[num2] == diff) {
      result.push([num1, num2, num3]);
    }
  }
  return result.length;
};
arithmeticTriplets([0, 1, 4, 6, 7, 10], 3); //?
