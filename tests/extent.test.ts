import { describe, expect, it } from 'vitest';
import { extent } from '../src';

describe('extent', () => {
    it('returns min and max', () => {
        expect(extent([3, 1, 4, 2])).toEqual([1, 4]);
    });

    it('ignores non-finite values', () => {
        expect(extent([Number.NaN, 2, Number.POSITIVE_INFINITY, 5])).toEqual([2, 5]);
    });

    it('returns undefined when empty', () => {
        expect(extent([])).toBeUndefined();
    });
});
