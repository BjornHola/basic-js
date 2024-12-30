const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('arr parameter must be an instance of the Array!');
  }

  let transformedArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (i < arr.length - 1) {
        i++; 
      }
    } else if (arr[i] === '--discard-prev') {
      if (i > 0) {
        transformedArr = transformedArr.slice(0, transformedArr.length - 1); 
    } else if (arr[i] === '--double-next') {
      if (i < arr.length - 1) {
        transformedArr = transformedArr.concat(arr[i + 1]); 
      }
    } else if (arr[i] === '--double-prev') {
      if (i > 0) {
        transformedArr = transformedArr.concat(arr[i - 1]); 
      }
    } else {
      transformedArr = transformedArr.concat(arr[i]); 
    }
  }

  return transformedArr;
}


console.log(transform([1, 2, 3, '--double-next', 4, 5])); // [1, 2, 3, 4, 4, 5]
console.log(transform([1, 2, 3, '--discard-prev', 4, 5])); // [1, 2, 4, 5]
console.log(transform([1, 2, '--discard-next', 3, 4, 5])); // [1, 2, 4, 5]
console.log(transform([1, 2, '--double-prev', 3, 4, 5])); // [1, 2, 2, 3, 4, 5]


module.exports = {
  transform
};
