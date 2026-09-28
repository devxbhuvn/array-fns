/**
 * Invokes `interceptor` with a shallow copy for side effects and returns a new shallow copy.
 */
export function tap<T>(array: readonly T[], interceptor: (value: T[]) => void): T[] {
    const copy = [...array];
    interceptor(copy);
    return [...array];
}
