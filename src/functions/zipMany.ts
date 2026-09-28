/** Zips any number of arrays to the shortest length. */
export function zipMany(): [];
export function zipMany<T1>(a: readonly T1[]): [T1][];
export function zipMany<T1, T2>(a: readonly T1[], b: readonly T2[]): [T1, T2][];
export function zipMany<T1, T2, T3>(a: readonly T1[], b: readonly T2[], c: readonly T3[]): [T1, T2, T3][];
export function zipMany<T1, T2, T3, T4>(a: readonly T1[], b: readonly T2[], c: readonly T3[], d: readonly T4[]): [T1, T2, T3, T4][];
export function zipMany<T1, T2, T3, T4, T5>(a: readonly T1[], b: readonly T2[], c: readonly T3[], d: readonly T4[], e: readonly T5[]): [T1, T2, T3, T4, T5][];
export function zipMany(...arrays: ReadonlyArray<readonly unknown[]>): unknown[][] {
    if (arrays.length === 0) {
        return [];
    }

    const length = Math.min(...arrays.map((array) => array.length));
    const result: unknown[][] = [];

    for (let index = 0; index < length; index += 1) {
        result.push(arrays.map((array) => array[index]));
    }

    return result;
}
