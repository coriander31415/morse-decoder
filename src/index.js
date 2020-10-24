const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '**********': ' '
};

function decode(expr) {
    let letters = []; // array of encoded letters 
    let decoded = []; // array of decoded letters

    // collect encoded letters from expr
    for (let i = 0; i < expr.length - 1; i += 10) {
        letters.push(expr.slice(i, i + 10));
    }

    // decode encoded letters
    decoded = letters.map(encoded =>
        MORSE_TABLE[encoded
            .replace(/00/g, '')
            .replace(/10/g, '.')
            .replace(/11/g, '-')]);

    // return decoded concatenated string
    return decoded.join('');
}

module.exports = {
    decode
}