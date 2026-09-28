/** Weaves values from multiple arrays by index until the longest is exhausted. */
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
