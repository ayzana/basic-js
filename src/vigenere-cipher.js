const { NotImplementedError } = require('../lib');

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

  _process(message, key, isEncrypting) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < upperMessage.length; i++) {
      const char = upperMessage[i];
      const charIndex = alphabet.indexOf(char);
      if (charIndex === -1) {
        result += char;
      } else {
        const keyChar = upperKey[keyIndex % upperKey.length];
        const keyCharIndex = alphabet.indexOf(keyChar);
        
        let processedIndex;
        if (isEncrypting) {
          processedIndex = (charIndex + keyCharIndex) % alphabet.length;
        } else {
          processedIndex = (charIndex - keyCharIndex + alphabet.length) % alphabet.length;
        }

        result += alphabet[processedIndex];
        keyIndex++;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  encrypt(message, key) {
    return this._process(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    return this._process(encryptedMessage, key, false);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
