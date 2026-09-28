/**
 * Returns values from the first array that are not present in any of the other arrays (SameValueZero).
 */
export function differenceAll<T>(array: readonly T[], ...others: readonly (readonly T[])[]): T[] {
    if (others.length === 0) {
        return [...array];
    }

    const excluded = new Set<T>();
    for (const other of others) {
        for (const item of other) {
            excluded.add(item);
        }
    }

    return array.filter((item) => !excluded.has(item));
}
