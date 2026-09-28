/** Returns a copy with the element at `index` replaced by `value`. */
export function setAt<T>(array: readonly T[], index: number, value: T): T[] {
    const normalized = Number.isNaN(index) ? 0 : Math.trunc(index);
    const resolved = normalized < 0 ? array.length + normalized : normalized;

    if (resolved < 0 || resolved >= array.length) {
        return [...array];
    }

    const result = array.slice();
    result[resolved] = value;
    return result;
}
