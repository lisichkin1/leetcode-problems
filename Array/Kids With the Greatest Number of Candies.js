var kidsWithCandies = function (candies, extraCandies) {
  const maxCandies = Math.max(...candies);

  const result = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandies) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
};
kidsWithCandies([4, 2, 1, 1, 2], 1); //?
