var countMatches = function (items, ruleKey, ruleValue) {
  return items.reduce((acc, el, index) => {
    if (ruleKey == 'type') {
      if (el[0] == ruleValue) {
        acc += 1;
      }
    } else if (ruleKey == 'color') {
      if (el[1] == ruleValue) {
        acc += 1;
      }
    } else {
      if (el[2] == ruleValue) {
        acc += 1;
      }
    }
    return acc;
  }, 0);
};
countMatches(
  [
    ['phone', 'blue', 'pixel'],
    ['computer', 'silver', 'phone'],
    ['phone', 'gold', 'iphone'],
  ],
  'type',
  'phone',
);
