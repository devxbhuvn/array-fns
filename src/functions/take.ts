/**
 * Returns the first N items from the array.
 *
 * @param array - The input values.
 * @param count - The number of values to take. Must be non-negative.
 * @returns A new array containing the first `count` items.
 * @throws {RangeError} If `count` is negative or not an integer.
 */
export function take<T>(array: readonly T[], count = 1): T[] {
    if (!Number.isInteger(count) || count < 0) {
        throw new RangeError('count must be a non-negative integer.');
    }

    return array.slice(0, count);
}
