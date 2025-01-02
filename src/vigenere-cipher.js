const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      if (char >= 'A' && char <= 'Z') {
        const m = char.charCodeAt(0) - 65;
        const k = key[keyIndex % key.length].charCodeAt(0) - 65;
        const c = (m + k) % 26;
        result += String.fromCharCode(c + 65);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i];
      if (char >= 'A' && char <= 'Z') {
        const c = char.charCodeAt(0) - 65;
        const k = key[keyIndex % key.length].charCodeAt(0) - 65;
        const m = (c - k + 26) % 26;
        result += String.fromCharCode(m + 65);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}


const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

console.log(directMachine.encrypt('attack at dawn!', 'alphonse')); // 'AEIHQX SX DLLU!'
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')); // 'ATTACK AT DAWN!'

console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse')); // '!ULLD XS XQHIEA'
console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')); // '!NWAD TA KCATTA'


module.exports = {
  VigenereCipheringMachine
};
