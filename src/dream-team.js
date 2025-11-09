const { NotImplementedError } = require("../lib");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let result = "";
    members.forEach((el) =>
      typeof el === "string" ? (result += el.trim()[0]) : false
    );
    return result.toUpperCase().split("").sort().join("");
  }
  return false;
}

module.exports = {
  createDreamTeam,
};
