"use strict";
// mirror.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.MirrorTool = void 0;
class MirrorTool {
    map;
    constructor() {
        this.map = {
            'a': 'ɒ',
            'b': 'd',
            'c': 'ɔ',
            'e': 'ɘ',
            'f': 'Ꮈ',
            'g': 'ǫ',
            'h': 'ʜ',
            'j': 'ꞁ',
            'k': 'ʞ',
            'l': '|',
            'n': 'ᴎ',
            'p': 'q',
            'r': 'ɿ',
            's': 'ꙅ',
            't': 'ƚ',
            'y': 'ʏ',
            'z': 'ƹ',
            'B': 'ᙠ',
            'C': 'Ɔ',
            'D': 'ᗡ',
            'E': 'Ǝ',
            'F': 'ꟻ',
            'G': 'Ꭾ',
            'J': 'Ⴑ',
            'K': '⋊',
            'L': '⅃',
            'N': 'Ͷ',
            'P': 'ꟼ',
            'Q': 'Ọ',
            'R': 'Я',
            'S': 'Ꙅ',
            'Z': 'Ƹ',
            '1': '',
            '2': '',
            '3': '',
            '4': '',
            '5': '',
            '6': '',
            '7': '',
            '&': '',
            ';': '',
            '[': ']',
            '(': ')',
            '{': '}',
            '?': '⸮',
            '<': '>',
            'ä': 'ɒ' + '\u0308',
            'ß': 'ᙠ',
            '´': '`',
            'é': 'ɘ' + '\u0300',
            'á': 'ɒ' + '\u0300',
            'ó': 'ò',
            'ú': 'ù',
            'É': 'Ǝ' + '\u0300',
            'Á': 'À',
            'Ó': 'Ò',
            'Ú': 'Ù',
            '`': '´',
            'è': 'ɘ' + '\u0301',
            'à': 'ɒ' + '\u0301',
            'È': 'Ǝ' + '\u0301',
            'ê': 'ɘ' + '\u0302',
            'â': 'ɒ' + '\u0302',
            'Ê': 'Ǝ' + '\u0302',
            'Ø': 'ᴓ',
            'ø': 'ᴓ'
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
        const newLines = [];
        for (let i = 0, len = text.length; i < len; i++) {
            ch = text.charAt(i);
            // combining diacritical marks: combine with previous character for ä,ö,ü,...
            if (i > 0 &&
                (ch == '\u0308' ||
                    ch == '\u0300' ||
                    ch == '\u0301' ||
                    ch == '\u0302')) {
                ch = this.map[text.charAt(i - 1) + ch];
                ret.pop();
            }
            else {
                ch = this.map[ch];
                if (typeof ch === 'undefined') {
                    ch = text.charAt(i);
                }
            }
            if (ch == '\n') {
                newLines.push(ret.reverse().join(''));
                ret.length = 0;
            }
            else {
                ret.push(ch);
            }
        }
        newLines.push(ret.reverse().join(''));
        return newLines.join('\n');
    }
    decode(text) {
        const ret = [];
        let ch;
        const newLines = [];
        for (let i = 0, len = text.length; i < len; i++) {
            ch = text.charAt(i);
            // combining diacritical marks: combine with previous character for ä,ö,ü,...
            if (i > 0 &&
                (ch == '\u0308' ||
                    ch == '\u0300' ||
                    ch == '\u0301' ||
                    ch == '\u0302')) {
                ch = this.map[text.charAt(i - 1) + ch];
                ret.pop();
            }
            else {
                ch = this.map[ch];
                if (typeof ch === 'undefined') {
                    ch = text.charAt(i);
                }
            }
            if (ch == '\n') {
                newLines.push(ret.reverse().join(''));
                ret.length = 0;
            }
            else {
                ret.push(ch);
            }
        }
        newLines.push(ret.reverse().join(''));
        return newLines.join('\n');
    }
}
exports.MirrorTool = MirrorTool;
