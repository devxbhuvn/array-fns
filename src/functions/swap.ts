/** Swaps values at two indexes (immutable). */
export function swap<T>(array: readonly T[], firstIndex: number, secondIndex: number): T[] {
    const normalize = (index: number): number => {
        const truncated = Number.isNaN(index) ? 0 : Math.trunc(index);
        return truncated < 0 ? array.length + truncated : truncated;
    };

    const left = normalize(firstIndex);
    const right = normalize(secondIndex);

    if (left < 0 || right < 0 || left >= array.length || right >= array.length || left === right) {
        return [...array];
    }

    const result = array.slice();
    const temp = result[left]!;
    result[left] = result[right]!;
    result[right] = temp;
    return result;
}
