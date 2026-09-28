/** Returns true when every value in `subset` is in `array` (SameValueZero). */
export function isSubset<T>(subset: readonly T[], array: readonly T[]): boolean {
    const set = new Set(array);
    return subset.every((value) => set.has(value));
}
