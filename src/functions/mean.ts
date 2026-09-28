/** Returns the arithmetic mean of finite numbers, or undefined when none. */
export function mean(array: readonly number[]): number | undefined {
    let total = 0;
    let count = 0;

    for (const value of array) {
        if (Number.isFinite(value)) {
            total += value;
            count += 1;
        }
    }

    return count === 0 ? undefined : total / count;
}
