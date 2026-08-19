/**
 * Returns a random sample of size `n` from the array.
 *
 * @param array - The input values.
 * @param size - The number of items to sample. Must be a non-negative integer.
 * @returns A new array containing up to `size` values in random order.
 * @throws {RangeError} If `size` is negative or not an integer.
 */
export function sampleSize<T>(array: readonly T[], size: number): T[] {
    if (!Number.isInteger(size) || size < 0) {
        throw new RangeError('size must be a non-negative integer.');
    }

    if (size === 0 || array.length === 0) {
        return [];
    }

    const result = [...array];
    const sampleCount = Math.min(size, result.length);

    for (let index = result.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        const current = result[index]!;
        const swap = result[swapIndex]!;
        result[index] = swap;
        result[swapIndex] = current;
    }

    return result.slice(0, sampleCount);
}
