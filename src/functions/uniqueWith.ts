import type { EqualityComparator } from '../types/common';
import { includesWith } from '../utils/setOps';

/** Removes duplicates using a custom equality comparator. */
export function uniqueWith<T>(array: readonly T[], comparator: EqualityComparator<T>): T[] {
    const result: T[] = [];

    for (const item of array) {
        if (!includesWith(result, item, comparator)) {
            result.push(item);
        }
    }

    return result;
}
