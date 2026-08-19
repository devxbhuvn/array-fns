import { describe, expect, it } from 'vitest';
import { reduceRight } from '../src';

describe('reduceRight', () => {
    it('reduces from right to left with an initial value', () => {
        expect(reduceRight(['a', 'b', 'c'], (result, value) => result + value, '')).toBe('cba');
    });

    it('uses the last value when no initial value is supplied', () => {
        expect(reduceRight(['a', 'b', 'c'], (result, value) => result + value)).toBe('cba');
    });

    it('throws for an empty array without an initial value', () => {
        expect(() => reduceRight([] as number[], (total, value) => total + value)).toThrow(TypeError);
    });
});
