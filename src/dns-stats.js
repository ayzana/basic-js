const { NotImplementedError } = require("../lib");

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
  let arr = [];
  for (let j = 0; j < domains.length; j++) {
    let str = domains[j];
    let dns = "";
    let count = str.split(".").length;
    for (let i = 0; i < count; i++) {
      if (str.lastIndexOf(".") === -1) {
        dns = dns + "." + str;
      } else {
        dns = dns + str.substring(str.lastIndexOf("."));
      }
      str = str.substring(0, str.lastIndexOf("."));
      arr.push(dns);
    }
  }
  return arr.reduce((acc, i) => {
    if (acc.hasOwnProperty(i)) {
      acc[i] += 1;
    } else {
      acc[i] = 1;
    }
    return acc;
  }, {});
}

module.exports = {
  getDNSStats,
};
