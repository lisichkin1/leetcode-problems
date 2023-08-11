var smallerNumbersThanCurrent = function (nums) {
  return nums.reduce((acc, el, index, arr) => {
    let arr_sort = [...new Set(arr.sort((a, b) => a - b))];
    acc.push(arr);
    el; //?
    return acc;
  }, []);
};
smallerNumbersThanCurrent([8, 1, 2, 2, 3]); //?
