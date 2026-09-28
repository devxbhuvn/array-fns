import type { Iteratee } from '../types/common';

/** Groups items into a `Map` keyed by the selector result. */
export function groupToMap<T, K>(array: readonly T[], selector: Iteratee<T, K>): Map<K, T[]> {
    const result = new Map<K, T[]>();

    for (let index = 0; index < array.length; index += 1) {
        const item = array[index]!;
        const key = selector(item, index, array);
        const bucket = result.get(key);

        if (bucket) {
            bucket.push(item);
        } else {
            result.set(key, [item]);
        }
    }

    return result;
}
