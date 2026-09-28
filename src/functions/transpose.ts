/** Transposes a matrix (rows to columns). Ragged rows are truncated to the shortest row. */
export function transpose<T>(matrix: ReadonlyArray<readonly T[]>): T[][] {
    if (matrix.length === 0) {
        return [];
    }

    const width = Math.min(...matrix.map((row) => row.length));
    if (width === 0) {
        return [];
    }

    const result: T[][] = [];

    for (let column = 0; column < width; column += 1) {
        const row: T[] = [];
        for (const current of matrix) {
            row.push(current[column]!);
        }
        result.push(row);
    }

    return result;
}
