/** Returns values in either array but not both (SameValueZero), preserving order. */
export function xor<T>(first: readonly T[], second: readonly T[]): T[] {
    const firstSet = new Set(first);
    const secondSet = new Set(second);
    const result: T[] = [];
    const seen = new Set<T>();

    for (const item of first) {
        if (!secondSet.has(item) && !seen.has(item)) {
            seen.add(item);
            result.push(item);
        }
    }

    for (const item of second) {
        if (!firstSet.has(item) && !seen.has(item)) {
            seen.add(item);
            result.push(item);
        }
    }

    return result;
}
