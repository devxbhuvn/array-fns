import { describe, expect, it } from 'vitest';
import { sortedIndex } from '../src';

describe('sortedIndex', () => {
    it('finds the insert index', () => {
        expect(sortedIndex([1, 3, 5], 4)).toBe(2);
        expect(sortedIndex([1, 3, 5], 0)).toBe(0);
    });
});
