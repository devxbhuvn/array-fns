import { describe, expect, it } from 'vitest';
import { sum } from '../src';

describe('sum', () => {
    it('sums finite numbers', () => {
        expect(sum([1, 2, 3])).toBe(6);
        expect(sum([])).toBe(0);
        expect(sum([1, Number.NaN, 2])).toBe(3);
    });
});
