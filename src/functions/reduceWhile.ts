/**
 * Reduces while `predicate` remains true for the current accumulator and value.
 * Stops before applying the reducer when the predicate fails.
 */
export function reduceWhile<T, R>(
    array: readonly T[],
    predicate: (accumulator: R, value: T, index: number, array: readonly T[]) => boolean,
    reducer: (accumulator: R, value: T, index: number, array: readonly T[]) => R,
    initial: R
): R {
    let accumulator = initial;

    for (let index = 0; index < array.length; index += 1) {
        const value = array[index]!;
        if (!predicate(accumulator, value, index, array)) {
            break;
        }
        accumulator = reducer(accumulator, value, index, array);
    }

    return accumulator;
}
