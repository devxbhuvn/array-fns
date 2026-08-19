import type { Predicate } from '../types/common';

/** Returns values after the initial values that match a predicate. */
export function dropWhile<T>(array: readonly T[], predicate: Predicate<T>): T[] {
    let start = 0;

    while (start < array.length && predicate(array[start]!, start, array)) {
        start += 1;
    }

    return array.slice(start);
}
