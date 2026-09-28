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

    const sampleCount = Math.min(size, array.length);
    const result = array.slice();

    for (let index = 0; index < sampleCount; index += 1) {
        const swapIndex = index + Math.floor(Math.random() * (result.length - index));
        const current = result[index]!;
        result[index] = result[swapIndex]!;
        result[swapIndex] = current;
    }

    return result.slice(0, sampleCount);
}
