/** Returns all elements except the last. */
export function initial<T>(array: readonly T[]): T[] {
    return array.length === 0 ? [] : array.slice(0, -1);
}
