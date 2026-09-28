/**
 * Returns the percentile of finite numbers using linear interpolation.
 * @param percentile - Value in `[0, 100]`.
 */
export function percentile(array: readonly number[], percentileValue: number): number | undefined {
    if (!Number.isFinite(percentileValue) || percentileValue < 0 || percentileValue > 100) {
        throw new RangeError('percentile must be a finite number between 0 and 100.');
    }

    const values = array.filter((value) => Number.isFinite(value)).sort((a, b) => a - b);

    if (values.length === 0) {
        return undefined;
    }

    if (values.length === 1) {
        return values[0];
    }

    const rank = (percentileValue / 100) * (values.length - 1);
    const lower = Math.floor(rank);
    const upper = Math.ceil(rank);

    if (lower === upper) {
        return values[lower];
    }

    const weight = rank - lower;
    return values[lower]! * (1 - weight) + values[upper]! * weight;
}
