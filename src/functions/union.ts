/**
 * Returns unique values from multiple arrays in order of appearance.
 *
 * @param arrays - Arrays to merge.
 * @returns A new array of unique values.
 */
export function union<T>(...arrays: ReadonlyArray<readonly T[]>): T[] {
    const result: T[] = [];
    const seen = new Set<T>();

    for (const array of arrays) {
        for (const item of array) {
            if (!seen.has(item)) {
                seen.add(item);
                result.push(item);
            }
        }
    }

    return result;
}
