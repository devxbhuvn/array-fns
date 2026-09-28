import type { Predicate } from '../types/common';

/**
 * Returns a copy with the first matching item replaced by `replacement`
 * (value or updater). If nothing matches, returns a shallow copy.
 */
export function replace<T>(array: readonly T[], predicate: Predicate<T>, replacement: T | ((value: T, index: number, array: readonly T[]) => T)): T[] {
    const result = array.slice();

    for (let index = 0; index < result.length; index += 1) {
        const value = result[index]!;
        if (predicate(value, index, array)) {
            result[index] = typeof replacement === 'function' ? (replacement as (value: T, index: number, array: readonly T[]) => T)(value, index, array) : replacement;
            break;
        }
    }

    return result;
}
