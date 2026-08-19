/** Returns the first index of a value, or -1 when it is absent. */
export function indexOf<T>(array: readonly T[], search: T, fromIndex = 0): number {
    const normalizedIndex = Number.isNaN(fromIndex) ? 0 : Math.trunc(fromIndex);
    const start = normalizedIndex < 0 ? Math.max(array.length + normalizedIndex, 0) : normalizedIndex;

    for (let index = Math.max(start, 0); index < array.length; index += 1) {
        if (array[index] === search) {
            return index;
        }
    }

    return -1;
}
