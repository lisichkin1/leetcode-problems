const twoOutOfThree = (nums1, nums2, nums3) => {
  const memo = {};
  const result = [];
  const arr = Array.from(new Set(nums1))
    .concat(Array.from(new Set(nums2)))
    .concat(Array.from(new Set(nums3))); //?

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] in memo) {
      memo[arr[index]] += 1;
    } else {
      memo[arr[index]] = 1;
    }
  }
  for (key in memo) {
    if (Number(memo[key]) < 2) continue;
    result.push(Number(key));
  }
  return result;
};
twoOutOfThree([1, 1, 3, 2], [2, 3], [3]); //?
