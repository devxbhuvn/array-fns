import { describe, expect, it } from 'vitest';
import { rotate } from '../src';

describe('rotate', () => {
    it('rotates values left', () => {
        expect(rotate([1, 2, 3, 4], 1)).toEqual([2, 3, 4, 1]);
    });

    it('rotates values right for negative positions', () => {
        expect(rotate([1, 2, 3, 4], -1)).toEqual([4, 1, 2, 3]);
    });

    it('normalizes large and fractional positions', () => {
        expect(rotate([1, 2, 3, 4], 5)).toEqual([2, 3, 4, 1]);
        expect(rotate([1, 2, 3, 4], 1.9)).toEqual([2, 3, 4, 1]);
    });

    it('rejects non-finite positions and preserves the input', () => {
        expect(() => rotate([1], Infinity)).toThrow(TypeError);
        const input = [1, 2, 3];
        rotate(input, 1);
        expect(input).toEqual([1, 2, 3]);
    });
});
