import { describe, expect, it } from 'vitest';
import { includes } from '../src';

describe('includes', () => {
    it('uses SameValueZero equality', () => {
        expect(includes([1, 2, Number.NaN], Number.NaN)).toBe(true);
        expect(includes([0], -0)).toBe(true);
    });

    it('supports positive and negative starting indexes', () => {
        const input = ['a', 'b', 'a'];
        expect(includes(input, 'a', 1)).toBe(true);
        expect(includes(input, 'a', -1)).toBe(true);
        expect(includes(input, 'b', 2)).toBe(false);
    });

    it('returns false for an empty array', () => {
        expect(includes([], 'value')).toBe(false);
    });
});
