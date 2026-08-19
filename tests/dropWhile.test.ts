import { describe, expect, it } from 'vitest';
import { dropWhile } from '../src';

describe('dropWhile', () => {
    it('drops the initial matching values', () => {
        expect(dropWhile([0, 0, 4, 5], (value) => value === 0)).toEqual([4, 5]);
    });

    it('returns the original values when the first value fails', () => {
        expect(dropWhile([1, 2, 3], (value) => value < 1)).toEqual([1, 2, 3]);
        expect(dropWhile([], () => true)).toEqual([]);
    });

    it('does not mutate the input', () => {
        const input = [0, 1, 2];
        dropWhile(input, (value) => value === 0);
        expect(input).toEqual([0, 1, 2]);
    });
});
