/** Returns the element at `index`, supporting negative indexes. */
export function at<T>(array: readonly T[], index: number): T | undefined {
    const normalized = Number.isNaN(index) ? 0 : Math.trunc(index);
    const resolved = normalized < 0 ? array.length + normalized : normalized;
    return resolved < 0 || resolved >= array.length ? undefined : array[resolved];
}
