import type { Predicate, TypeGuardPredicate } from '../types/common';

/**
 * Returns a filtered copy of the array.
 *
 * @param array - The input values.
 * @param predicate - A predicate to apply.
 * @returns A new filtered array.
 */
export function filter<T, S extends T>(array: readonly T[], predicate: TypeGuardPredicate<T, S>): S[];
export function filter<T>(array: readonly T[], predicate: Predicate<T>): T[];
export function filter<T>(array: readonly T[], predicate: Predicate<T>): T[] {
    return array.filter((item, index, current) => predicate(item, index, current));
}
