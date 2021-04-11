/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) {
    return '';
  }
  const ar = str.match(/(.)\1+|(.)\1/g);
  let res = '';
  for (let i = 0; i < ar.length; i++) {
    res += ar[i].length + ar[i][0];
  }
  return res.replace(/1/g, '');
}
module.exports = encodeLine;
