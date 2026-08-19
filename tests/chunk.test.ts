import { describe, expect, it } from 'vitest';
import { chunk } from '../src';

describe('chunk', () => {
    it('chunks an array into equal-sized groups', () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    it('handles empty arrays', () => {
        expect(chunk([], 3)).toEqual([]);
    });

    it('throws for invalid size', () => {
        expect(() => chunk([1, 2, 3], 0)).toThrow(RangeError);
    });
});
