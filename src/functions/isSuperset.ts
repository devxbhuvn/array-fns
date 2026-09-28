/** Returns true when `array` contains every value in `subset` (SameValueZero). */
export function isSuperset<T>(array: readonly T[], subset: readonly T[]): boolean {
    const set = new Set(array);
    return subset.every((value) => set.has(value));
}
