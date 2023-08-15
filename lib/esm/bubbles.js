export class BubblesTool {
    map;
    mapInverse;
    constructor() {
        this.map = {};
        this.mapInverse = {};
        this.init();
    }
    init() {
        // Numbers
        for (let i = 49; i <= 57; i++) {
            this.map[String.fromCharCode(i)] = String.fromCharCode(i + 9263);
        }
        this.map['0'] = '\u24ea';
        // Capital letters
        for (let i = 65; i <= 90; i++) {
            this.map[String.fromCharCode(i)] = String.fromCharCode(i + 9333);
        }
        // Lower letters
        for (let i = 97; i <= 122; i++) {
            this.map[String.fromCharCode(i)] = String.fromCharCode(i + 9327);
        }
        // Invert the map
        for (const key in this.map) {
            if (this.map.hasOwnProperty(key)) {
                this.mapInverse[this.map[key]] = key;
            }
        }
    }
    encode(text) {
        let ret = '';
        let ch;
        let first = true;
        for (const char of text) {
            ch = this.map[char];
            // No dedicated circled character available? Use a Combining Diacritical Mark surrounded
            // with non-breaking spaces, so it doesn't overlap
            if (typeof ch === 'undefined') {
                if (char.charCodeAt(0) >= 33) {
                    ch = char + String.fromCharCode(8413);
                    if (!first) {
                        ch =
                            String.fromCharCode(8239) +
                                String.fromCharCode(160) +
                                String.fromCharCode(160) +
                                String.fromCharCode(8239) +
                                ch;
                    }
                }
                else {
                    ch = char;
                }
            }
            ret += ch;
            first = ch === '\n';
        }
        return ret;
    }
    decode(text) {
        let ret = '';
        let ch;
        let newRet = '';
        for (const char of text) {
            ch = this.mapInverse[char];
            ret += typeof ch === 'undefined' ? char : ch;
        }
        for (const char of ret) {
            ch = char.charCodeAt(0);
            if (ch != 160 && ch != 8239 && ch != 8413) {
                newRet += char;
            }
        }
        return newRet;
    }
}
