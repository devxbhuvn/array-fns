/** Returns a new array containing the mapped values. */
export function map<T, R>(array: readonly T[], mapper: (value: T, index: number, array: readonly T[]) => R): R[] {
    const result: R[] = [];

    for (let index = 0; index < array.length; index += 1) {
        result.push(mapper(array[index]!, index, array));
    }

    return result;
}
