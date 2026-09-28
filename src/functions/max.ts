/** Returns the maximum finite number, or undefined when empty / no finite values. */
export function max(array: readonly number[]): number | undefined {
    let best: number | undefined;

    for (const value of array) {
        if (!Number.isFinite(value)) {
            continue;
        }

        if (best === undefined || value > best) {
            best = value;
        }
    }

    return best;
}
