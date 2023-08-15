"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoundSquaresTool = void 0;
class RoundSquaresTool {
    encode(text) {
        let ret = '';
        let ch;
        let first = true;
        for (const char of text) {
            if (char.charCodeAt(0) >= 33) {
                ch = char + String.fromCharCode(8419);
                if (!first) {
                    ch = String.fromCharCode(160) + String.fromCharCode(160) + String.fromCharCode(160) + ch;
                }
            }
            else {
                ch = char;
            }
            ret += ch;
            first = ch === '\n';
        }
        return ret;
    }
    decode(text) {
        let ret = '';
        let ch;
        for (const char of text) {
            ch = char.charCodeAt(0);
            if (ch != 160 && ch != 8239 && ch != 8419) {
                ret += char;
            }
        }
        return ret;
    }
}
exports.RoundSquaresTool = RoundSquaresTool;
