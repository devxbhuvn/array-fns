import type { Predicate } from '../types/common';

/**
 * Returns the index of the first element that matches the predicate.
 *
 * @param array - The input values.
 * @param predicate - The predicate to evaluate.
 * @param fromIndex - The index to start searching from. Supports negative values.
 * @returns The index of the first match or `-1` when no match is found.
 */
export function findIndex<T>(array: readonly T[], predicate: Predicate<T>, fromIndex = 0): number {
    const normalizedIndex = Number.isNaN(fromIndex) ? 0 : Math.trunc(fromIndex);
    const start = normalizedIndex < 0 ? array.length + normalizedIndex : normalizedIndex;

    if (start < 0 || start >= array.length) {
        return -1;
    }

    for (let index = start; index < array.length; index += 1) {
        const item = array[index]!;
        if (predicate(item, index, array)) {
            return index;
        }
    }

    return -1;
}
