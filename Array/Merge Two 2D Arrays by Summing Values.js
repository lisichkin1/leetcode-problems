const mergeArrays = (nums1, nums2) => {
  const result = {};
  const nums = [...nums1, ...nums2];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i][0] in result) {
      result[nums[i][0]] += nums[i][1];
    } else {
      result[nums[i][0]] = nums[i][1];
    }
  }

  return Object.entries(result).map(([key, value]) => [Number(key), value]);
};

const result = mergeArrays(
  [
    [1, 2],
    [2, 3],
    [4, 5],
  ],
  [
    [1, 4],
    [3, 2],
    [4, 1],
  ],
);

console.log(result);
