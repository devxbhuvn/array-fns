import { describe, expect, it } from 'vitest';
import { sumBy } from '../src';

describe('sumBy', () => {
    it('sums iteratee results', () => {
        expect(sumBy([{ n: 2 }, { n: 3 }], (item) => item.n)).toBe(5);
    });
});
