import type { Selector } from '../types/common';

/** Creates an object keyed by the selector result, keeping the last value for each key. */
export function keyBy<T, K extends PropertyKey>(array: readonly T[], selector: Selector<T, K>): Record<K, T> {
    const result = Object.create(null) as Record<K, T>;

    for (let index = 0; index < array.length; index += 1) {
        const item = array[index]!;
        result[selector(item, index, array)] = item;
    }

    return result;
}
