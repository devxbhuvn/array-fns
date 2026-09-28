import type { Predicate } from '../types/common';

/** Returns values from the end while a predicate remains true. */
export function takeLastWhile<T>(array: readonly T[], predicate: Predicate<T>): T[] {
    let start = array.length;

    while (start > 0 && predicate(array[start - 1]!, start - 1, array)) {
        start -= 1;
    }

    return array.slice(start);
}
