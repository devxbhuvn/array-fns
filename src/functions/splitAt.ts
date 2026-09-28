/** Splits the array into `[left, right]` at `index`. */
export function splitAt<T>(array: readonly T[], index: number): [T[], T[]] {
    const normalized = Number.isNaN(index) ? 0 : Math.trunc(index);
    const resolved = normalized < 0 ? Math.max(array.length + normalized, 0) : Math.min(normalized, array.length);
    return [array.slice(0, resolved), array.slice(resolved)];
}
