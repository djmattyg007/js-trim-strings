export function charsStartIndex(strSymbols: string[], chrSymbols: string[]): number {
    let index = -1;
    const length = strSymbols.length;

    while (++index < length && chrSymbols.includes(strSymbols[index])) {}

    return index;
}

export function charsEndIndex(strSymbols: string[], chrSymbols: string[]): number {
    let index = strSymbols.length;

    while (index-- && chrSymbols.includes(strSymbols[index])) {}

    return index;
}
