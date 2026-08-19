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
});
