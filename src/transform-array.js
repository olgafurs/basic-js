const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {


  if (!Array.isArray(arr)) {
    throw new Error('It is not an array!');
  } else {

    let transArr = [...arr];

    if (transArr === []) {
      return transArr;
    }
    
    for (let i = 0; i < transArr.length; i++) {

      if (transArr[i] === '--double-next' && transArr[i + 2] === '--double-prev') {

        let input = transArr[transArr.indexOf(`--double-prev`) - 1];
        transArr.splice(transArr.indexOf(`--double-next`), 3, input, input, input);

      }
      if (transArr[i] === '--double-next' && transArr[i + 2] === '--discard-prev') {
        let a = transArr.slice(0, transArr.indexOf(`--double-next`));
        let b = transArr.slice(transArr.indexOf(`--discard-prev`) + 1);
        a.push(transArr[i + 1]);
        return a.concat(b);
      }


      if ((transArr[i] === '--discard-next' && transArr[i + 2] === '--double-prev') || (transArr[i] === '--discard-next' && transArr[i + 2] === '--discard-prev')) {
        transArr.splice(transArr.indexOf(`--discard-next`), 3);
      }

    }

    for (let i = 0; i < transArr.length; i++) {

    if (transArr.indexOf('--double-next') !== -1) {

      if (transArr.indexOf('--double-next') == (transArr.length - 1)) {
        transArr.splice(transArr.length - 1, 1);
      } else {

        let a = transArr.slice(0, transArr.indexOf(`--double-next`));
        let b = transArr.slice(transArr.indexOf(`--double-next`) + 1);
        b.unshift(b[0]);
        transArr = a.concat(b);
      }

    }


    if (transArr.indexOf('--discard-next') !== -1) {

      if (transArr.indexOf('--discard-next') == (transArr.length - 1)) {
        transArr.splice(transArr.length - 1, 1);
      } else {        
        transArr.splice(transArr.indexOf(`--discard-next`), 2);        
      }

    }

    if (transArr.indexOf('--double-prev') !== -1) {

      if (transArr.indexOf('--double-prev') == 0) {
        transArr.splice(0, 1);
      } else {
        let a = transArr.slice(0, transArr.indexOf(`--double-prev`));
        let b = transArr.slice(transArr.indexOf(`--double-prev`) + 1);
        a.push(a[a.length - 1]);
        transArr = a.concat(b);
      }

    }

    if (transArr.indexOf('--discard-prev') !== -1) {

      if (transArr.indexOf('--discard-prev') == 0) {
        transArr.splice(0, 1);
      } else {
        transArr.splice(transArr.indexOf(`--discard-prev`) - 1, 2);
      }


    }

  }
    return transArr;
  }

};