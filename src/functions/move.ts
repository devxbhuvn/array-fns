/** Moves the item at `from` to `to` (immutable). */
export function move<T>(array: readonly T[], from: number, to: number): T[] {
    if (array.length === 0) {
        return [];
    }

    const normalize = (index: number): number => {
        const truncated = Number.isNaN(index) ? 0 : Math.trunc(index);
        return truncated < 0 ? array.length + truncated : truncated;
    };

    const fromIndex = normalize(from);
    const toIndex = normalize(to);

    if (fromIndex < 0 || fromIndex >= array.length || toIndex < 0 || toIndex >= array.length || fromIndex === toIndex) {
        return [...array];
    }

    const result = array.slice();
    const [item] = result.splice(fromIndex, 1);
    result.splice(toIndex, 0, item!);
    return result;
}
