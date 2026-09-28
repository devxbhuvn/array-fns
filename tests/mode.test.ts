import { describe, expect, it } from 'vitest';
import { mode } from '../src';

describe('mode', () => {
    it('returns the most frequent value', () => {
        expect(mode([1, 2, 2, 3])).toBe(2);
        expect(mode([])).toBeUndefined();
    });
});
