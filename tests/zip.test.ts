import { describe, expect, it } from 'vitest';
import { zip } from '../src';

describe('zip', () => {
    it('pairs values together', () => {
        expect(zip([1, 2], ['a', 'b'])).toEqual([
            [1, 'a'],
            [2, 'b']
        ]);
    });

    it('ignores unmatched trailing values', () => {
        expect(zip([1, 2, 3], ['a'])).toEqual([[1, 'a']]);
    });
});
