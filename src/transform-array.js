const { NotImplementedError } = require('../lib');

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
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const copy = arr;
  for(let i = 0; i <= copy.length; i += 1) {
    if (typeof copy[i] === "string"){
      switch(copy[i]){

        case '--double-next':
          if(copy[i + 1]) {
          let valueNext = copy[i + 1];
          let newElem = valueNext;
          copy.splice(i, copy[i], newElem);
          return copy;
          } else {
            return copy;
          }
          
        case '--double-prev':
          if (copy[i - 1]) {
            let valuePrev = copy[i - 1];
            let newElem = valuePrev;
            copy.splice(i, copy[i], newElem);
            return copy;
          } else return copy;
        
        case "--discard-prev":
          if (copy[i -1]) {
            return copy.splice(copy[i -1], 2);
          } else return copy;

        case "--discard-next":
          if (copy[i + 1]) {
            return copy.splice(copy[i], 2);
          } else return copy;

        default:
          return copy;
      }
    }
  }
}

module.exports = {
  transform
};
