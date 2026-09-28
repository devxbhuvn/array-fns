import { flatten } from './flatten';

/** Fully flattens nested arrays. */
export function flattenDeep<T>(array: readonly unknown[]): T[] {
    return flatten<T>(array, Infinity);
}
