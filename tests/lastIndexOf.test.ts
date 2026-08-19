import { describe, expect, it } from 'vitest';
import { lastIndexOf } from '../src';

describe('lastIndexOf', () => {
    it('returns the last matching index', () => {
        expect(lastIndexOf(['a', 'b', 'a', 'c'], 'a')).toBe(2);
    });

    it('supports negative and bounded starting indexes', () => {
        const input = ['a', 'b', 'a', 'c'];
        expect(lastIndexOf(input, 'a', 1)).toBe(0);
        expect(lastIndexOf(input, 'a', -2)).toBe(2);
        expect(lastIndexOf(input, 'z')).toBe(-1);
    });

    it('treats a NaN start index as the last index', () => {
        expect(lastIndexOf(['a', 'b', 'a'], 'a', Number.NaN)).toBe(2);
    });
});
