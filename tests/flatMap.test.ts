import { describe, expect, it } from 'vitest';
import { flatMap } from '../src';

describe('flatMap', () => {
    it('maps values and flattens one level', () => {
        expect(flatMap([1, 2, 3], (value) => [value, value * 10])).toEqual([1, 10, 2, 20, 3, 30]);
    });

    it('supports mappers returning either a value or an array', () => {
        expect(flatMap([1, 2, 3], (value) => (value === 2 ? value : [value]))).toEqual([1, 2, 3]);
        expect(flatMap([1], () => [[1, 2]])).toEqual([[1, 2]]);
    });

    it('returns an empty array for empty input', () => {
        expect(flatMap([], () => [1])).toEqual([]);
    });
});
