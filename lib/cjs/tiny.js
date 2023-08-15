"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TinyTool = void 0;
class TinyTool {
    map = {
        'A': 'ᴀ',
        'B': 'ʙ',
        'C': 'ᴄ',
        'D': 'ᴅ',
        'E': 'ᴇ',
        'F': 'ꜰ',
        'G': 'ɢ',
        'H': 'ʜ',
        'I': 'ɪ',
        'J': 'ᴊ',
        'K': 'ᴋ',
        'L': 'ʟ',
        'M': 'ᴍ',
        'N': 'ɴ',
        'O': 'ᴏ',
        'P': 'ᴘ',
        'Q': 'Q',
        'R': 'ʀ',
        'S': 'ꜱ',
        'T': 'ᴛ',
        'U': 'ᴜ',
        'V': 'ᴠ',
        'W': 'ᴡ',
        'X': 'x',
        'Y': 'ʏ',
        'Z': 'ᴢ'
        // ... (rest of the map values)
    };
    constructor() {
        this.init();
    }
    init() {
        // invert the map
        for (const key in this.map) {
            this.map[this.map[key]] = key;
        }
    }
    encode(text) {
        let ret = '';
        text = text.toUpperCase();
        for (const char of text) {
            const ch = this.map[char];
            if (typeof ch === "undefined") {
                ret += char;
            }
            else {
                ret += ch;
            }
        }
        return ret;
    }
    decode(text) {
        let ret = '';
        for (const char of text) {
            const ch = this.map[char];
            if (typeof ch === "undefined") {
                ret += char;
            }
            else {
                ret += ch;
            }
        }
        return ret;
    }
}
exports.TinyTool = TinyTool;
