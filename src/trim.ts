import stringToArray from "./_internal/stringToArray";
import { charsStartIndex, charsEndIndex } from "./_internal/charsIndex";

export default function trim(str: string, chars?: string): string {
    if (str && chars === undefined) {
        return str.trim();
    }

    if (!str || !chars) {
        return (str || "");
    }

    const strSymbols = stringToArray(str);
    const chrSymbols = stringToArray(chars);
    const start = charsStartIndex(strSymbols, chrSymbols);
    const end = charsEndIndex(strSymbols, chrSymbols) + 1;

    return strSymbols.slice(start, end).join("");
}
