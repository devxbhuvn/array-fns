import type { Predicate } from '../types/common';

/** Returns the last index that matches a predicate, or -1. */
export function findLastIndex<T>(array: readonly T[], predicate: Predicate<T>): number {
    for (let index = array.length - 1; index >= 0; index -= 1) {
        if (predicate(array[index]!, index, array)) {
            return index;
        }
    }

    return -1;
}
