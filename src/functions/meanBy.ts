import type { Iteratee } from '../types/common';

/** Returns the mean of finite iteratee results, or undefined when none. */
export function meanBy<T>(array: readonly T[], iteratee: Iteratee<T, number>): number | undefined {
    let total = 0;
    let count = 0;

    for (let index = 0; index < array.length; index += 1) {
        const value = iteratee(array[index]!, index, array);
        if (Number.isFinite(value)) {
            total += value;
            count += 1;
        }
    }

    return count === 0 ? undefined : total / count;
}
