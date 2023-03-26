/**
 * Used Caesar Cipher encryption algorithm with a default but could be dynamic shift
 * Supports English words and Numbers
 * @param {string} Info Information needs to be encrypted
 * @param {number} Shift Shift value of Caesar Cipher encryption, default 4
 */
function encryptInfo(text, shift = 4) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i) - 65;
            code = (code + shift) % 26;
            result += String.fromCharCode(code + 65);
        } else if (char.match(/[0-9]/i)) {
            let code = parseInt(char, 10);
            code = (code + shift) % 10;
            result += code.toString();
        } else {
            result += char;
        }
    }
    return result;
}

module.exports = encryptInfo;
