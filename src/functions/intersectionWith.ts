import type { EqualityComparator } from '../types/common';
import { includesWith } from '../utils/setOps';

/** Returns unique values from `first` that match something in `second` under `comparator`. */
export function intersectionWith<T>(first: readonly T[], second: readonly T[], comparator: EqualityComparator<T>): T[] {
    const result: T[] = [];

    for (const item of first) {
        if (includesWith(second, item, comparator) && !includesWith(result, item, comparator)) {
            result.push(item);
        }
    }

    return result;
}
