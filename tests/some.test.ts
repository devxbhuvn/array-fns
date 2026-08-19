import { describe, expect, it } from 'vitest';
import { some } from '../src';

describe('some', () => {
    it('returns true when at least one value matches', () => {
        expect(some([1, 3, 4], (value) => value % 2 === 0)).toBe(true);
        expect(some([1, 3, 5], (value) => value % 2 === 0)).toBe(false);
    });

    it('returns false for an empty array', () => {
        expect(some([], () => true)).toBe(false);
    });

    it('stops after the first matching value', () => {
        let calls = 0;
        expect(
            some([1, 4, 6], (value) => {
                calls += 1;
                return value % 2 === 0;
            })
        ).toBe(true);
        expect(calls).toBe(2);
    });
});
