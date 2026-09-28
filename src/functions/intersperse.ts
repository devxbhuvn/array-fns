/** Inserts `separator` between adjacent elements. */
export function intersperse<T>(array: readonly T[], separator: T): T[] {
    if (array.length === 0) {
        return [];
    }

    const result: T[] = [array[0]!];

    for (let index = 1; index < array.length; index += 1) {
        result.push(separator, array[index]!);
    }

    return result;
}
