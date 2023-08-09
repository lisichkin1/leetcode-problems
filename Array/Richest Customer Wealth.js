var maximumWealth = function (accounts) {
  return Math.max(...accounts.map((account) => account.reduce((acc, el) => acc + el, 0)));
};
maximumWealth([
  [1, 2, 3],
  [3, 2, 1],
]); //?
