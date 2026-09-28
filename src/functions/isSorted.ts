import type { Comparator } from '../types/common';

/** Returns true when the array is sorted ascending (or by comparator). */
export function isSorted<T>(array: readonly T[], comparator?: Comparator<T>): boolean {
    for (let index = 1; index < array.length; index += 1) {
        const left = array[index - 1]!;
        const right = array[index]!;

        if (comparator) {
            if (comparator(left, right) > 0) {
                return false;
            }
        } else if ((left as never) > (right as never)) {
            return false;
        }
    }

    return true;
}
