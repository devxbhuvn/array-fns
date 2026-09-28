import type { Iteratee } from '../types/common';

/** Returns the item with the smallest numeric iteratee result. */
export function minBy<T>(array: readonly T[], iteratee: Iteratee<T, number>): T | undefined {
    let best: T | undefined;
    let bestValue: number | undefined;

    for (let index = 0; index < array.length; index += 1) {
        const item = array[index]!;
        const value = iteratee(item, index, array);

        if (!Number.isFinite(value)) {
            continue;
        }

        if (bestValue === undefined || value < bestValue) {
            best = item;
            bestValue = value;
        }
    }

    return best;
}
