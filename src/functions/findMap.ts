import type { Iteratee } from '../types/common';

/**
 * Maps each item and returns the first defined (non-`undefined`) result.
 */
export function findMap<T, R>(array: readonly T[], mapper: Iteratee<T, R | undefined>): R | undefined {
    for (let index = 0; index < array.length; index += 1) {
        const mapped = mapper(array[index]!, index, array);
        if (mapped !== undefined) {
            return mapped;
        }
    }

    return undefined;
}
