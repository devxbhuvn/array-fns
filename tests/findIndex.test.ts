import { describe, expect, it } from 'vitest';
import { findIndex } from '../src';

describe('findIndex', () => {
    it('returns the first matching index', () => {
        expect(findIndex([1, 2, 3, 4], (value) => value > 2)).toBe(2);
    });

    it('returns -1 when nothing matches', () => {
        expect(findIndex([1, 2, 3], (value) => value > 10)).toBe(-1);
    });

    it('supports a negative start index', () => {
        expect(findIndex([1, 2, 3, 4], (value) => value === 3, -2)).toBe(2);
    });

    it('clamps a largely negative start index to the beginning', () => {
        expect(findIndex([1, 2, 3], (value) => value === 1, -100)).toBe(0);
    });

    it('normalizes fractional and NaN start indexes', () => {
        expect(findIndex([10, 20], (value) => value === 20, 0.5)).toBe(1);
        expect(findIndex([10, 20], (value) => value === 10, Number.NaN)).toBe(0);
    });
});
