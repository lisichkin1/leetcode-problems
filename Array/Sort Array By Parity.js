var sortArrayByParity = function (nums) {
  let res = [];
  res.push(...nums.filter((a) => a % 2 == 0));
  res.push(...nums.filter((a) => a % 2 != 0));
  return res;
};

sortArrayByParity([3, 1, 2, 4]); //?
