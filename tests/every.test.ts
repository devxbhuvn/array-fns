import { describe, expect, it } from 'vitest';
import { every } from '../src';

describe('every', () => {
    it('returns true only when every value matches', () => {
        expect(every([2, 4, 6], (value) => value % 2 === 0)).toBe(true);
        expect(every([2, 4, 7], (value) => value % 2 === 0)).toBe(false);
    });

    it('returns true for an empty array', () => {
        expect(every([], () => false)).toBe(true);
    });

    it('stops after the first non-matching value', () => {
        let calls = 0;
        expect(
            every([2, 3, 4], (value) => {
                calls += 1;
                return value % 2 === 0;
            })
        ).toBe(false);
        expect(calls).toBe(2);
    });
});
