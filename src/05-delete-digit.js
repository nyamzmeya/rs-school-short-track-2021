/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function replaceAt(str, index, replacement) {
  return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}

function deleteDigit(n) {
  const ar = [];
  const s = n.toString();
  for (let i = 0; i < s.length; i++) {
    ar.push(+replaceAt(s, i, ' ').replace(/\s+/g, ''));
  }
  return Math.max(...ar);
}
module.exports = deleteDigit;
