const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  constructor() {
    this.depth = 0;
    this.subDepth = 0;
  }
  calculateDepth = (arr) => {
    if (Array.isArray(arr)) {
      if (arr.length === 0) {        
        this.subDepth = 0;
      } else {
        this.subDepth = Math.max(...arr.map(element => this.calculateDepth(element)));
      }
      this.depth = 1 + this.subDepth;
    
    } else {
      return 0;
    }
    return this.depth;  
 }
};