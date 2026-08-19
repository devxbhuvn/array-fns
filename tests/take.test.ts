import { describe, expect, it } from 'vitest';
import { take } from '../src';

describe('take', () => {
    it('takes the first N items', () => {
        expect(take([1, 2, 3, 4], 2)).toEqual([1, 2]);
    });

    it('returns the whole array when count exceeds length', () => {
        expect(take([1, 2], 10)).toEqual([1, 2]);
    });

    it('throws on a negative count', () => {
        expect(() => take([1, 2], -1)).toThrow(RangeError);
    });
});
