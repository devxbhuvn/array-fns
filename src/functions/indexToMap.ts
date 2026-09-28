import type { Iteratee } from '../types/common';

/** Creates a `Map` keyed by the selector result, keeping the last value for each key. */
export function indexToMap<T, K>(array: readonly T[], selector: Iteratee<T, K>): Map<K, T> {
    const result = new Map<K, T>();

    for (let index = 0; index < array.length; index += 1) {
        const item = array[index]!;
        result.set(selector(item, index, array), item);
    }

    return result;
}
