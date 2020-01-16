import stringToArray from "./_internal/stringToArray";
import { charsEndIndex } from "./_internal/charsIndex";

export default function trimEnd(str: string, chars?: string): string {
    if (str && chars === undefined) {
        return str.trimEnd();
    }

    if (!str || !chars) {
        return (str || "");
    }

    const strSymbols = stringToArray(str);
    const end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
    return strSymbols.slice(0, end).join("");
}
