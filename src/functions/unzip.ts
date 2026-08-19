/**
 * Converts an array of coordinate pairs into two arrays.
 *
 * @param entries - An array of pairs.
 * @returns A tuple containing the first values and second values.
 */
export function unzip<T, U>(entries: readonly (readonly [T, U])[]): [T[], U[]] {
    const first: T[] = [];
    const second: U[] = [];

    for (const [left, right] of entries) {
        first.push(left);
        second.push(right);
    }

    return [first, second];
}
