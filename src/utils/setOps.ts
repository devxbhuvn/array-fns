import { sameValueZero } from './equality';

/** Returns true when `array` contains `value` using the provided equality function. */
export function includesWith<T>(array: readonly T[], value: T, comparator: (a: T, b: T) => boolean): boolean {
    for (const candidate of array) {
        if (comparator(candidate, value)) {
            return true;
        }
    }

    return false;
}

/** SameValueZero membership check using Set (O(1) average). */
export function toSameValueZeroSet<T>(values: readonly T[]): Set<T> {
    return new Set(values);
}

/** Returns true when two values are equal under SameValueZero. */
export { sameValueZero };
