/**
 * Like reduce, but returns the list of intermediate accumulator values.
 */
export function scan<T, R>(array: readonly T[], iteratee: (accumulator: R, value: T, index: number, array: readonly T[]) => R, initial: R): R[] {
    const result: R[] = [];
    let accumulator = initial;

    for (let index = 0; index < array.length; index += 1) {
        accumulator = iteratee(accumulator, array[index]!, index, array);
        result.push(accumulator);
    }

    return result;
}
