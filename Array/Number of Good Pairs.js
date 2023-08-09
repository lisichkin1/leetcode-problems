const numIdenticalPairs = function (nums) {
  return nums.reduce((acc, el, index, arr) => {
    for (let index_2 = 0; index_2 < arr.length; index_2++) {
      if (el == arr[index_2] && index < index_2) {
        acc += 1;
      }
    }
    return acc;
  }, 0);
};
numIdenticalPairs([1, 1, 1, 1]);
