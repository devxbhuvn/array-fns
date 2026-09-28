import type { SortValue } from '../types/common';
import { compareValues } from '../utils/compare';

type SortSelector<T> = (value: T, index: number, array: readonly T[]) => SortValue;

/** Returns a stable sorted copy using one or more value selectors. */
export function sortBy<T>(array: readonly T[], ...selectors: SortSelector<T>[]): T[] {
    if (selectors.length === 0) {
        return [...array];
    }

    return array
        .map((value, index) => ({
            value,
            index,
            criteria: selectors.map((selector) => selector(value, index, array))
        }))
        .sort((left, right) => {
            for (let index = 0; index < selectors.length; index += 1) {
                const comparison = compareValues(left.criteria[index]!, right.criteria[index]!);
                if (comparison !== 0) {
                    return comparison;
                }
            }

            return left.index - right.index;
        })
        .map((entry) => entry.value);
}
