import { describe, expect, it } from 'vitest';
import { sliding } from '../src';

describe('sliding', () => {
    it('returns overlapping windows', () => {
        expect(sliding([1, 2, 3, 4], 2)).toEqual([
            [1, 2],
            [2, 3],
            [3, 4]
        ]);
        expect(sliding([1, 2, 3, 4], 2, 2)).toEqual([
            [1, 2],
            [3, 4]
        ]);
        expect(() => sliding([1], 0)).toThrow(RangeError);
    });
});
