const sumOfEncryptedInt = (nums) =>
  nums.reduce(
    (acc, arr) =>
      acc +
      Number(
        String(arr)
          .split('')
          .map((num) => Number(num))
          .sort((a, b) => b - a)
          .map((_, __, array) => (number = array[0]))
          .join(''),
      ),
    0,
  );

sumOfEncryptedInt([10, 12, 31]);
