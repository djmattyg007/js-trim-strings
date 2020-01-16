function strictIndexOf(chrSymbols: string[], chr: string): number {
    let index = -1;
    const { length } = chrSymbols;

    while (++index < length) {
        if (chrSymbols[index] === chr) {
            return index;
        }
    }

    return -1;
}

export function charsStartIndex(strSymbols: string[], chrSymbols: string[]): number {
    let index = -1;
    const length = strSymbols.length;

    while (++index < length && strictIndexOf(chrSymbols, strSymbols[index]) > -1) {}
    return index;
}

export function charsEndIndex(strSymbols: string[], chrSymbols: string[]): number {
    let index = strSymbols.length;

    while (index-- && strictIndexOf(chrSymbols, strSymbols[index]) > -1) {}
    return index;
}
