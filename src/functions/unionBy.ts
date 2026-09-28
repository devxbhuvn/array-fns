import type { Selector } from '../types/common';

/** Merges arrays keeping the first item for each selector key. */
export function unionBy<T, K extends PropertyKey>(selector: Selector<T, K>, ...arrays: ReadonlyArray<readonly T[]>): T[] {
    const result: T[] = [];
    const seen = new Set<K>();

    for (const array of arrays) {
        for (let index = 0; index < array.length; index += 1) {
            const item = array[index]!;
            const key = selector(item, index, array);

            if (!seen.has(key)) {
                seen.add(key);
                result.push(item);
            }
        }
    }

    return result;
}
