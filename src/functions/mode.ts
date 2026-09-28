/** Returns the most frequent value (first on ties), or undefined when empty. */
export function mode<T>(array: readonly T[]): T | undefined {
    if (array.length === 0) {
        return undefined;
    }

    const counts = new Map<T, number>();
    let best: T = array[0] as T;
    let bestCount = 0;

    for (const value of array) {
        const next = (counts.get(value) ?? 0) + 1;
        counts.set(value, next);

        if (next > bestCount) {
            best = value;
            bestCount = next;
        }
    }

    return best;
}
