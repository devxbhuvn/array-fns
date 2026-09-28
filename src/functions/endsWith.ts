import { sameValueZero } from '../utils/equality';

/** Returns true when `array` ends with `suffix` (SameValueZero). */
export function endsWith<T>(array: readonly T[], suffix: readonly T[]): boolean {
    if (suffix.length > array.length) {
        return false;
    }

    const offset = array.length - suffix.length;

    for (let index = 0; index < suffix.length; index += 1) {
        if (!sameValueZero(array[offset + index], suffix[index])) {
            return false;
        }
    }

    return true;
}
