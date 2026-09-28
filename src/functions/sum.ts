/** Returns the sum of finite numbers. Empty arrays return 0. */
export function sum(array: readonly number[]): number {
    let total = 0;

    for (const value of array) {
        if (Number.isFinite(value)) {
            total += value;
        }
    }

    return total;
}
