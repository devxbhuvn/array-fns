import type { Predicate } from '../types/common';

/** Counts items that satisfy a predicate. */
export function countWhere<T>(array: readonly T[], predicate: Predicate<T>): number {
    let total = 0;

    for (let index = 0; index < array.length; index += 1) {
        if (predicate(array[index]!, index, array)) {
            total += 1;
        }
    }

    return total;
}
