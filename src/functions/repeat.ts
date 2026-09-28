import { ensureNonNegativeInteger } from '../utils/validation';

/** Creates an array filled with `value` repeated `count` times. */
export function repeat<T>(value: T, count: number): T[] {
    ensureNonNegativeInteger(count, 'count');
    return Array.from({ length: count }, () => value);
}
