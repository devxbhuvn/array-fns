/** Zips any number of arrays to the shortest length. */
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
