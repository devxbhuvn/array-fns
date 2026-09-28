/** Combines each column of tuples with an iteratee. */
export function unzipWith<T, R>(array: ReadonlyArray<readonly T[]>, iteratee: (...values: T[]) => R): R[] {
    if (array.length === 0) {
        return [];
    }

    const width = Math.max(...array.map((row) => row.length));
    const result: R[] = [];

    for (let column = 0; column < width; column += 1) {
        const values: T[] = [];
        for (const row of array) {
            if (column < row.length) {
                values.push(row[column]!);
            }
        }
        result.push(iteratee(...values));
    }

    return result;
}
