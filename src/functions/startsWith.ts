import { sameValueZero } from '../utils/equality';

/** Returns true when `array` begins with `prefix` (SameValueZero). */
export function startsWith<T>(array: readonly T[], prefix: readonly T[]): boolean {
    if (prefix.length > array.length) {
        return false;
    }

    for (let index = 0; index < prefix.length; index += 1) {
        if (!sameValueZero(array[index], prefix[index])) {
            return false;
        }
    }

    return true;
}
