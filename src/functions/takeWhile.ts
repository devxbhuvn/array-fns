import type { Predicate } from '../types/common';

/** Returns values from the start while a predicate remains true. */
export function takeWhile<T>(array: readonly T[], predicate: Predicate<T>): T[] {
    let end = 0;

    while (end < array.length && predicate(array[end]!, end, array)) {
        end += 1;
    }

    return array.slice(0, end);
}
