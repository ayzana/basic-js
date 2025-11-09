const { NotImplementedError } = require("../lib");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arr2 = arr.filter((el) => el !== -1).sort((a, b) => a - b);
  let arr3 = [];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === -1) {
      arr3.push(-1);
    } else {
      arr3.push(arr2[0]);
      arr2.splice(0, 1);
    }
  }
  return arr3;
}

module.exports = {
  sortByHeight,
};
