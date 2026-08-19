import type { Predicate } from '../types/common';

/**
 * Splits an array into two arrays based on a predicate.
 *
 * @param array - The input values.
 * @param predicate - The predicate to evaluate.
 * @returns A tuple containing the matching values and the non-matching values.
 */
export function partition<T>(array: readonly T[], predicate: Predicate<T>): [T[], T[]] {
    const passed: T[] = [];
    const failed: T[] = [];

    for (let index = 0; index < array.length; index += 1) {
        const item = array[index]!;

        if (predicate(item, index, array)) {
            passed.push(item);
        } else {
            failed.push(item);
        }
    }

    return [passed, failed];
}
