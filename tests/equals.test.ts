import { describe, expect, it } from 'vitest';
import { equals } from '../src';

describe('equals', () => {
    it('compares arrays with SameValueZero', () => {
        expect(equals([1, Number.NaN], [1, Number.NaN])).toBe(true);
        expect(equals([1, 2], [1, 3])).toBe(false);
    });
});
