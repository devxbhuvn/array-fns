import type { Iteratee } from '../types/common';

/**
 * Splits into consecutive runs keyed by the selector.
 * Returns `[key, items]` tuples (different shape from `chunkBy`).
 */
export function partitionBy<T, K>(array: readonly T[], selector: Iteratee<T, K>): Array<[K, T[]]> {
    if (array.length === 0) {
        return [];
    }

    const result: Array<[K, T[]]> = [];
    let currentKey = selector(array[0]!, 0, array);
    let current: T[] = [array[0]!];

    for (let index = 1; index < array.length; index += 1) {
        const item = array[index]!;
        const key = selector(item, index, array);

        if (Object.is(key, currentKey)) {
            current.push(item);
        } else {
            result.push([currentKey, current]);
            currentKey = key;
            current = [item];
        }
    }

    result.push([currentKey, current]);
    return result;
}
