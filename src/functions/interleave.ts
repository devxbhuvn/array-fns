/** Weaves values from multiple arrays by index until the longest is exhausted. */
export function interleave(): [];
export function interleave<T1>(a: readonly T1[]): T1[];
export function interleave<T1, T2>(a: readonly T1[], b: readonly T2[]): Array<T1 | T2>;
export function interleave<T1, T2, T3>(a: readonly T1[], b: readonly T2[], c: readonly T3[]): Array<T1 | T2 | T3>;
export function interleave<T1, T2, T3, T4>(a: readonly T1[], b: readonly T2[], c: readonly T3[], d: readonly T4[]): Array<T1 | T2 | T3 | T4>;
export function interleave(...arrays: ReadonlyArray<readonly unknown[]>): unknown[] {
    if (arrays.length === 0) {
        return [];
    }

    const maxLength = Math.max(...arrays.map((array) => array.length));
    const result: unknown[] = [];

    for (let index = 0; index < maxLength; index += 1) {
        for (const array of arrays) {
            if (index < array.length) {
                result.push(array[index]);
            }
        }
    }

    return result;
}
