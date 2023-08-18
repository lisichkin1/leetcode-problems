var minMovesToSeat = function (seats, students) {
  let seatSort = seats.sort((a, b) => a - b); //?
  let studentSort = students.sort((a, b) => a - b); //?
  let counter = 0;
  for (let i = 0; i < seats.length; i++) {
    if (seatSort[i] == studentSort[i]) {
      counter += 0;
    } else {
      counter += Math.abs(seatSort[i] - studentSort[i]);
    }
  }
  return counter;
};
minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6]); //?
