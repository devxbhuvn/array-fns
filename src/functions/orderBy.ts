import type { OrderDirection, SortValue } from '../types/common';

function compareValues(left: SortValue, right: SortValue): number {
    if (left === right) {
        return 0;
    }

    if (left == null) {
        return 1;
    }

    if (right == null) {
        return -1;
    }

    if (typeof left === 'number' && typeof right === 'number') {
        if (Number.isNaN(left)) {
            return Number.isNaN(right) ? 0 : 1;
        }

        if (Number.isNaN(right)) {
            return -1;
        }

        return left < right ? -1 : 1;
    }

    if (typeof left === 'string' && typeof right === 'string') {
        return left.localeCompare(right);
    }

    if (typeof left === 'boolean' && typeof right === 'boolean') {
        return left ? 1 : -1;
    }

    if (left instanceof Date && right instanceof Date) {
        return left.getTime() - right.getTime();
    }

    return String(left).localeCompare(String(right));
}

type SortSelector<T> = (value: T, index: number, array: readonly T[]) => SortValue;

/** Stable multi-criteria sort with optional per-selector directions. */
export function orderBy<T>(array: readonly T[], selectors: readonly SortSelector<T>[], orders: readonly OrderDirection[] = []): T[] {
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
                    return (orders[index] ?? 'asc') === 'desc' ? -comparison : comparison;
                }
            }

            return left.index - right.index;
        })
        .map((entry) => entry.value);
}
