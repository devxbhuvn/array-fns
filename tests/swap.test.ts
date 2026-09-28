import { describe, expect, it } from 'vitest';
import { swap } from '../src';

describe('swap', () => {
    it('swaps two indexes', () => {
        expect(swap([1, 2, 3], 0, 2)).toEqual([3, 2, 1]);
    });
});
