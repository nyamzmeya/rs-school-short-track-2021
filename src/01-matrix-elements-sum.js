/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 *
 *
 */

function col(mat, index) {
  const ar = [];
  for (let a = 0; a < mat.length; a++) {
    ar.push(mat[a][index]);
  }
  return ar;
}

function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let a = 0; a < matrix[0].length; a++) {
    const ar = col(matrix, a);
    for (let i = 1; i !== ar.length; i++) {
      if (ar[i - 1] !== 0 && ar[i] !== 0 && ar[i + 1] !== 0) {
        sum += (ar[i - 1]);
        sum += (ar[i]);
        sum += (ar[i + 1]);
        i++;
      } else if (ar[i - 1] !== 0 && ar[i] !== 0 && ar[i + 1] === 0) {
        sum += (ar[i - 1]);
        sum += (ar[i]);
        i++;
      } else if (ar[i - 1] !== 0 && ar[i] === 0) {
        sum += (ar[i - 1]);
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
