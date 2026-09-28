/** Returns a copy with `value` filled from `start` (inclusive) to `end` (exclusive). */
export function fill<T>(array: readonly T[], value: T, start = 0, end = array.length): T[] {
    const result = array.slice();
    const from = Math.max(0, Number.isNaN(start) ? 0 : Math.trunc(start));
    const to = Math.min(array.length, Number.isNaN(end) ? array.length : Math.trunc(end));

    for (let index = from; index < to; index += 1) {
        result[index] = value;
    }

    return result;
}
