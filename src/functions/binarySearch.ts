/**
 * Binary search on an ascending sorted array.
 * @returns The index of `value`, or `-1` when absent.
 */
export function binarySearch<T>(array: readonly T[], value: T): number {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        const mid = (low + high) >>> 1;
        const current = array[mid]!;

        if (Object.is(current, value) || current === value) {
            return mid;
        }

        if ((current as never) < (value as never)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}
