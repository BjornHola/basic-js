const { NotImplementedError } = require('../lib');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks кол-во дисков
 * @param {Number} turnsSpeed speed (in turns/hour) скорость об/час
 * @return {Object} object with props turns (number of turns) кол-во об + сек
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
     const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor((turns * 3600) / turnsSpeed);
  return { turns, seconds };
}

calculateHanoi(9, 4308);
module.exports = {
  calculateHanoi
};
