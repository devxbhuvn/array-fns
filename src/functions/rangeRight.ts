import { range } from './range';

/**
 * Creates a numeric range and returns it in reverse order.
 * Argument rules match `range`.
 */
export function rangeRight(startOrEnd: number, end?: number, step?: number): number[] {
    return range(startOrEnd, end, step).reverse();
}
