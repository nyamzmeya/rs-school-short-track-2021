/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let end = array.length - 1;
  let begin = 0;
  let index = -1;
  while (index === -1) {
    const middle = Math.floor((begin + end) / 2);
    if (array[middle] === value) {
      index = middle;
    } else if (array[middle] < value) {
      begin = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return index;
}

module.exports = findIndex;
