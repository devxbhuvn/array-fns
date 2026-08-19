import { describe, expect, it } from 'vitest';
import { takeRight } from '../src';

describe('takeRight', () => {
    it('returns the last requested values', () => {
        expect(takeRight([1, 2, 3, 4], 2)).toEqual([3, 4]);
    });

    it('handles negative, oversized, fractional, and non-finite counts', () => {
        expect(takeRight([1, 2, 3], -1)).toEqual([]);
        expect(takeRight([1, 2, 3], 10)).toEqual([1, 2, 3]);
        expect(takeRight([1, 2, 3], 1.9)).toEqual([3]);
        expect(() => takeRight([1], Infinity)).toThrow(TypeError);
    });
});
