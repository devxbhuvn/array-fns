import { describe, expect, it } from 'vitest';
import { max } from '../src';

describe('max', () => {
    it('returns the maximum finite number', () => {
        expect(max([1, 5, 3])).toBe(5);
        expect(max([])).toBeUndefined();
        expect(max([Number.NaN])).toBeUndefined();
    });
});
