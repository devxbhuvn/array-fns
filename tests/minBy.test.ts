import { describe, expect, it } from 'vitest';
import { minBy } from '../src';

describe('minBy', () => {
    it('returns the item with the smallest iteratee', () => {
        expect(minBy([{ n: 1 }, { n: 5 }], (item) => item.n)).toEqual({ n: 1 });
    });
});
