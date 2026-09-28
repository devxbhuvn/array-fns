import type { Predicate } from '../types/common';

/** Drops trailing values while a predicate remains true. */
export function dropLastWhile<T>(array: readonly T[], predicate: Predicate<T>): T[] {
    let end = array.length;

    while (end > 0 && predicate(array[end - 1]!, end - 1, array)) {
        end -= 1;
    }

    return array.slice(0, end);
}
