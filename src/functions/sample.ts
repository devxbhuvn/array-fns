/**
 * Returns a random element from an array.
 *
 * @param array - The input values.
 * @returns A random item or `undefined` when the array is empty.
 */
export function sample<T>(array: readonly T[]): T | undefined {
    if (array.length === 0) {
        return undefined;
    }

    return array[Math.floor(Math.random() * array.length)];
}
