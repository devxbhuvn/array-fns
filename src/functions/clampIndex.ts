import { clampInsertIndex } from '../utils/indexes';

/**
 * Clamps an index into `[0, length]` for insert-style operations.
 * Negative indexes count from the end.
 */
export function clampIndex(index: number, length: number): number {
    if (!Number.isInteger(length) || length < 0) {
        throw new RangeError('length must be a non-negative integer.');
    }

    return clampInsertIndex(index, length);
}
