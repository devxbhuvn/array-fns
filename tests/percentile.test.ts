import { describe, expect, it } from 'vitest';
import { percentile } from '../src';

describe('percentile', () => {
    it('interpolates percentiles', () => {
        expect(percentile([0, 10, 20, 30], 50)).toBe(15);
        expect(percentile([], 50)).toBeUndefined();
        expect(() => percentile([1], -1)).toThrow(RangeError);
    });
});
