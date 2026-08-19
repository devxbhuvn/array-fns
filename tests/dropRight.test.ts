import { describe, expect, it } from 'vitest';
import { dropRight } from '../src';

describe('dropRight', () => {
    it('removes the last requested values', () => {
        expect(dropRight([1, 2, 3, 4], 2)).toEqual([1, 2]);
    });

    it('handles negative, oversized, fractional, and non-finite counts', () => {
        expect(dropRight([1, 2, 3], -1)).toEqual([1, 2, 3]);
        expect(dropRight([1, 2, 3], 10)).toEqual([]);
        expect(dropRight([1, 2, 3], 1.9)).toEqual([1, 2]);
        expect(() => dropRight([1], Infinity)).toThrow(TypeError);
    });
});
