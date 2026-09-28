import type { EqualityComparator } from '../types/common';
import { includesWith } from '../utils/setOps';

/** Returns values from `array` not matching any value in `other` under `comparator`. */
export function differenceWith<T>(array: readonly T[], other: readonly T[], comparator: EqualityComparator<T>): T[] {
    return array.filter((item) => !includesWith(other, item, comparator));
}
