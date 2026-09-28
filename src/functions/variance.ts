/** Population variance of finite numbers, or `undefined` when none. */
export function variance(array: readonly number[]): number | undefined {
    let total = 0;
    let count = 0;

    for (const value of array) {
        if (Number.isFinite(value)) {
            total += value;
            count += 1;
        }
    }

    if (count === 0) {
        return undefined;
    }

    const mean = total / count;
    let sumSquares = 0;

    for (const value of array) {
        if (Number.isFinite(value)) {
            const delta = value - mean;
            sumSquares += delta * delta;
        }
    }

    return sumSquares / count;
}
