import { ensurePositiveInteger } from '../utils/validation';

/** Returns overlapping windows of `size` advancing by `step`. Partial trailing windows are omitted. */
export function sliding<T>(array: readonly T[], size: number, step = 1): T[][] {
    ensurePositiveInteger(size, 'size');
    ensurePositiveInteger(step, 'step');

    if (array.length < size) {
        return [];
    }

    const result: T[][] = [];

    for (let index = 0; index <= array.length - size; index += step) {
        result.push(array.slice(index, index + size));
    }

    return result;
}
