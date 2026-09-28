/** Returns all elements except the first. */
export function tail<T>(array: readonly T[]): T[] {
    return array.slice(1);
}
