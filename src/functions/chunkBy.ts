import type { Selector } from '../types/common';

/** Splits into runs of consecutive equal selector keys. */
export function chunkBy<T, K extends PropertyKey>(array: readonly T[], selector: Selector<T, K>): T[][] {
    if (array.length === 0) {
        return [];
    }

    const result: T[][] = [];
    let current: T[] = [];
    let currentKey: K | undefined;

    for (let index = 0; index < array.length; index += 1) {
        const item = array[index]!;
        const key = selector(item, index, array);

        if (index === 0 || Object.is(key, currentKey)) {
            current.push(item);
        } else {
            result.push(current);
            current = [item];
        }

        currentKey = key;
    }

    result.push(current);
    return result;
}
