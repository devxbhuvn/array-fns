import type { Iteratee } from '../types/common';

/** Returns the sum of finite iteratee results. */
export function sumBy<T>(array: readonly T[], iteratee: Iteratee<T, number>): number {
    let total = 0;

    for (let index = 0; index < array.length; index += 1) {
        const value = iteratee(array[index]!, index, array);
        if (Number.isFinite(value)) {
            total += value;
        }
    }

    return total;
}
