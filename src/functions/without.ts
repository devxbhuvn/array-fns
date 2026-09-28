/** Returns a copy of `array` without the provided values (SameValueZero). */
export function without<T>(array: readonly T[], ...values: readonly T[]): T[] {
    const excluded = new Set(values);
    return array.filter((item) => !excluded.has(item));
}
