/** Returns the product of finite numbers. Empty arrays return 1. */
export function product(array: readonly number[]): number {
    let total = 1;
    let seen = false;

    for (const value of array) {
        if (Number.isFinite(value)) {
            total *= value;
            seen = true;
        }
    }

    return seen || array.length === 0 ? total : 1;
}
