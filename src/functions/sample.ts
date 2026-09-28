import type { RandomSource } from '../types/common';

/**
 * Returns a random element from an array.
 *
 * @param array - The input values.
 * @param random - Optional RNG returning a float in `[0, 1)`.
 * @returns A random item or `undefined` when the array is empty.
 */
export function sample<T>(array: readonly T[], random: RandomSource = Math.random): T | undefined {
    if (array.length === 0) {
        return undefined;
    }

    return array[Math.floor(random() * array.length)];
}
