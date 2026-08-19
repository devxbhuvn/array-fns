import { describe, expect, it } from 'vitest';
import { range } from '../src';

describe('range', () => {
    it('creates a range from 0 to end', () => {
        expect(range(5)).toEqual([0, 1, 2, 3, 4]);
    });

    it('creates a range for start and end values', () => {
        expect(range(1, 5)).toEqual([1, 2, 3, 4]);
    });

    it('supports negative steps', () => {
        expect(range(5, 1, -1)).toEqual([5, 4, 3, 2]);
    });

    it('throws for a zero step', () => {
        expect(() => range(1, 5, 0)).toThrow(RangeError);
    });

    it('rejects fractional one-argument bounds', () => {
        expect(() => range(2.5)).toThrow(TypeError);
    });

    it('rejects non-finite bounds', () => {
        expect(() => range(0, Infinity)).toThrow(TypeError);
    });
});
