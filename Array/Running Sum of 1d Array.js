var runningSum = function (nums) {
  let result = [];
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i <= j) {
        res += nums[j];
        result.push(res);
      } else {
        break;
      }
    }
  }
  return result;
};
runningSum([1, 2, 3, 4]); //?
