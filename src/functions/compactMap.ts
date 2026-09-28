import type { Iteratee } from '../types/common';

/** Maps values and drops `null` / `undefined` results. */
export function compactMap<T, R>(array: readonly T[], mapper: Iteratee<T, R | null | undefined>): R[] {
    const result: R[] = [];

    for (let index = 0; index < array.length; index += 1) {
        const mapped = mapper(array[index]!, index, array);
        if (mapped != null) {
            result.push(mapped);
        }
    }

    return result;
}
