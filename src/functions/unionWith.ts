import type { EqualityComparator } from '../types/common';
import { includesWith } from '../utils/setOps';

/** Merges arrays using a custom equality comparator. */
export function unionWith<T>(comparator: EqualityComparator<T>, ...arrays: ReadonlyArray<readonly T[]>): T[] {
    const result: T[] = [];

    for (const array of arrays) {
        for (const item of array) {
            if (!includesWith(result, item, comparator)) {
                result.push(item);
            }
        }
    }

    return result;
}
