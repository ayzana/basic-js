const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = domains.map((el) => el.split('.'));
  let count = 0; let dns = ''; let result = {};
  for (let i =0 ; i < arr.length; i++){
    dns = arr[i][arr[i].length-1];
    count = count + (arr[i].filter((el) =>  el === arr[i][arr[i].length-1])).length;
     result.dns = count}
     return result;
}

module.exports = {
  getDNSStats
};
