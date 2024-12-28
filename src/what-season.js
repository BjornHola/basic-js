const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined || date === null) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth();

  if (month <= 1 && month === 11){
    return 'winter';
  } 
  else if (month > 1 && month <= 4 && month !== 11){
    return 'spring';
  }
  else if (month > 4 && month <= 7 && month !== 11){
    return 'summer';
  }
  else if (month > 7 && month <= 10 && month !== 11){
    return 'autumn';
  }
console.log(getSeason(new Date(2020, 2, 31))); 


module.exports = {
  getSeason
};
