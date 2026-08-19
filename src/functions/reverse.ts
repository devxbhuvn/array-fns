/** Returns a reversed copy without mutating the input. */
export function reverse<T>(array: readonly T[]): T[] {
    return [...array].reverse();
}
