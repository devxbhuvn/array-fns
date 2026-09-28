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
    if (!selector) {
        const result: T[] = [];
        const seen = new Set<T>();

        for (const item of array) {
            if (!seen.has(item)) {
                seen.add(item);
                result.push(item);
            }
        }

        return result;
    }

    const result: T[] = [];
    const seen = new Set<K>();

    for (let index = 0; index < array.length; index += 1) {
        const item = array[index]!;
        const key = selector(item, index, array);

        if (!seen.has(key)) {
            seen.add(key);
            result.push(item);
        }
    }

    return result;
}
