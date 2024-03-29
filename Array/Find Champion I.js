const findChampion = (grid) => {
  const sums = grid.map((arr) => arr.reduce((acc, item) => acc + item, 0));

  return sums.indexOf(Math.max(...sums));
};
findChampion([
  [0, 0, 1],
  [1, 0, 1],
  [0, 0, 0],
]);
