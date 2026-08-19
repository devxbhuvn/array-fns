import { sameValueZero } from '../utils/equality';

/**
 * Returns unique values from multiple arrays in order of appearance.
 *
 * @param arrays - Arrays to merge.
 * @returns A new array of unique values.
 */
export function union<T>(...arrays: ReadonlyArray<readonly T[]>): T[] {
    const result: T[] = [];

    for (const array of arrays) {
        for (const item of array) {
            if (!result.some((existing) => sameValueZero(existing, item))) {
                result.push(item);
            }
        }
    }

    return result;
}
