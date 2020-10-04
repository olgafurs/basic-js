const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let obj = {
    turns: 0, 
    seconds: 0
  };

  obj.turns = 2**disksNumber - 1;
  obj.seconds = Math.floor(obj.turns * 3600 / turnsSpeed);
  return obj;

};
