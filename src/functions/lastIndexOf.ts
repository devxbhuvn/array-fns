/** Returns the last index of a value, or -1 when it is absent. */
export function lastIndexOf<T>(array: readonly T[], search: T, fromIndex = array.length - 1): number {
    let start = Math.trunc(fromIndex);
    if (start < 0) {
        start = array.length + start;
    }

    for (let index = Math.min(start, array.length - 1); index >= 0; index -= 1) {
        if (array[index] === search) {
            return index;
        }
    }

    return -1;
}
