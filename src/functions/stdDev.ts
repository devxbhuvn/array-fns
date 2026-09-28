import { variance } from './variance';

/** Population standard deviation of finite numbers, or `undefined` when none. */
export function stdDev(array: readonly number[]): number | undefined {
    const value = variance(array);
    return value === undefined ? undefined : Math.sqrt(value);
}
