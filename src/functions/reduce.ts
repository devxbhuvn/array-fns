export function reduce<T, R>(array: readonly T[], reducer: (accumulator: R, value: T, index: number, array: readonly T[]) => R, initialValue: R): R;
export function reduce<T>(array: readonly T[], reducer: (accumulator: T, value: T, index: number, array: readonly T[]) => T): T;
export function reduce<T, R>(array: readonly T[], reducer: (accumulator: R | T, value: T, index: number, array: readonly T[]) => R | T, initialValue?: R): R | T {
    if (array.length === 0 && arguments.length < 3) {
        throw new TypeError('reduce of empty array with no initial value');
    }

    let index = 0;
    let accumulator: R | T;

    if (arguments.length >= 3) {
        accumulator = initialValue as R;
    } else {
        accumulator = array[0]!;
        index = 1;
    }

    for (; index < array.length; index += 1) {
        accumulator = reducer(accumulator, array[index]!, index, array);
    }

    return accumulator;
}
