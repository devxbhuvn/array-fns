import { ensurePositiveInteger } from '../utils/validation';

/**
 * Splits an array into chunks of the provided size.
 *
 * @param array - The input values.
 * @param size - The chunk length. Must be a positive integer.
 * @returns A new array containing chunks of the original values.
 * @throws {RangeError} If size is not a positive integer.
 */
export function chunk<T>(array: readonly T[], size: number): T[][] {
    ensurePositiveInteger(size, 'size');

    const result: T[][] = [];

    for (let index = 0; index < array.length; index += size) {
        result.push(Array.from(array.slice(index, index + size)));
    }

    return result;
}
