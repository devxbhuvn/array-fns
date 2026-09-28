/** Returns the cartesian product of the provided arrays. */
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
