/**
 * Returns the first element of an array, or `undefined` for an empty array.
 *
 * @param array - The input values.
 * @returns The first value, or `undefined`.
 */
export function first<T>(array: readonly T[]): T | undefined {
    return array[0];
}
