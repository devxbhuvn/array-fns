import { describe, expect, it } from 'vitest';
import { takeWhile } from '../src';

describe('takeWhile', () => {
    it('takes the initial matching values', () => {
        expect(takeWhile([2, 4, 6, 7, 8], (value) => value % 2 === 0)).toEqual([2, 4, 6]);
    });

    it('returns an empty array when the first value fails', () => {
        expect(takeWhile([1, 2, 3], (value) => value > 1)).toEqual([]);
        expect(takeWhile([], () => true)).toEqual([]);
    });

    it('does not mutate the input', () => {
        const input = [1, 2, 3];
        takeWhile(input, (value) => value < 3);
        expect(input).toEqual([1, 2, 3]);
    });
});
