import type { Predicate } from '../types/common';

/** Takes values until the predicate returns true (exclusive). */
export function takeUntil<T>(array: readonly T[], predicate: Predicate<T>): T[] {
    const result: T[] = [];

    for (let index = 0; index < array.length; index += 1) {
        const item = array[index]!;
        if (predicate(item, index, array)) {
            break;
        }
        result.push(item);
    }

    return result;
}
