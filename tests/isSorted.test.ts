import { describe, expect, it } from 'vitest';
import { isSorted } from '../src';

describe('isSorted', () => {
    it('detects sorted arrays', () => {
        expect(isSorted([1, 2, 2, 3])).toBe(true);
        expect(isSorted([1, 3, 2])).toBe(false);
        expect(isSorted([3, 2, 1], (a, b) => b - a)).toBe(true);
    });
});
