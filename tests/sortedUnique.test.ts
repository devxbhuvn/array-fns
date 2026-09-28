import { describe, expect, it } from 'vitest';
import { sortedUnique } from '../src';

describe('sortedUnique', () => {
    it('removes consecutive duplicates', () => {
        expect(sortedUnique([1, 1, 2, 2, 2, 3])).toEqual([1, 2, 3]);
    });
});
