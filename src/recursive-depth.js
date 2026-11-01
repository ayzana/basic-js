const { NotImplementedError } = require('../lib');

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
    let depth = 1;
    for (const n of arr) {
      if (Array.isArray(n)) {
        depth = Math.max(depth, 1 + this.calculateDepth(n));
      }
    }
    return depth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
