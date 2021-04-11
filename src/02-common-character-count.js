/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const count1 = {};
  const count2 = {};
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] in count1) {
      count1[s1[i]] += 1;
    } else {
      count1[s1[i]] = 1;
    }
  }
  for (let a = 0; a < s2.length; a++) {
    if (s2[a] in count2) {
      count2[s2[a]] += 1;
    } else {
      count2[s2[a]] = 1;
    }
  }
  let num = 0;
  Object.keys(count1).forEach((key) => {
    if (key in count2) {
      num += Math.min(count1[key], count2[key]);
    }
  });
  return num;
}

module.exports = getCommonCharacterCount;
