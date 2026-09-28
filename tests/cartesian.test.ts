import { describe, expect, it } from 'vitest';
import { cartesian } from '../src';

describe('cartesian', () => {
    it('returns the cartesian product', () => {
        expect(cartesian([1, 2], ['a', 'b'])).toEqual([
            [1, 'a'],
            [1, 'b'],
            [2, 'a'],
            [2, 'b']
        ]);
    });
});
