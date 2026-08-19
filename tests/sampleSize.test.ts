import { describe, expect, it } from 'vitest';
import { sampleSize } from '../src';

describe('sampleSize', () => {
    it('returns a sample of the requested size', () => {
        const values = [1, 2, 3, 4, 5];
        const sample = sampleSize(values, 3);
        expect(sample).toHaveLength(3);
        expect(values).toEqual(expect.arrayContaining(sample));
    });

    it('returns an empty array for zero size', () => {
        expect(sampleSize([1, 2, 3], 0)).toEqual([]);
    });

    it('throws for negative sizes', () => {
        expect(() => sampleSize([1, 2, 3], -1)).toThrow(RangeError);
    });
});
