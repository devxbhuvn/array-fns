/**
 * Flattens nested arrays to a given depth.
 *
 * @param array - The input values.
 * @param depth - The maximum flattening depth. Use `Infinity` to flatten fully.
 * @returns A flattened array.
 * @throws {RangeError} If depth is negative or not a finite integer or Infinity.
 */
export function flatten<T>(array: readonly unknown[], depth = 1): T[] {
    if (!Number.isFinite(depth) && depth !== Infinity) {
        throw new RangeError('depth must be a non-negative integer or Infinity.');
    }

    if (depth < 0 || (Number.isFinite(depth) && !Number.isInteger(depth))) {
        throw new RangeError('depth must be a non-negative integer or Infinity.');
    }

    const result: T[] = [];

    const walk = (value: unknown, remaining: number): void => {
        if (Array.isArray(value) && remaining > 0) {
            for (const item of value) {
                walk(item, remaining - 1);
            }
            return;
        }

        result.push(value as T);
    };

    for (const item of array) {
        walk(item, Number.isFinite(depth) ? depth : Infinity);
    }

    return result;
}
