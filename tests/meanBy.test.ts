import { describe, expect, it } from 'vitest';
import { meanBy } from '../src';

describe('meanBy', () => {
    it('returns the mean of iteratee results', () => {
        expect(meanBy([{ n: 2 }, { n: 4 }], (item) => item.n)).toBe(3);
    });
});
