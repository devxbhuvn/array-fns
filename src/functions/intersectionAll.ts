/**
 * Returns values present in every input array (SameValueZero), preserving order from the first array.
 */
export function intersectionAll<T>(...arrays: readonly (readonly T[])[]): T[] {
    if (arrays.length === 0) {
        return [];
    }

    if (arrays.length === 1) {
        return [...arrays[0]!];
    }

    const [first, ...rest] = arrays;
    const sets = rest.map((array) => new Set(array));

    return first!.filter((item) => sets.every((set) => set.has(item)));
}
