/** Wraps a non-array value in an array; returns array values unchanged (shallow copy). */
export function castArray<T>(value: T | readonly T[]): T[] {
    return Array.isArray(value) ? [...value] : [value as T];
}
