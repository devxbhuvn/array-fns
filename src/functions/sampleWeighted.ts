/**
 * Returns a random item using non-negative weights aligned with `array`.
 * @throws {RangeError} When lengths differ, weights are invalid, or all weights are zero.
 */
export function sampleWeighted<T>(array: readonly T[], weights: readonly number[]): T | undefined {
    if (array.length === 0) {
        return undefined;
    }

    if (array.length !== weights.length) {
        throw new RangeError('array and weights must have the same length.');
    }

    let total = 0;

    for (const weight of weights) {
        if (!Number.isFinite(weight) || weight < 0) {
            throw new RangeError('weights must be finite and non-negative.');
        }
        total += weight;
    }

    if (total === 0) {
        throw new RangeError('at least one weight must be greater than zero.');
    }

    let threshold = Math.random() * total;

    for (let index = 0; index < array.length; index += 1) {
        threshold -= weights[index]!;
        if (threshold < 0) {
            return array[index];
        }
    }

    return array[array.length - 1];
}
