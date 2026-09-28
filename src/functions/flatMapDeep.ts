import { flattenDeep } from './flattenDeep';
import { flatMap } from './flatMap';

/** Maps each value then fully flattens nested array results. */
export function flatMapDeep<T, R>(array: readonly T[], mapper: (value: T, index: number, array: readonly T[]) => R | readonly unknown[]): R[] {
    return flattenDeep<R>(flatMap(array, mapper as (value: T, index: number, array: readonly T[]) => R | readonly R[]));
}
