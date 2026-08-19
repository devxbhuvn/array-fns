import type { Predicate } from '../types/common';

/** Returns true when at least one value matches a predicate. */
export function some<T>(array: readonly T[], predicate: Predicate<T>): boolean {
    for (let index = 0; index < array.length; index += 1) {
        if (predicate(array[index]!, index, array)) {
            return true;
        }
    }

    return false;
}
