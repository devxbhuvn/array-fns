import { clampInsertIndex } from '../utils/indexes';

/** Returns a copy with `values` inserted at `index`. */
export function insertAt<T>(array: readonly T[], index: number, ...values: readonly T[]): T[] {
    const at = clampInsertIndex(index, array.length);
    return [...array.slice(0, at), ...values, ...array.slice(at)];
}
