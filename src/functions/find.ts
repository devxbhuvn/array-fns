import type { Predicate, TypeGuardPredicate } from '../types/common';

/** Returns the first value that matches a predicate. */
export function find<T, S extends T>(array: readonly T[], predicate: TypeGuardPredicate<T, S>): S | undefined;
export function find<T>(array: readonly T[], predicate: Predicate<T>): T | undefined;
export function find<T>(array: readonly T[], predicate: Predicate<T>): T | undefined {
    for (let index = 0; index < array.length; index += 1) {
        const value = array[index]!;
        if (predicate(value, index, array)) {
            return value;
        }
    }

    return undefined;
}
