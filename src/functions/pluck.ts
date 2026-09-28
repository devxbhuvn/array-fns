/** Maps each item to the value at `key`. */
export function pluck<T extends object, K extends keyof T>(array: readonly T[], key: K): Array<T[K]> {
    return array.map((item) => item[key]);
}
