const triangle = (num) => {
  let result = [];
  for (let i = 0; i < num; i++) {
    let push_arr = [];
    if (i === 0) {
      result.push([i + 1]);
    } else if (i === 1) {
      result.push([i, i]);
    } else {
      for (let j = 0; j < i - 1; j++) {
        push_arr.push(result[i - 1][j] + result[i - 1][j + 1]);
      }
      result.push([1, ...push_arr, 1]);
    }
  }
  return result;
};
triangle(5); //?
