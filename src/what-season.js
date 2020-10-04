const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (date === undefined || date === null) {
    return 'Unable to determine the time of year!';
  }

  let newDate = new Date(date.getTime());
  let month = newDate.getMonth();
  if ((0 <= month && month <= 1) || month == 11) {
    return 'winter';
  } else if (2 <= month && month <= 4) {
    return 'spring';
  } else if (5 <= month && month <= 7) {
    return 'summer';
  } else if (8 <= month && month <= 10) {
    return 'autumn';
  } else {
    throw new Error();
  }


};