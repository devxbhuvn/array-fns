/** Returns `[min, max]` over finite numbers, or `undefined` when none. */
export function extent(array: readonly number[]): [number, number] | undefined {
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    let found = false;

    for (const value of array) {
        if (!Number.isFinite(value)) {
            continue;
        }
        found = true;
        if (value < min) {
            min = value;
        }
        if (value > max) {
            max = value;
        }
    }

    return found ? [min, max] : undefined;
}
