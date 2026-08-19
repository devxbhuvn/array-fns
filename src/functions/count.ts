import type { Predicate } from '../types/common';

/**
 * Counts the number of items in an array that satisfy a predicate.
 *
 * @param array - The input values.
 * @param predicate - A predicate used to determine matching values.
 * @returns The number of matching values.
 */
export function count<T>(array: readonly T[], predicate: Predicate<T> = () => true): number {
    return array.reduce((total, item, index, current) => {
        return total + (predicate(item, index, current) ? 1 : 0);
    }, 0);
}
