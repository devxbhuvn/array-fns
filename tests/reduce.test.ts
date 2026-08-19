import { describe, expect, it } from 'vitest';
import { reduce } from '../src';

describe('reduce', () => {
    it('reduces from left to right with an initial value', () => {
        expect(reduce([1, 2, 3], (total, value) => total + value, 0)).toBe(6);
    });

    it('uses the first value when no initial value is supplied', () => {
        expect(reduce([1, 2, 3], (total, value) => total + value)).toBe(6);
    });

    it('throws for an empty array without an initial value', () => {
        expect(() => reduce([] as number[], (total, value) => total + value)).toThrow(TypeError);
    });
});
