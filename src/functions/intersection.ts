import { sameValueZero } from '../utils/equality';

/**
 * Returns values that are present in both arrays.
 *
 * Equality is based on JavaScript SameValueZero semantics.
 *
 * @param first - The first array.
 * @param second - The second array.
 * @returns A new array of shared values.
 */
export function intersection<T>(first: readonly T[], second: readonly T[]): T[] {
    const result: T[] = [];

    for (const item of first) {
        if (second.some((candidate) => sameValueZero(item, candidate))) {
            if (!result.some((existing) => sameValueZero(existing, item))) {
                result.push(item);
            }
        }
    }

    return result;
}
