import stringToArray from "./_internal/stringToArray";
import { charsStartIndex } from "./_internal/charsIndex";

export default function trimStart(str: string, chars?: string): string {
    if (str && chars === undefined) {
        return str.trimStart();
    }

    if (!str || !chars) {
        return (str || "");
    }

    const strSymbols = stringToArray(str);
    const start = charsStartIndex(strSymbols, stringToArray(chars));
    return strSymbols.slice(start).join("");
    //return castSlice(strSymbols, start).join("");
}
