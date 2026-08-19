import { describe, expect, it } from 'vitest';
import { flatten } from '../src';

describe('flatten', () => {
    it('flattens one level by default', () => {
        expect(flatten([1, [2, [3]], 4], 1)).toEqual([1, 2, [3], 4]);
    });

    it('flattens recursively to the provided depth', () => {
        expect(flatten([1, [2, [3, [4]]]], 2)).toEqual([1, 2, 3, [4]]);
    });

    it('throws for a negative depth', () => {
        expect(() => flatten([1, [2]], -1)).toThrow(RangeError);
    });
});
