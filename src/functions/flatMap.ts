/** Maps values and flattens one level of returned arrays. */
export function flatMap<T, R>(array: readonly T[], mapper: (value: T, index: number, array: readonly T[]) => R | readonly R[]): R[] {
    const result: R[] = [];

    for (let index = 0; index < array.length; index += 1) {
        const mapped = mapper(array[index]!, index, array);
        if (Array.isArray(mapped)) {
            result.push(...mapped);
        } else {
            result.push(mapped as R);
        }
    }

    return result;
}
