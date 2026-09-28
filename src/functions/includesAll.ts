/** Returns true when every search value is in the array (SameValueZero). */
export function includesAll<T>(array: readonly T[], values: readonly T[]): boolean {
    const set = new Set(array);
    return values.every((value) => set.has(value));
}
