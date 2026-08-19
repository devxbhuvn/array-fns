import type { Selector } from '../types/common';

/**
 * Counts values grouped by the result of a selector.
 *
 * @param array - The input values.
 * @param selector - A selector that returns a property key.
 * @returns A record whose keys are selector results and values are counts.
 */
export function countBy<T, K extends PropertyKey>(array: readonly T[], selector: Selector<T, K>): Record<K, number> {
    const result = Object.create(null) as Record<K, number>;

    for (let index = 0; index < array.length; index += 1) {
        const value = array[index]!;
        const key = selector(value, index, array);
        result[key] = (result[key] ?? 0) + 1;
    }

    return result;
}
