/** Removes consecutive duplicates from an ascending-sorted array (SameValueZero). */
export function sortedUnique<T>(array: readonly T[]): T[] {
    if (array.length === 0) {
        return [];
    }

    const result: T[] = [array[0]!];

    for (let index = 1; index < array.length; index += 1) {
        const item = array[index]!;
        if (!Object.is(item, result[result.length - 1])) {
            result.push(item);
        }
    }

    return result;
}
