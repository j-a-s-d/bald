/* bald framework *\ \* text module */

export default class {

    // CONSTANTS

    static get EMPTY() { return "" }

	static get TAB() { return "\t" }
	static get LF() { return "\n" }
	static get CR() { return "\r" }
	static get SPACE() { return " " }
	static get EQUAL() { return "=" }
	static get NUMERAL() { return "#" }
	static get PIPE() { return "|" }
	static get MINUS() { return "-" }
	static get PLUS() { return "+" }
	static get PERCENT() { return "%" }
	static get DOLLAR() { return "$" }
	static get SLASH() { return "/" }
	static get BACKSLASH() { return "\\" }
	static get AMPERSAND() { return "&" }
	static get ASTERISK() { return "*" }
	static get UNDERSCORE() { return "_" }
	static get COLON() { return ":" }
	static get SEMICOLON() { return ";" }
	static get COMMA() { return "," }
	static get PERIOD() { return "." }
	static get APOSTROPHE() { return "'" }
	static get QUOTE() { return "\"" }
	static get CARET() { return "^" }
	static get TILDE() { return "~" }
	static get AT() { return "@" }
	static get EXCLAMATION() { return "!" }
	static get QUESTION() { return "?" }
	static get INVERTED_EXCLAMATION() { return "¡" }
	static get INVERTED_QUESTION() { return "¿" }
	static get DEGREE() { return "°" }
	static get COPYRIGHT() { return "©" }
	static get REGISTERED() { return "®" }
	static get TRADEMARK() { return "™" }
	static get BULLET() { return "•" }
	static get PILCROW() { return "¶" }
	static get SECTION() { return "§" }
	static get MINOR() { return "<" }
	static get MAJOR() { return ">" }
	static get BRACES_OPEN() { return "{" }
	static get BRACES_CLOSE() { return "}" }
	static get BRACKETS_OPEN() { return "[" }
	static get BRACKETS_CLOSE() { return "]" }
	static get PARENTHESES_OPEN() { return "(" }
	static get PARENTHESES_CLOSE() { return ")" }

	static get NUMBER_ZERO() { return "0" }
	static get NUMBER_ONE() { return "1" }
	static get NUMBER_TWO() { return "2" }
	static get NUMBER_THREE() { return "3" }
	static get NUMBER_FOUR() { return "4" }
	static get NUMBER_FIVE() { return "5" }
	static get NUMBER_SIX() { return "6" }
	static get NUMBER_SEVEN() { return "7" }
	static get NUMBER_EIGHT() { return "8" }
	static get NUMBER_NINE() { return "9" }

	static get UPPERCASE_A() { return "A" }
	static get UPPERCASE_B() { return "B" }
	static get UPPERCASE_C() { return "C" }
	static get UPPERCASE_D() { return "D" }
	static get UPPERCASE_E() { return "E" }
	static get UPPERCASE_F() { return "F" }
	static get UPPERCASE_G() { return "G" }
	static get UPPERCASE_H() { return "H" }
	static get UPPERCASE_I() { return "I" }
	static get UPPERCASE_J() { return "J" }
	static get UPPERCASE_K() { return "K" }
	static get UPPERCASE_L() { return "L" }
	static get UPPERCASE_M() { return "M" }
	static get UPPERCASE_N() { return "N" }
	static get UPPERCASE_O() { return "O" }
	static get UPPERCASE_P() { return "P" }
	static get UPPERCASE_Q() { return "Q" }
	static get UPPERCASE_R() { return "R" }
	static get UPPERCASE_S() { return "S" }
	static get UPPERCASE_T() { return "T" }
	static get UPPERCASE_U() { return "U" }
	static get UPPERCASE_V() { return "V" }
	static get UPPERCASE_W() { return "W" }
	static get UPPERCASE_X() { return "X" }
	static get UPPERCASE_Y() { return "Y" }
	static get UPPERCASE_Z() { return "Z" }

	static get LOWERCASE_A() { return "a" }
	static get LOWERCASE_B() { return "b" }
	static get LOWERCASE_C() { return "c" }
	static get LOWERCASE_D() { return "d" }
	static get LOWERCASE_E() { return "e" }
	static get LOWERCASE_F() { return "f" }
	static get LOWERCASE_G() { return "g" }
	static get LOWERCASE_H() { return "h" }
	static get LOWERCASE_I() { return "i" }
	static get LOWERCASE_J() { return "j" }
	static get LOWERCASE_K() { return "k" }
	static get LOWERCASE_L() { return "l" }
	static get LOWERCASE_M() { return "m" }
	static get LOWERCASE_N() { return "n" }
	static get LOWERCASE_O() { return "o" }
	static get LOWERCASE_P() { return "p" }
	static get LOWERCASE_Q() { return "q" }
	static get LOWERCASE_R() { return "r" }
	static get LOWERCASE_S() { return "s" }
	static get LOWERCASE_T() { return "t" }
	static get LOWERCASE_U() { return "u" }
	static get LOWERCASE_V() { return "v" }
	static get LOWERCASE_W() { return "w" }
	static get LOWERCASE_X() { return "x" }
	static get LOWERCASE_Y() { return "y" }
	static get LOWERCASE_Z() { return "z" }

    // STRINGS

    static isEmptyString(str) {
        "use strict";
        return str === null || typeof str === "undefined" || typeof str === "string" && !str.trim();
    }

    static reverseString(str) {
        "use strict";
        return str.split('').reverse().join('');
    }

    static mapReplace(str, map) {
        "use strict";
        var regex = [];
        for (var key in map) {
            regex.push(key.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"));
        }
        return str.replace(new RegExp(regex.join('|'), "g"), function(word){
            return map[word];
        });
    }

    // JSON

    static isValidJSON(text) {
        "use strict";
        return !this.isEmptyString(text) && (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
            replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
            replace(/(?:^|:|,)(?:\s*\[)+/g, '')));
    }

    static prettify(jsElement) {
        "use strict";
        return window.JSON.stringify(jsElement, null, 4);
    }

    // HTML

    static htmlEncode(value) {
        "use strict";
        return $('<div/>').text(value).html();
    }

    static htmlDecode(value) {
        "use strict";
        return $('<div/>').html(value).text();
    }

    static linkify(text) {
        "use strict";
        if (!this.isEmptyString(text)) {
            return text.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, function (url) {
                return '<a href="' + url + '">' + url + '</a>';
            });
        }
    }

    // HEX

    static stringToHex(str) {
        "use strict";
        var hex = '';
        for (var i = 0; i < str.length; i++) {
            var c = '' + str.charCodeAt(i).toString(16);
            if (c.length < 2) {
                c = "0" + c;
            }
            hex += c;
        }
        return hex;
    }

}