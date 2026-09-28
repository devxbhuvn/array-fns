/** Returns the cartesian product of the provided arrays. */
export function cartesian(): [[]];
export function cartesian<T1>(a: readonly T1[]): [T1][];
export function cartesian<T1, T2>(a: readonly T1[], b: readonly T2[]): [T1, T2][];
export function cartesian<T1, T2, T3>(a: readonly T1[], b: readonly T2[], c: readonly T3[]): [T1, T2, T3][];
export function cartesian<T1, T2, T3, T4>(a: readonly T1[], b: readonly T2[], c: readonly T3[], d: readonly T4[]): [T1, T2, T3, T4][];
export function cartesian(...arrays: ReadonlyArray<readonly unknown[]>): unknown[][] {
    if (arrays.length === 0) {
        return [[]];
    }

    return arrays.reduce<unknown[][]>(
        (product, array) => {
            const next: unknown[][] = [];
            for (const prefix of product) {
                for (const value of array) {
                    next.push([...prefix, value]);
                }
            }
            return next;
        },
        [[]]
    );
}
