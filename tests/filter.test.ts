import { describe, expect, it } from 'vitest';
import { filter } from '../src';

describe('filter', () => {
    it('filters values by predicate', () => {
        expect(filter([1, 2, 3, 4], (value) => value % 2 === 0)).toEqual([2, 4]);
    });

    it('provides index and array to the callback', () => {
        const result = filter(['a', 'b', 'c'], (_, index, array) => index < array.length - 1);
        expect(result).toEqual(['a', 'b']);
    });
});
