const { NotImplementedError } = require('../lib');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
let array = n.toString().split('').map(Number);
  let sum_of_numbers = 0;
  
    while(array.length > 1){
      sum_of_numbers = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      array = [];
      array.push(sum_of_numbers);
      array = sum_of_numbers.toString().split('').map(Number);
    } 
  
  return sum_of_numbers;
}
getSumOfDigits(100);

module.exports = {
  getSumOfDigits
};
