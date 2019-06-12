var splitter = {
    'A': '∀',
    '∀': 'A',
    'B': 'ᗺ',
    'ᗺ': 'B',
    'C': 'Ɔ',
    'Ɔ': 'C',
    'D': 'ᗡ',
    'ᗡ': 'D',
    'E': '∃',
    '∃': 'E',
    'F': 'Ⅎ',
    'Ⅎ': 'F',
    'G': 'פ',
    'פ': 'G',
    'J': 'ſ',
    'ſ': 'J',
    'L': '˥',
    '˥': 'L',
    'M': 'ꟽ',
    'ꟽ': 'M',
    'W': '𐲮',
    '𐲮': 'W',
    'P': 'Ԁ',
    'Ԁ': 'P',
    'Q': 'Ò',
    'Ò': 'Q',
    'R': 'ꓤ',
    'ꓤ': 'R',
    'T': '┴',
    '┴': 'T',
    'U': '∩',
    '∩': 'U',
    'V': 'Λ',
    'Λ': 'V',
    'Y': '⅄',
    '⅄': 'Y',
    'ä': '&#x0250;&#x0324;',
    'ö': 'o&#x0324;',
    'o̤': 'ö',
    'ü': 'n&#x0324;',
    '&#x0308;': '&#x0324;',
    '&#x0324;': '&#x0308',
    'a': '&#x0250;',
    'ɐ': 'a',
    'ă': 'ɐ̯',
    'ɐ̯': 'ă',
    'b': 'q',
    'c': '&#x0254;',
    'ɔ': 'c',
    'd': 'p',
    'e': '&#x01DD;',
    'ë': '&#x01DD;&#x0324;',
    'é': 'ǝ̗',
    'ǝ': 'e',
    'ǝ̤': 'ë',
    'ǝ̗': 'é',
    'f': '&#x025F;',
    'ɟ': 'f',
    'g': '&#x0253;',
    'ɓ': 'g',
    '<': '>',
    '>': '<',
    'h': '&#x0265;',
    'ɥ': 'h',
    'i': '&#x0131;&#x0323;',
    'ı̣': 'i',
    'ï': '&#x0131;&#x0324;',
    'j': 'ɾ&#x0323;',
    'ɾ̣': 'j',
    //'j': '&#x0638;',
    'k': '&#x029E;',
    'ʞ': 'k',
    'l': '&#x05DF;',
    'ן': 'l',
    'L': '⅂',
    'm': '&#x026F;',
    'ɯ': 'm',
    'n': 'u',
    'ñ': 'ṵ',
    'ṵ': 'ñ',
    'o': 'o',
    'p': 'd',
    'q': 'b',
    'r': '&#x0279;',
    'ɹ': 'r',
    's': 's',
    'ș': 's̒',
    's̒': 'ș',
    'ś': 'ş',
    'ş': 'ś',
    'Ś': 'Ş',
    'Ş': 'Ś',
    't': '&#x0287;',
    'ʇ': 't',
    'ț': 'ʇ̒',
    'ʇ̒': 'ț',
    'u': 'n',
    'v': '&#x028C;',
    'ʌ': 'v',
    'w': 'ʍ',
    'ʍ': 'w',
    'x': 'x',
    'y': '&#x028E;',
    'ʎ': 'y',
    'z': 'z',
    '[': ']',
    ']': '[',
    '(': ')',
    ')': '(',
    '{': '}',
    '}': '{',
    '?': '&#x00BF;',
    '&#x00BF;': '?',
    '!': '&#x00A1;',
    '&#x00A1;': '!',
    '\\': ',',
    ',': '\'',
    '.': '&#x02D9;',
    '_': '&#x203E;',
    ';': '&#x061B;',
    '9': '6',
    '6': '9',
    '3': '&#x03B5;',
    '&#x03B5': '3',
    '）': '&#xFF08',
    '（': '&#xFF09',
    '╯': '╭',
    '╭': '╯',
    '°': '˳',
    '˳': '°',
    '┳': '┻',
    '┻': '┳'
};

function getSymbols(string) {
    var length = string.length;
    var index = -1;
    var output = [];
    var character;
    var charCode;
    var previous;
    while (++index < length) {
        character = string.charAt(index);
        charCode = character.charCodeAt(0);
        if (charCode >= 0xD800 && charCode <= 0xDBFF || charCode >= 0x0300 && charCode <= 0x036F || charCode >= 0x1AB0 && charCode <= 0x1AFF || charCode >= 0x1DC0 && charCode <= 0x1DFF || charCode >= 0x20D0 && charCode <= 0x20FF || charCode >= 0xFE20 && charCode <= 0xFE2F) {
      // note: this doesn't account for lone high surrogates
            previous = output.pop();
            output.push(previous + character);
        } else {
            output.push(character);
        }
    }
    return output;
}

function flip(string) {
    result = '';
    getSymbols(string).forEach(function(symbol) {
        if (symbol in splitter) symbol = splitter[symbol];
        else if (symbol.length == 2) {
            console.log(symbol[0]);
            console.log(symbol[1]);
            var temp = '';
            if (symbol[0] in splitter) {
                temp = splitter[symbol[0]];
            } else {
                temp = symbol[0];
            }
            if (symbol[1] in splitter) {
                temp += splitter[symbol[1]];
            } else {
                temp = symbol[1];
            }
            symbol = temp;
        }
        console.log(symbol);
        result = symbol +  result;
    });
    return result;
}
