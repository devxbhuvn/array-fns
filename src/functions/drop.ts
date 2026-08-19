/**
 * Returns an array without the first N elements.
 *
 * @param array - The input values.
 * @param count - The number of items to drop. Must be non-negative.
 * @returns A new array without the first `count` items.
 * @throws {RangeError} If `count` is negative.
 */
export function drop<T>(array: readonly T[], count = 1): T[] {
    if (!Number.isInteger(count) || count < 0) {
        throw new RangeError('count must be a non-negative integer.');
    }

    return array.slice(count);
}
