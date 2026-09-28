import { clampInsertIndex } from '../utils/indexes';

/**
 * Immutable splice: returns a copy with `deleteCount` items removed at `start` and `items` inserted.
 */
export function splice<T>(array: readonly T[], start: number, deleteCount: number, ...items: readonly T[]): T[] {
    if (!Number.isInteger(deleteCount) || deleteCount < 0) {
        throw new RangeError('deleteCount must be a non-negative integer.');
    }

    const at = clampInsertIndex(start, array.length);
    const remove = Math.min(deleteCount, array.length - at);
    return [...array.slice(0, at), ...items, ...array.slice(at + remove)];
}
