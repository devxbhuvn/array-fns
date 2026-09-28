/** Returns true when any search value is in the array (SameValueZero). */
export function includesAny<T>(array: readonly T[], values: readonly T[]): boolean {
    const set = new Set(array);
    return values.some((value) => set.has(value));
}
