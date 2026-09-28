/**
 * Returns values that are present in both arrays.
 *
 * Equality is based on JavaScript SameValueZero semantics.
 *
 * @param first - The first array.
 * @param second - The second array.
 * @returns A new array of shared values.
 */
export function intersection<T>(first: readonly T[], second: readonly T[]): T[] {
    const secondSet = new Set(second);
    const result: T[] = [];
    const seen = new Set<T>();

    for (const item of first) {
        if (secondSet.has(item) && !seen.has(item)) {
            seen.add(item);
            result.push(item);
        }
    }

    return result;
}
