const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const filtered =  matrix.flat().filter(item => item === '^^' );
  return filtered.length;
}
countCats([
 [0, 1, '^^'],
 [0, '^^', 2],
 ['^^', 1, 2]
 ]);


module.exports = {
  countCats
};
