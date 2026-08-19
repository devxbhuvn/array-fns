/** Returns the input without its last N values. */
export function dropRight<T>(array: readonly T[], count: number): T[] {
    if (!Number.isFinite(count)) {
        throw new TypeError('count must be a finite number.');
    }

    const amount = Math.max(Math.trunc(count), 0);
    return array.slice(0, Math.max(array.length - amount, 0));
}
