var countSeniors = function (details) {
  return details.map((item, index) => Number(item.match(/\d{2}(?=\d{2}$)/)[0]));
  //?
};
countSeniors(['7868190130M7522', '5303914400F9211', '9273338290F4010']); //?
