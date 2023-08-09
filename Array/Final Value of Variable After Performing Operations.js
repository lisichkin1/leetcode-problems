const finalValueAfterOperations = function (operations) {
  return operations.reduce((acc, el) => (el == 'X++' || el == '++X' ? (acc += 1) : (acc -= 1)), 0);
};
finalValueAfterOperations(['X++', '++X', '--X', 'X--', '++X']); //?
