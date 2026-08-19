import type { Selector } from '../types/common';

/**
 * Groups items by a selector result.
 *
 * @param array - The input values.
 * @param selector - A selector that returns a key.
 * @returns An object whose keys map to arrays of matching items.
 */
export function groupBy<T, K extends PropertyKey>(array: readonly T[], selector: Selector<T, K>): Record<K, T[]> {
    const result = Object.create(null) as Record<K, T[]>;

    for (let index = 0; index < array.length; index += 1) {
        const item = array[index]!;
        const key = selector(item, index, array);

        if (!(key in result)) {
            result[key] = [];
        }

        result[key].push(item);
    }

    return result;
}
