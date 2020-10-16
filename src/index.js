const cardinalToWord = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
};

module.exports = function toReadable (number) {
    if (number === 0) {
        return cardinalToWord[number];
    }
    
    const doubleDigit = number % 100;
    let doubleDigitWord;
    
    if (doubleDigit <= 20) {
        doubleDigitWord = doubleDigit !== 0
            ? cardinalToWord[doubleDigit]
            : ``;

    } else {
        const onesDigit = doubleDigit % 10;
        const onesDigitWord = onesDigit !== 0
            ? cardinalToWord[onesDigit]
            : ``;

        const tensDigit = Math.floor(doubleDigit / 10);
        const tensDigitWord = cardinalToWord[tensDigit * 10];

        doubleDigitWord = `${tensDigitWord} ${onesDigitWord}`;
    }
    
    const hundredsDigit = Math.floor(number / 100);
    const hundredsDigitWord = hundredsDigit !== 0
        ? `${cardinalToWord[hundredsDigit]} hundred`
        : ``;

    const result = `${hundredsDigitWord} ${doubleDigitWord}`;

    return result.trim();
}
