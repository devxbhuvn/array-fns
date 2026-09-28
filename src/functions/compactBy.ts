import type { Predicate } from '../types/common';

/** Removes values for which the predicate returns true. */
export function compactBy<T>(array: readonly T[], predicate: Predicate<T>): T[] {
    const result: T[] = [];

    for (let index = 0; index < array.length; index += 1) {
        const item = array[index]!;
        if (!predicate(item, index, array)) {
            result.push(item);
        }
    }

    return result;
}
