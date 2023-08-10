const mostWordsFound = function (sentences) {
  return Math.max(
    ...sentences.reduce((acc, el) => {
      acc.push(el.split(' ').length);
      return acc;
    }, []),
  );
};
mostWordsFound(['alice and bob love leetcode', 'i think so too', 'this is great thanks very much']); //?
