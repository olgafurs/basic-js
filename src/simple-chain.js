const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: '',

  getLength() {
    return this.chain.split('~~').length;
  },

  addLink(value) {

    if (this.chain === '') {
      this.chain = `( ${String(value)} )`;
    } else {
      this.chain = `${this.chain}~~( ${String(value)} )`;
    }
    return this;

  },

  removeLink(position) {
    if (position < 1 || position > this.chain.split('~~').length || isNaN(position) === true) {
      this.chain = '';
      throw new Error();
    }

    let a = this.chain.split('~~');
    let b = a.splice(position - 1, 1);
    console.log(b);
    this.chain = a.join('~~');
    return this;
  },

  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join('~~');
    return this;
  },

  finishChain() {
    let result = this.chain;
    this.chain = '';

    return result;
  }
};

module.exports = chainMaker;