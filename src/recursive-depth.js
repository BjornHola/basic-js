const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    let countDepth = 1;
    for (let element of arr) {
      if (Array.isArray(element)) {
        countDepth = Math.max(countDepth, this.calculateDepth(element) + 1);
      }
    }
    return countDepth;
  }
}

const depthCalc = new DepthCalculator();

console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5])); 
console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]])); 
console.log(depthCalc.calculateDepth([[[]]])); 


module.exports = {
  DepthCalculator
};
