import { describe, expect, it } from 'vitest';
import { shuffle } from '../src';

describe('shuffle', () => {
    it('returns a new array with same elements', () => {
        const input = [1, 2, 3, 4, 5];
        const result = shuffle(input);
        expect(result).toHaveLength(input.length);
        expect(result).toEqual(expect.arrayContaining(input));
        expect(input).toEqual([1, 2, 3, 4, 5]);
    });

    it('handles empty arrays', () => {
        expect(shuffle([])).toEqual([]);
    });
});
