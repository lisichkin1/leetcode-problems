var decompressRLElist = function (nums) {
  const result = [];
  nums.map((item, index) => {
    if (index % 2 === 0) {
      result.push(...new Array(item).fill(nums[index + 1]));
    }
  });
  return result;
};
decompressRLElist([1, 2, 3, 4]);
