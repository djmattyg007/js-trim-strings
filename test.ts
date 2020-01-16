import { describe, it } from "mocha";
import { assert } from "chai";

import trim from "./src/trim";
import trimStart from "./src/trimStart";
import trimEnd from "./src/trimEnd";

/**
 * Used to check for problems removing whitespace. For a whitespace reference,
 * see V8's unit test: https://code.google.com/p/v8/source/browse/branches/bleeding_edge/test/mjsunit/whitespaces.js
 */
var whitespaceArr = [
  // Basic whitespace characters.
  ' ', '\t', '\x0b', '\f', '\xa0', '\ufeff',
  // Line terminators.
  '\n', '\r', '\u2028', '\u2029',
  // Unicode category "Zs" space separators.
  '\u1680', '\u180e', '\u2000', '\u2001', '\u2002', '\u2003', '\u2004', '\u2005',
  '\u2006', '\u2007', '\u2008', '\u2009', '\u200a', '\u202f', '\u205f', '\u3000'
];
const whitespaceChars = whitespaceArr.filter((char) => /\s/.exec(char)).join("");

describe("trim function", function() {
    it("should remove leading and trailing whitespace", function() {
        const str = whitespaceChars + "a b c" + whitespaceChars;
        const expected = "a b c";
        assert.strictEqual(trim(str), expected);
    });

    it("should remove leading and trailing characters", function() {
        const str1 = "--abc-";
        const expected1 = "abc";
        assert.strictEqual(trim(str1, "-"), expected1);

        const str2 = "-_-a-b_c_-_";
        const expected2 = "a-b_c";
        assert.strictEqual(trim(str2, "_-"), expected2);

        const str3 = "__abc--";
        const expected3 = "__abc";
        assert.strictEqual(trim(str3, "-"), expected3);

        const str4 = "__abc--";
        const expected4 = "abc--";
        assert.strictEqual(trim(str4, "_"), expected4);

        const str5 = "-abc_";
        const expected5 = "-abc_";
        assert.strictEqual(trim(str5, "="), expected5);
    });

    it("should work with empty string values for chars arg", function() {
        const str = "-abc-";
        assert.strictEqual(trim(str, ""), str);
    });
});

describe("trimStart function", function() {
    it("should remove leading whitespace", function() {
        const str = whitespaceChars + "a b c" + whitespaceChars;
        const expected = "a b c" + whitespaceChars;
        assert.strictEqual(trimStart(str), expected);
    });

    it("should remove leading characters", function() {
        const str1 = "--abc-";
        const expected1 = "abc-";
        assert.strictEqual(trimStart(str1, "-"), expected1);

        const str2 = "-_-a-b_c_-_";
        const expected2 = "a-b_c_-_";
        assert.strictEqual(trimStart(str2, "_-"), expected2);

        const str3 = "__abc--";
        const expected3 = "__abc--";
        assert.strictEqual(trimStart(str3, "-"), expected3);

        const str4 = "__abc--";
        const expected4 = "abc--";
        assert.strictEqual(trimStart(str4, "_"), expected4);

        const str5 = "-abc_";
        const expected5 = "-abc_";
        assert.strictEqual(trimStart(str5, "="), expected5);
    });

    it("should work with empty string values for chars arg", function() {
        const str = "-abc-";
        assert.strictEqual(trimStart(str, ""), str);
    });
});

describe("trimEnd function", function() {
    it("should remove trailing whitespace", function() {
        const str = whitespaceChars + "a b c" + whitespaceChars;
        const expected = whitespaceChars + "a b c";
        assert.strictEqual(trimEnd(str), expected);
    });

    it("should remove trailing characters", function() {
        const str1 = "--abc-";
        const expected1 = "--abc";
        assert.strictEqual(trimEnd(str1, "-"), expected1);

        const str2 = "-_-a-b_c_-_";
        const expected2 = "-_-a-b_c";
        assert.strictEqual(trimEnd(str2, "_-"), expected2);

        const str3 = "__abc--";
        const expected3 = "__abc";
        assert.strictEqual(trimEnd(str3, "-"), expected3);

        const str4 = "__abc--";
        const expected4 = "__abc--";
        assert.strictEqual(trimEnd(str4, "_"), expected4);

        const str5 = "-abc_";
        const expected5 = "-abc_";
        assert.strictEqual(trimEnd(str5, "="), expected5);
    });

    it("should work with empty string values for chars arg", function() {
        const str = "-abc-";
        assert.strictEqual(trimEnd(str, ""), str);
    });
});
