/** Returns the median of finite numbers, or undefined when none. */
export function median(array: readonly number[]): number | undefined {
    const values = array.filter((value) => Number.isFinite(value)).sort((a, b) => a - b);

    if (values.length === 0) {
        return undefined;
    }

    const middle = Math.floor(values.length / 2);

    if (values.length % 2 === 0) {
        return (values[middle - 1]! + values[middle]!) / 2;
    }

    return values[middle];
}
