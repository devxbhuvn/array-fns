import { sameValueZero } from '../utils/equality';

/** Returns true when the array contains a value using SameValueZero equality. */
export function includes<T>(array: readonly T[], search: T, fromIndex = 0): boolean {
    const start = fromIndex < 0 ? Math.max(array.length + Math.trunc(fromIndex), 0) : Math.trunc(fromIndex);

    for (let index = Math.max(start, 0); index < array.length; index += 1) {
        if (sameValueZero(array[index]!, search)) {
            return true;
        }
    }

    return false;
}
