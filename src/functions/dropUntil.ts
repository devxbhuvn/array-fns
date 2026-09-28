import type { Predicate } from '../types/common';

/** Drops values until the predicate returns true, then returns the remainder including the match. */
export function dropUntil<T>(array: readonly T[], predicate: Predicate<T>): T[] {
    for (let index = 0; index < array.length; index += 1) {
        if (predicate(array[index]!, index, array)) {
            return array.slice(index);
        }
    }

    return [];
}
