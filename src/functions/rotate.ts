/** Rotates values left by N positions without mutating the input. */
export function rotate<T>(array: readonly T[], positions: number): T[] {
    if (!Number.isFinite(positions)) {
        throw new TypeError('positions must be a finite number.');
    }

    if (array.length === 0) {
        return [];
    }

    const offset = ((Math.trunc(positions) % array.length) + array.length) % array.length;
    return [...array.slice(offset), ...array.slice(0, offset)];
}
