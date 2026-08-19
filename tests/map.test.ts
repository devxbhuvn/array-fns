import { describe, expect, it } from 'vitest';
import { map } from '../src';

describe('map', () => {
    it('transforms every value', () => {
        expect(map([1, 2, 3], (value) => value * 2)).toEqual([2, 4, 6]);
    });

    it('passes callback arguments and preserves the input', () => {
        const input = [10, 20];
        const result = map(input, (value, index, array) => {
            expect(array).toBe(input);
            return value + index;
        });
        expect(result).toEqual([10, 21]);
        expect(input).toEqual([10, 20]);
    });

    it('returns an empty array for empty input', () => {
        expect(map([], () => 'value')).toEqual([]);
    });
});
