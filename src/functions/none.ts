import type { Predicate } from '../types/common';

/** Returns true when no value matches the predicate. */
export function none<T>(array: readonly T[], predicate: Predicate<T>): boolean {
    for (let index = 0; index < array.length; index += 1) {
        if (predicate(array[index]!, index, array)) {
            return false;
        }
    }

    return true;
}
