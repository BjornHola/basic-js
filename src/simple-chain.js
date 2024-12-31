const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = { 
  chain: [],

  getLength() {
    return this.chain.length;
      },
  addLink(value = '') {
    this.chain.push(`( ${value} )`);
    return this;
      },
  removeLink(position) {
    if (!Number.isInteger(position) || Number.isNaN(position) || position < 0 || position > this.chain.length){
      this.chain = [];
      throw new Error ('You can\'t remove incorrect link!');
    } 
    this.chain.splice(position - 1, 1)
      return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
      },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
      }
}

console.log(chainMaker.addLink(1).addLink(2).addLink(3).finishChain()); // '( 1 )~~( 2 )~~( 3 )'
console.log(chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain()); // '( 2 )~~( 3 )'
console.log(chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain()); // '( 2 )~~( 1 )~~( 3 )'

module.exports = {
  chainMaker
};
