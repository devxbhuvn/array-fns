import { sameValueZero } from '../utils/equality';
import { normalizeFromIndex } from '../utils/indexes';

/** Returns true when the array contains a value using SameValueZero equality. */
export function includes<T>(array: readonly T[], search: T, fromIndex = 0): boolean {
    const start = normalizeFromIndex(fromIndex, array.length);

    for (let index = start; index < array.length; index += 1) {
        if (sameValueZero(array[index]!, search)) {
            return true;
        }
    }

    return false;
}
