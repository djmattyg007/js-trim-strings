import { hasUnicode, unicodeToArray } from "./unicode";

/**
 * Converts an ASCII string to an array.
 *
 * @private
 * @param {string} str The string to convert.
 * @returns {string[]} Returns the converted array.
 */
function asciiToArray(str: string): string[] {
  return str.split("");
}

/**
 * Converts `str` to an array.
 *
 * @private
 * @param {string} str The string to convert.
 * @returns {Array} Returns the converted array.
 */
export default function stringToArray(str: string): string[] {
    return hasUnicode(str) ? unicodeToArray(str) : asciiToArray(str);
}
