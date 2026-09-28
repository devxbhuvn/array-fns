import type { Predicate } from '../types/common';

/** Returns `[prefix, rest]` where prefix is the longest takeWhile run. */
export function span<T>(array: readonly T[], predicate: Predicate<T>): [T[], T[]] {
    let index = 0;

    while (index < array.length && predicate(array[index]!, index, array)) {
        index += 1;
    }

    return [array.slice(0, index), array.slice(index)];
}
