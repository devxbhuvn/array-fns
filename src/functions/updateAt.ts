/** Returns a copy with the element at `index` replaced by `updater(value)`. */
export function updateAt<T>(array: readonly T[], index: number, updater: (value: T) => T): T[] {
    const normalized = Number.isNaN(index) ? 0 : Math.trunc(index);
    const resolved = normalized < 0 ? array.length + normalized : normalized;

    if (resolved < 0 || resolved >= array.length) {
        return [...array];
    }

    const result = array.slice();
    result[resolved] = updater(array[resolved]!);
    return result;
}
