import { describe, expect, it } from 'vitest';
import { indexOf } from '../src';

describe('indexOf', () => {
    it('returns the first matching index', () => {
        expect(indexOf(['a', 'b', 'a'], 'a')).toBe(0);
    });

    it('supports a starting index and returns -1 when absent', () => {
        expect(indexOf(['a', 'b', 'a'], 'a', 1)).toBe(2);
        expect(indexOf(['a', 'b'], 'c')).toBe(-1);
        expect(indexOf(['a', 'b'], 'a', 4)).toBe(-1);
    });

    it('uses strict equality', () => {
        expect(indexOf([Number.NaN], Number.NaN)).toBe(-1);
    });

    it('treats a NaN start index as zero', () => {
        expect(indexOf(['first'], 'first', Number.NaN)).toBe(0);
    });
});
