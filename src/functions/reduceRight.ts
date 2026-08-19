export function reduceRight<T, R>(array: readonly T[], reducer: (accumulator: R, value: T, index: number, array: readonly T[]) => R, initialValue: R): R;
export function reduceRight<T>(array: readonly T[], reducer: (accumulator: T, value: T, index: number, array: readonly T[]) => T): T;
export function reduceRight<T, R>(array: readonly T[], reducer: (accumulator: R | T, value: T, index: number, array: readonly T[]) => R | T, initialValue?: R): R | T {
    if (array.length === 0 && arguments.length < 3) {
        throw new TypeError('reduceRight of empty array with no initial value');
    }

    let index = array.length - 1;
    let accumulator: R | T;

    if (arguments.length >= 3) {
        accumulator = initialValue as R;
    } else {
        accumulator = array[index]!;
        index -= 1;
    }

    for (; index >= 0; index -= 1) {
        accumulator = reducer(accumulator, array[index]!, index, array);
    }

    return accumulator;
}
