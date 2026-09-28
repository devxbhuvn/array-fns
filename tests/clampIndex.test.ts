import { describe, expect, it } from 'vitest';
import { clampIndex } from '../src';

describe('clampIndex', () => {
    it('clamps within bounds', () => {
        expect(clampIndex(10, 5)).toBe(5);
        expect(clampIndex(-1, 5)).toBe(4);
        expect(clampIndex(-10, 5)).toBe(0);
    });

    it('throws for invalid length', () => {
        expect(() => clampIndex(0, -1)).toThrow(RangeError);
    });
});
