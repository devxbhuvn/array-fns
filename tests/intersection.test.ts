import { describe, expect, it } from 'vitest';
import { intersection } from '../src';

describe('intersection', () => {
    it('returns the common values between arrays', () => {
        expect(intersection([1, 2, 3, 4], [2, 4, 5])).toEqual([2, 4]);
    });

    it('removes duplicates in the result', () => {
        expect(intersection([1, 2, 2, 3], [2, 2, 4])).toEqual([2]);
    });
});
