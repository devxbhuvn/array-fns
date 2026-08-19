import { sameValueZero } from '../utils/equality';

/**
 * Removes duplicates from an array using SameValueZero semantics.
 *
 * @param array - The input values.
 * @param selector - Optional selector used to compare unique keys.
 * @returns A new array with duplicates removed.
 */
export function unique<T>(array: readonly T[]): T[];
export function unique<T, K extends PropertyKey>(array: readonly T[], selector: (value: T, index: number, array: readonly T[]) => K): T[];
export function unique<T, K extends PropertyKey>(array: readonly T[], selector?: (value: T, index: number, array: readonly T[]) => K): T[] {
    const result: T[] = [];

    for (let index = 0; index < array.length; index += 1) {
        const item = array[index]!;
        const key = selector ? selector(item, index, array) : (item as unknown as K);

        if (
            !result.some((existing, existingIndex) => {
                if (selector) {
                    return sameValueZero(selector(existing, existingIndex, result), key);
                }
                return sameValueZero(existing, item);
            })
        ) {
            result.push(item);
        }
    }

    return result;
}
