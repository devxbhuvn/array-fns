/**
 * Creates a numeric range.
 *
 * @param startOrEnd - The starting point or, when `end` is omitted, the exclusive upper bound.
 * @param end - The ending point for the range.
 * @param step - The step between values. Must be non-zero.
 * @returns A new numeric array.
 * @throws {RangeError} If `step` is zero.
 */
export function range(startOrEnd: number, end?: number, step?: number): number[] {
    if (end === undefined) {
        const upperBound = startOrEnd;

        if (!Number.isFinite(upperBound) || !Number.isInteger(upperBound)) {
            throw new TypeError('range requires finite numbers.');
        }

        if (upperBound === 0) {
            return [];
        }

        const direction = upperBound > 0 ? 1 : -1;
        const result: number[] = [];

        for (let value = 0; value !== upperBound; value += direction) {
            result.push(value);
        }

        return result;
    }

    const start = startOrEnd;
    const stop = end;
    const delta = step ?? (start <= stop ? 1 : -1);

    if (!Number.isFinite(start) || !Number.isFinite(stop)) {
        throw new TypeError('range requires finite numbers.');
    }

    if (!Number.isFinite(delta) || delta === 0) {
        throw new RangeError('step must be a non-zero finite number.');
    }

    const result: number[] = [];

    if (delta > 0) {
        for (let value = start; value < stop; value += delta) {
            result.push(value);
        }
        return result;
    }

    for (let value = start; value > stop; value += delta) {
        result.push(value);
    }

    return result;
}
