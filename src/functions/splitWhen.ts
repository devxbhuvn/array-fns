import type { Predicate } from '../types/common';

/** Splits at the first index where the predicate is true. */
export function splitWhen<T>(array: readonly T[], predicate: Predicate<T>): [T[], T[]] {
    for (let index = 0; index < array.length; index += 1) {
        if (predicate(array[index]!, index, array)) {
            return [array.slice(0, index), array.slice(index)];
        }
    }

    return [[...array], []];
}
