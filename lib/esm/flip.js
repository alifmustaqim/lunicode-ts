// flip.ts
export class FlipTool {
    map;
    constructor() {
        this.map = {
            'a': '\u0250',
            'b': 'q',
            'c': '\u0254',
            'd': 'p',
            'e': '\u01DD',
            'f': '\u025F',
            'g': '\u0253',
            'h': '\u0265',
            'i': '\u0131',
            'j': '\u027E',
            'k': '\u029E',
            'l': '\u006C',
            'm': '\u026F',
            'n': 'u',
            'r': '\u0279',
            't': '\u0287',
            'v': '\u028C',
            'w': '\u028D',
            'y': '\u028E',
            'A': '\u2200',
            'B': 'ᙠ',
            'C': '\u0186',
            'D': 'ᗡ',
            'E': '\u018e',
            'F': '\u2132',
            'G': '\u2141',
            'J': '\u017f',
            'K': '\u22CA',
            'L': '\u02e5',
            'M': 'W',
            'P': '\u0500',
            'Q': '\u038C',
            'R': '\u1D1A',
            'T': '\u22a5',
            'U': '\u2229',
            'V': '\u039B',
            'Y': '\u2144',
            '1': '\u21c2',
            '2': '\u1105',
            '3': '\u0190',
            '4': '\u3123',
            '5': '\u078e',
            '6': '9',
            '7': '\u3125',
            '&': '\u214b',
            '.': '\u02D9',
            '"': '\u201e',
            ';': '\u061b',
            '[': ']',
            '(': ')',
            '{': '}',
            '?': '\u00BF',
            '!': '\u00A1',
            "\'": ',',
            '<': '>',
            '\u203E': '_',
            '\u00AF': '_',
            '\u203F': '\u2040',
            '\u2045': '\u2046',
            '\u2234': '\u2235',
            '\r': '\n',
            'ß': 'ᙠ',
            '\u0308': '\u0324',
            'ä': 'ɐ' + '\u0324',
            'ö': 'o' + '\u0324',
            'ü': 'n' + '\u0324',
            'Ä': '\u2200' + '\u0324',
            'Ö': 'O' + '\u0324',
            'Ü': '\u2229' + '\u0324',
            '´': ' \u0317',
            'é': '\u01DD' + '\u0317',
            'á': '\u0250' + '\u0317',
            'ó': 'o' + '\u0317',
            'ú': 'n' + '\u0317',
            'É': '\u018e' + '\u0317',
            'Á': '\u2200' + '\u0317',
            'Ó': 'O' + '\u0317',
            'Ú': '\u2229' + '\u0317',
            '`': ' \u0316',
            'è': '\u01DD' + '\u0316',
            'à': '\u0250' + '\u0316',
            'ò': 'o' + '\u0316',
            'ù': 'n' + '\u0316',
            'È': '\u018e' + '\u0316',
            'À': '\u2200' + '\u0316',
            'Ò': 'O' + '\u0316',
            'Ù': '\u2229' + '\u0316',
            '^': ' \u032E',
            'ê': '\u01DD' + '\u032e',
            'â': '\u0250' + '\u032e',
            'ô': 'o' + '\u032e',
            'û': 'n' + '\u032e',
            'Ê': '\u018e' + '\u032e',
            'Â': '\u2200' + '\u032e',
            'Ô': 'O' + '\u032e',
            'Û': '\u2229' + '\u032e'
        };
        this.init();
    }
    init() {
        for (const i in this.map) {
            if (this.map.hasOwnProperty(i)) {
                this.map[this.map[i]] = i;
            }
        }
    }
    encode(text) {
        const ret = [];
        let ch;
        for (let i = 0, len = text.length; i < len; i++) {
            ch = text.charAt(i);
            // combining diacritical marks: combine with previous character for ä,ö,ü,...
            if (i > 0 && (ch == '\u0324' || ch == '\u0317' || ch == '\u0316' || ch == '\u032e')) {
                ch = this.map[text.charAt(i - 1) + ch];
                ret.pop();
            }
            else {
                ch = this.map[ch];
                if (typeof ch === 'undefined') {
                    ch = text.charAt(i);
                }
            }
            ret.push(ch);
        }
        return ret.reverse().join('');
    }
    decode(text) {
        const ret = [];
        let ch;
        for (let i = 0, len = text.length; i < len; i++) {
            ch = text.charAt(i);
            // combining diacritical marks: combine with previous character for ä,ö,ü,...
            if (i > 0 && (ch == '\u0324' || ch == '\u0317' || ch == '\u0316' || ch == '\u032e')) {
                ch = this.map[text.charAt(i - 1) + ch];
                ret.pop();
            }
            else {
                ch = this.map[ch];
                if (typeof ch === 'undefined') {
                    ch = text.charAt(i);
                }
            }
            ret.push(ch);
        }
        return ret.reverse().join('');
    }
}
