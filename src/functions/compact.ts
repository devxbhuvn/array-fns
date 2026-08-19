/**
 * Removes falsy values from an array.
 *
 * @param array - The input values.
 * @returns A new array without falsey values.
 */
export function compact<T>(array: readonly T[]): Exclude<T, false | 0 | '' | null | undefined>[] {
    return array.filter((item): item is Exclude<T, false | 0 | '' | null | undefined> => Boolean(item));
}
