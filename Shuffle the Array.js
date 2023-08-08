const shuffle = function (nums, n) {
  return nums.reduce((accumulator, item, index) => {
    if (index < n) {
      accumulator.push(item, nums[n + index]);
    }
    return accumulator;
  }, []);
};
shuffle([2, 5, 1, 3, 4, 7], 3); //?
