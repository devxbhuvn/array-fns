import type { Selector } from '../types/common';

/** Returns values from `array` whose selector keys are not in `other`. */
export function differenceBy<T, K extends PropertyKey>(array: readonly T[], other: readonly T[], selector: Selector<T, K>): T[] {
    const excluded = new Set<K>();

    for (let index = 0; index < other.length; index += 1) {
        excluded.add(selector(other[index]!, index, other));
    }

    const result: T[] = [];

    for (let index = 0; index < array.length; index += 1) {
        const item = array[index]!;
        if (!excluded.has(selector(item, index, array))) {
            result.push(item);
        }
    }

    return result;
}
