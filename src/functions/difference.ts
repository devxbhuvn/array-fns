import { sameValueZero } from '../utils/equality';

/**
 * Returns the values in the first array that are not in the other arrays.
 *
 * Equality is based on JavaScript SameValueZero semantics.
 *
 * @param array - The source array.
 * @param other - The array of values to exclude.
 * @returns A new array containing values from the first array that are not in the second array.
 */
export function difference<T>(array: readonly T[], other: readonly T[]): T[] {
    const excluded = new Set<T>();

    for (const value of other) {
        excluded.add(value);
    }

    return array.filter((item) => {
        for (const candidate of excluded) {
            if (sameValueZero(item, candidate)) {
                return false;
            }
        }

        return true;
    });
}
