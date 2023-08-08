const numberOfEmployeesWhoMetTarget = function (hours, target) {
  return hours.filter((hour) => hour >= target).length;
};
numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2); //?
