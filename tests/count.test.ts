import { describe, expect, it } from 'vitest';
import { count } from '../src';

describe('count', () => {
    it('counts values matching a predicate', () => {
        expect(count([1, 2, 3, 4], (value) => value % 2 === 0)).toBe(2);
    });

    it('returns the length when no predicate is provided', () => {
        expect(count([1, 2, 3])).toBe(3);
    });
});
