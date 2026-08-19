/**
 * Returns the last element of an array or `undefined` if the array is empty.
 *
 * @param array - The input values.
 * @returns The final value, or `undefined`.
 */
export function last<T>(array: readonly T[]): T | undefined {
    return array[array.length - 1];
}
