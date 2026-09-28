import { describe, expect, it } from 'vitest';
import { maxBy } from '../src';

describe('maxBy', () => {
    it('returns the item with the largest iteratee', () => {
        expect(maxBy([{ n: 1 }, { n: 5 }], (item) => item.n)).toEqual({ n: 5 });
        expect(maxBy([], (item) => item)).toBeUndefined();
    });
});
