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
function whatSeason(date) {
  if (!date || Object.prototype.toString.call(date) !== '[object Date]' || isNaN(date)) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();

  if (month === 11 || month === 0 || month === 1) {
    return 'winter';
  } else if (month >= 2 && month <= 4) {
    return 'spring';
  } else if (month >= 5 && month <= 7) {
    return 'summer';
  } else if (month >= 8 && month <= 10) {
    return 'autumn';
  } else {
    throw new Error('Invalid date!');
  }
}

console.log(getSeason(new Date(2020, 2, 31))); 
try {
  console.log(getSeason(new Date('invalid date')));
} catch (error) {
  console.error(error.message);
}


module.exports = {
  getSeason
};