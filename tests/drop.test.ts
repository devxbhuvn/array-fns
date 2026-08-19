import { describe, expect, it } from 'vitest';
import { drop } from '../src';

describe('drop', () => {
    it('drops the first few values', () => {
        expect(drop([1, 2, 3, 4], 2)).toEqual([3, 4]);
    });

    it('returns the original array for zero', () => {
        expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
    });

    it('throws for a negative count', () => {
        expect(() => drop([1, 2, 3], -1)).toThrow(RangeError);
    });
});
