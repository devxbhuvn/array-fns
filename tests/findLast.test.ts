import { describe, expect, it } from 'vitest';
import { findLast } from '../src';

describe('findLast', () => {
    it('returns the last match', () => {
        expect(findLast([1, 2, 3, 4], (value) => value % 2 === 0)).toBe(4);
        expect(findLast([1, 3], (value) => value % 2 === 0)).toBeUndefined();
    });
});
