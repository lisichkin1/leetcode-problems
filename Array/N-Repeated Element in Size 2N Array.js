var repeatedNTimes = function (nums) {
  let sortNums = nums.sort((a, b) => a - b); //?
  if (
    nums[nums.length / 2] == nums[nums.length / 2 + 1] ||
    nums[nums.length / 2] == nums[nums.length / 2 - 1]
  ) {
    return nums[nums.length / 2];
  } else if (
    nums[nums.length / 2 - 1] == nums[nums.length / 2 + 1] ||
    nums[nums.length / 2 - 1] == nums[nums.length / 2 - 2]
  ) {
    return nums[nums.length / 2 - 1];
  }
};
repeatedNTimes([9, 5, 3, 3]); //?
var repeatedNTimes = function (A) {
  let lookup = new Set();

  for (let n of A) {
    if (lookup.has(n)) return n;
    lookup.add(n);
  }

  return -1;
};
