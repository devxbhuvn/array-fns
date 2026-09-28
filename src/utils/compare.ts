import type { SortValue } from '../types/common';

/** Shared comparator for sortBy / orderBy criteria values. */
export function compareValues(left: SortValue, right: SortValue): number {
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
        return left === right ? 0 : left ? 1 : -1;
    }

    if (left instanceof Date && right instanceof Date) {
        return left.getTime() - right.getTime();
    }

    return String(left).localeCompare(String(right));
}
