/**
 * Returns the lowest index at which `value` should be inserted to maintain ascending order.
 * Assumes `array` is already sorted ascending by SameValueZero-compatible `<` ordering for primitives.
 */
export function sortedIndex<T>(array: readonly T[], value: T): number {
    let low = 0;
    let high = array.length;

    while (low < high) {
        const mid = (low + high) >>> 1;
        if ((array[mid] as never) < (value as never)) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
}
