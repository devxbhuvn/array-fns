type Falsy = false | 0 | 0n | '' | null | undefined;

/**
 * Removes falsy values from an array.
 *
 * @param array - The input values.
 * @returns A new array without falsy values (including `NaN`).
 */
export function compact<T>(array: readonly T[]): Array<Exclude<T, Falsy>> {
    return array.filter((item): item is Exclude<T, Falsy> => Boolean(item));
}
