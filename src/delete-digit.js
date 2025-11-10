const { NotImplementedError } = require('../lib');

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
function deleteDigit(n) {
if (n < 0){
    n = Math.abs(n);
  }

  let input = n.toString().split('');
  let maxNumber = -Infinity;

  for(i = 0; i < input.length; i++){
    const result = parseInt(input.slice(0, i).join('') + input.slice(i + 1).join('')); 
    if (result > maxNumber) {
      maxNumber = result;
    }
  }
  
  return maxNumber;
}
deleteDigit(152);
module.exports = {
  deleteDigit
};
