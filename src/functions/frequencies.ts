import type { Iteratee } from '../types/common';

/**
 * Counts occurrences of each key (or value when no selector is given).
 * Uses `Map` SameValueZero semantics.
 */
export function frequencies<T>(array: readonly T[]): Map<T, number>;
export function frequencies<T, K>(array: readonly T[], selector: Iteratee<T, K>): Map<K, number>;
export function frequencies<T, K>(array: readonly T[], selector?: Iteratee<T, K>): Map<T | K, number> {
    const result = new Map<T | K, number>();

    for (let index = 0; index < array.length; index += 1) {
        const item = array[index]!;
        const key = selector ? selector(item, index, array) : item;
        result.set(key, (result.get(key) ?? 0) + 1);
    }

    return result;
}
