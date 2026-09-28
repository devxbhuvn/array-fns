import { describe, expect, it } from 'vitest';
import { findLastIndex } from '../src';

describe('findLastIndex', () => {
    it('returns the last matching index', () => {
        expect(findLastIndex([1, 2, 3, 2], (value) => value === 2)).toBe(3);
        expect(findLastIndex([1], (value) => value === 2)).toBe(-1);
    });
});
