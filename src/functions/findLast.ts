import type { Predicate } from '../types/common';

/** Returns the last value that matches a predicate. */
export function findLast<T>(array: readonly T[], predicate: Predicate<T>): T | undefined {
    for (let index = array.length - 1; index >= 0; index -= 1) {
        const value = array[index]!;
        if (predicate(value, index, array)) {
            return value;
        }
    }

    return undefined;
}
