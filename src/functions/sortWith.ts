import type { Comparator } from '../types/common';

/** Returns a sorted copy using one or more explicit comparators. */
export function sortWith<T>(array: readonly T[], ...comparators: Comparator<T>[]): T[] {
    if (comparators.length === 0) {
        return [...array];
    }

    return array
        .map((value, index) => ({ value, index }))
        .sort((left, right) => {
            for (const comparator of comparators) {
                const comparison = comparator(left.value, right.value);
                if (comparison !== 0) {
                    return comparison;
                }
            }

            return left.index - right.index;
        })
        .map((entry) => entry.value);
}
