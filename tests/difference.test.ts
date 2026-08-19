import { describe, expect, it } from 'vitest';
import { difference } from '../src';

describe('difference', () => {
    it('removes values found in the second array', () => {
        expect(difference([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
    });

    it('handles NaN in SameValueZero semantics', () => {
        expect(difference([NaN, 1, 2], [NaN])).toEqual([1, 2]);
    });
});
