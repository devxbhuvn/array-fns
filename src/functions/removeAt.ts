/** Returns a copy with the element at `index` removed. Negative indexes are supported. */
export function removeAt<T>(array: readonly T[], index: number): T[] {
    if (array.length === 0) {
        return [];
    }

    const normalized = Number.isNaN(index) ? 0 : Math.trunc(index);
    const resolved = normalized < 0 ? array.length + normalized : normalized;

    if (resolved < 0 || resolved >= array.length) {
        return [...array];
    }

    return [...array.slice(0, resolved), ...array.slice(resolved + 1)];
}
